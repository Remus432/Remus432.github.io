$(document).ready(function() {

    Materialize.updateTextFields();
  
        

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyA8y94LqspHnDrSs0G0IZEltIdesRw5bE4",
        authDomain: "semistack.firebaseapp.com",
        databaseURL: "https://semistack.firebaseio.com",
        projectId: "semistack",
        storageBucket: "semistack.appspot.com",
        messagingSenderId: "653222743377"
      };
      firebase.initializeApp(config);

      // Grabbing Firebase Services
    var auth = firebase.auth(),
	database = firebase.database();

      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      var allInput = document.querySelectorAll("input");

      $("input").on("keypress", (e) => {
          if (e.keyCode === 13) {
              e.preventDefault();
              console.log(e);
          }
      })


      $("#signUp").on("click", function(e) {
        e.preventDefault();
        
       /* var email = $("#email").val().trim(),
            password = $("#password").val().trim();

            auth.createUserWithEmailAndPassword(email, password)
              .then(function (newUser) {
                var user = {
                  email: email,
                  password: password,
                  id: newUser.uid
                }

                var ref = database.ref('users/' + newUser.uid); // refering to the database

                ref.set(user); // save the data into the database*/

                location.href = "signUp.html";

            /*  }).catch(function (err) {
                console.log(err);
                console.log("Nooo, somethint went wrong");
              }) */
          
      })

      $("#signIn").on("click", function(e) {
        e.preventDefault();

        var email = $("#email").val().trim(),
            password = $("#password").val().trim();
        
        console.log(email, password);

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function (user) {
              console.log(user);

              location.href = "signIn.html";
            })

      })

    


})