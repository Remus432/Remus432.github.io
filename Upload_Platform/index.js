const express = require("express");
const firebase = require("firebase");
const admin = require("firebase-admin");
const multer = require("multer");
const upload = multer();
const cloudinary = require("cloudinary");
const serviceAccount = require("./admin.json");


// Config cloudinary
cloudinary.config({
    cloud_name: "toporasca",
    "api_key": "183668327677982",
    "api_secret": "SaK6ql7evdfxrQmD4S4CpX1bIM4"
})


// Initialize
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://uploadplatform.firebaseio.com"
})

firebase.initializeApp({
    "apiKey": "AIzaSyBMYn9PpUezAt3WG626WbUb5SLAkwQErXg",
    serviceAccount: "admin.json",
    databaseURL: "https://uploadplatform.firebaseio.com"
})


// Init App
const app = express();

const http = require("http").Server(app);

const io = require("socket.io")(http);

// View engine
app.set("view engine", "ejs");

// Static Files
app.use(express.static(__dirname + "/static"));  


// Get /
app.get("/", (req, res) => {
    res.render("signIn.ejs");
})

// Set Users
const users = firebase.database().ref("users");

/*io.on("connection", socket => {
    console.log("Socket connected");

    /*socket.on("data", data => {
        console.log(data);
    })
    socket.emit("data", "Sugi coaiele");

    socket.on("disconnect", () => console.log("Disconencted"));
})*/

io.on("connection", socket => {
    console.log("Socket connected");

    socket.on("data", data => {
        // Get Data Body
        const email = data.email;
        const password = data.password;
        const avatar = data.avatar;

        // Push New User
        let newUser = users.push();

        // Upload Image
        cloudinary.uploader.upload(avatar, (result) => {
            // Get Image URL
            const url = result.url

            // Set New User Object
            newUser.set({ email, password, url});

            console.log(url);
        });

        // Authenticate User
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(err => {
            console.log(err.code, err.message);
        });
    })

    socket.on("disconnect", () => console.log("Disconencted"));
})

// Post
/*app.post("/", upload.single("item"), (req, res) => {
    console.log(`Email: ${req.body.email} Password: ${req.body.password}`);

    

    // Get Email And Password From Form
   /* const email = req.body.email;
    const password = req.body.password;

    // Push New User
    let newUser = users.push();

    // Set New User Object
    newUser.set({ email, password });
    
    console.log("Files", req.file);


    //cloudinary.uploader.upload(req.file.item.originalname, (result) => console.log(result));
    
    // Render Thanks Page
    /*res.render(("thanks.ejs"), {
        email: req.body.email,
        password: req.body.password
    });*/

    // Create User On SignUp
    /*firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(err => {
            console.log(err.code, err.message);
        });*/
//})*/



// Sample Data
/*firebase.database().ref("/").set({
    username: "test",
    email: "test@gmail.com"
})*/


http.listen(process.env.PORT || 3000, () => console.log("Server is up and running..."));