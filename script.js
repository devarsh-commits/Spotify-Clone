console.log("Let's start our JavScript")
//Writing a program to add cards dynamically
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
async function songs() {
    let sngg= await fetch(http://127.0.0.1:3000/songs);
        sng_lst=sngg.text()
}
// addCard("https://i.scdn.co/image/ab67706f00000002e2881c83b28f451044b0b8f7", "South Mix", "Devarsh");