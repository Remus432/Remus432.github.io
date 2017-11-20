// https://kitsu.io/api/edge
let selectedItem = document.querySelector("select");
const input = document.querySelector("input");
//let inputVal = input.value;
let defaultValue = "name";

$("input").on("keypress", function(e) {
    
    let inputVal = $("input").val().trim();
    console.log(inputVal);
    console.log(selectedItem.options[selectedItem.selectedIndex].value);
    console.log(e.target.value.trim());
    // Store the value
    let defaultValue = selectedItem.options[selectedItem.selectedIndex].value;
    // If/else to check the genre/name
    if (defaultValue == "Search by name") {
        axios.get("https://kitsu.io/api/edge/anime?filter[text]=" + inputVal)
            .then(response => {
                console.log(response);
                let data = response.data.data;
                var output = "";
                data.forEach(i => {
                    output += `
                    <div class="item">
                    <h1>${i.attributes.canonicalTitle}</h1>
                    <img src="${i.attributes.posterImage.large}" onclick="animeSelect(${i.id})" />
                    </div>
                    `;
                    document.querySelector(".wrapper").innerHTML = output;
                });

                $(".item").on("mouseover", () => $(".text").animate({
                    backgroundColor: "#1c1d1e"
                }, 500));

                $(window).scroll(function() {
                    if ($(document).scrollTop() > 50) {
                        $("nav").addClass("shrink");
                    } else {
                        $("nav").removeClass("shrink");
                    }
                });

                // Store data
                window.animeSelect = function(id) {
                    sessionStorage.setItem("animeID", id);
                    window.location = "anime.html";
                    return false;
                };

            })
            .catch(error => console.log(error))
    } else {
        axios.get("https://kitsu.io/api/edge/anime?filter[genres]=" + e.target.value.trim())
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
    // Call request on input search
})


