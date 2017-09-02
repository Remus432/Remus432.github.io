$(document).ready(function() {

    //SVG Animation
     $("path").animate(
       {"strokeDashoffset": "0"}
       ,3500, function() {
         $("path").addClass("fillChange");
         $("svg").addClass("scaleBig");
         $(".join").addClass("animated fadeInUp")
       })

       $("button").on("click", () => {
          $(".image").fadeOut();
        })

      var streamers = ["ogn_lol", "lck1", "c9sneaky", "aimbotcalvin"];



       for (var i = 0; i < streamers.length; i++) {

       $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + streamers[i] + "?callback=?", function (data) {
         console.log(data);

        var names = data.stream.channel.display_name;
        var span = document.createElement("P");
        span.innerHTML = names;
        console.log(names);


        if (data.stream == null) {
          var offline = document.createElement("IMG");
          var div = document.createElement("DIV");
          div.className = "divColor";
          offline.src = "offline.jpg";
          offline.setAttribute("width", "330px");
          document.querySelector(".wrap").appendChild(offline);
        }
        else {

          var links = data.stream.channel.url;
          var linkA = document.createElement("A");
          linkA.setAttribute("href", links);
          linkA.setAttribute("target", "_blank");
          document.querySelector(".wrap").appendChild(linkA);
          console.log(links);
          var source = data.stream.preview.medium;
          var image = document.createElement("IMG");
          image.src = source;

          $("a").each(function() {
            $(this).append(image);
            $(this).append(span);
          })

        }
    })
  }
});
