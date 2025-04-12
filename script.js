console.log("Let's start our JavScript")
//Writing a program to add cards dynamically
async function fetchsong(params) {
    let a = await fetch("http://127.0.0.1:3000/songs/");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1]);
        }

    }
    return songs;


}
async function main(params) {
    //get the list of the songs
    let songs = await fetchsong();
    //show all the songs in the playlists
    let songsol = document.querySelector(".playlist").getElementsByTagName("ol")[0]
    for (const song of songs) {
        songsol.innerHTML = songsol.innerHTML + `  <li>
                    <img src="music.svg" alt="" class="c-svg">
                    <div>${song.replaceAll("_", " ")}</div>
                    <div class="wrap flex">Play Now <img src="splay.svg" alt="" class="c-svg"></div>
                </li>`;

    }
    // //play the first song code
    // var audio = new Audio(songs[0]);
    // // audio.play();
    // audio.addEventListener("loadeddata", () => {
    //     console.log(audio.duration, audio.src, audio.currentTime)
    // })
    Array.from(document.querySelector(".playlist").getElementsByTagName("li")).forEach(e=>{
        console.log(e)
    })
}
main();
l










































let addCard = (image, h, p) => {
    let html = `
                    <div class="cards font">
                        <div class="play">
                        <img src="play.svg" alt="">  
                        </div>
                        <img src=${image} alt="">
                        <h2>${h}</h2>
                        <p>${p}</p>
                    </div>`
    document.querySelector(".cardcontainer").innerHTML = document.querySelector(".cardcontainer").innerHTML + html;
}
// addCard("https://i.scdn.co/image/ab67706f00000002e2881c83b28f451044b0b8f7", "South Mix", "Devarsh");
