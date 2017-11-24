window.getAnime = function() {
    var animeName = sessionStorage.getItem("animeID");
    var output = "";

    axios.get("https://kitsu.io/api/edge/anime?filter[id]=" + animeName)
        .then(response => {
            console.log(response);

            output += `
            <div class="row">
            <i class="ion-arrow-left-a" onclick="returnHome()" style="font-size:400%;position:absolute;top:0;left:20px"></i>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="card" style="width: 20rem" id="label">
                    <img class="card-img-top" src="${response.data.data[0].attributes.posterImage.original}" />
                    <div class="card-body bg-primary">
                        <h1 class="text-center text-light">${response.data.data[0].attributes.canonicalTitle}</h1>
                        <div class="float-left my-2">
                            <p style="font-weight: bold">Average Rating</p>
                            <i style="color:#f1c40f" class="ion-star"><span style="margin-left:5px">${response.data.data[0].attributes.averageRating}</span></i>
                        </div>
                        <div class="float-right my-2">
                            <p style="font-weight: bold">Episodes</p>
                            <i style="color:#f1c40f" class="ion-ios-film"><span style="margin-left:5px">${response.data.data[0].attributes.episodeCount}</span></i>
                        </div>
                        <div class="float-left my-2">
                            <p style="font-weight: bold">Popularity Rank</p>
                            <i style="color:#f1c40f" class="ion-ios-pulse-strong"><span style="margin-left:5px">${response.data.data[0].attributes.popularityRank}</span></i>
                        </div>
                        <div class="float-right my-2">
                            <p style="font-weight: bold">Rating Rank</p>
                            <i style="color:#f1c40f" class="ion-android-globe"><span style="margin-left:5px">${response.data.data[0].attributes.ratingRank}</span></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="jumbotron" style="box-shadow: 5px 5px 20px #000">
                    <div class="card">
                     <div class="card-body">
                       <iframe  src="https://www.youtube.com/embed/${response.data.data[0].attributes.youtubeVideoId}?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1" frameborder="0" allowfullscreen></iframe>
                     </div>
                    </div>
                    <p class="text-justify text-center" style="font-weight:400;font-size:20px;color:#1c1d1e">${response.data.data[0].attributes.synopsis}</p>
                </div>
            </div>
        </div>
            `;

            document.querySelector(".container").innerHTML += output;

        })
}

getAnime();

function returnHome() {
    location.href = "index.html";
}