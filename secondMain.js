$(document).ready(function() {
    "use strict";
    
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
    
            var auth = firebase.auth(),
        database = firebase.database();
    
             // Sign the logged in user out
          $("button").on('click', function (e) {
    
            e.preventDefault();
    
            auth.signOut() // firebase method to sign otu
              .then(function () {
    
                location.href = 'index.html'; // redirect the user to the sign in page
                
              })
              // Dealing with errors
              .catch(function (err) {
                console.log(err);
              })
    
          });
      
          
          $("input").focus(() => {
            $("input").animate({
              width: "300px"
            }, 1000)
          })
          .blur(() => {
            $("input").animate({
              width: "200px"
            }, 1000)
          });
          
    
          $("input").on("keypress", (e) => {
            
            var movieData = $("input").val().trim();
            var element = document.getElementById("element");
            var fullURL = "https://api.themoviedb.org/3/search/movie?api_key=2015bad48afec319b116488447972b4c&query=" + movieData;
            
            
             //Create function for each request
              $.ajax({
                dataType: "json",
                url: fullURL,
                async: true,
                success: function(data) {
                  console.log(data);
    
    
                  var image, imageURL, dataImage, output;
    
                  output = "";
                  var dataResults = data.results;
    
    
                
    
                  $.each(dataResults, (index, movie) => {
                    output += `
                      
                       <div id="alignData" class="col-md-5 col-sm-6 align-self-center">
                       <div class="well">
                        <img onclick="movieSelect('${movie.id}')" src="https://image.tmdb.org/t/p/w500${movie.poster_path}"/>
                        <div class="text-center">
                        <p>${movie.original_title}</p>
                        </div>
                      </div>
                        </div>
                      
                    `;
                  });
    
                  $("#data").html(output);
    
                  function working() {
                    image = new Image();
                    image.src = imageURL; 
                    $("#element").append(image);
                  }
    
    
                }
              });
    
              window.movieSelect = function (id) {
                sessionStorage.setItem("movieId", id);
                window.location = "movie.html";
                return false;
              }
    
    
    
              /* window.getMovie = function() {
                var movieName = sessionStorage.getItem("movieId");

    
               /* $.ajax({
                dataType: "json",
                url: "https://api.themoviedb.org/3/search/movie?api_key=2015bad48afec319b116488447972b4c&query=" + movieName,
                async: true,
                success: function(data) {
                  console.log(data);
    

    
                  var dataResults = data.results;
    
                  var output = `
                    
                        <p>${dataResults.original_title}</p>
                      
                  `

                  console.log(dataResults.original_title)
    
                  $("#movie").html(output);
    
    
    
      
    
                }
              });*/

              axios.get("https://api.themoviedb.org/3/search/movie?api_key=2015bad48afec319b116488447972b4c&query=" + movieName)
                .then((response) => {
                    console.log(response);
                })
    
    
    
    
           // }*/
              

    
            
          })
        })