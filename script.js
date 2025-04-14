console.log("Let's start our JavScript")
let currentsong = new Audio();
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
function formatTime(seconds) {
    seconds = Math.floor(seconds); // Remove milliseconds
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}


const playmusic = (track,pause=false) => {
    // let audio = new Audio("/songs/" + track)
    currentsong.src = "/songs/" + track;
    if(!pause){
        currentsong.play();
        play.src="pause.svg";
    }
    document.querySelector(".songinfo").innerHTML=decodeURI(track);
    document.querySelector(".songtime").innerHTML="00:00/00:00"
}
async function main(params) {
    //get the list of the songs
    let songs = await fetchsong();
    playmusic(songs[0],true);


    //show all the songs in the playlists
    let songsol = document.querySelector(".playlist").getElementsByTagName("ol")[0]
    for (const song of songs) {
        songsol.innerHTML = songsol.innerHTML + `  <li>
                    <img src="music.svg" alt="" class="c-svg">
                    <div>${song.replaceAll("%20", " ")}</div>
                    <div class="wrap flex">Play Now <img src="splay.svg" alt="" class="c-svg"></div>
                </li>`;

    }
    //play the first song code
    //     var audio = new Audio(songs[0]);
    //     audio.play();
    //     audio.addEventListener("loadeddata", () => {
    //    console.log(audio.duration, audio.src, audio.currentTime)
    //     })
    Array.from(document.querySelector(".playlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.getElementsByTagName("div")[0].innerHTML)
            playmusic(e.getElementsByTagName("div")[0].innerHTML);
        })
    })
    play.addEventListener("click",()=>{
        if(currentsong.paused){
            currentsong.play();
            play.src="pause.svg"
        }
        else{
            currentsong.pause()
            play.src="splay.svg"
        }
    })

    //listen for time update event
    currentsong.addEventListener("timeupdate",()=>{
        console.log(currentsong.currentTime,currentsong.duration);
        document.querySelector(".songtime").innerHTML=`${formatTime(currentsong.currentTime)}:${formatTime(currentsong.duration)}`
        document.querySelector(".crcle").style.left=(currentsong.currentTime/currentsong.duration)*100 +"%"

    })
    //add an even listner to seekbar
   document.querySelector(".seekbar").addEventListener("click",e=>{
    let percent=(e.offsetX/e.target.getBoundingClientRect().width)*100;
        document.querySelector(".crcle").style.left=percent +"%";
        currentsong.currentTime=(currentsong.duration*percent)/100;
   })
   document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".box2-side").style.left=0;
  });
  document.querySelector(".img").addEventListener("click",()=>{
    document.querySelector(".box2-side").style.left=-108 + "%";
  })
  
}
main();











































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
