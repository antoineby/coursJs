//let tab = [22, 11, 93];
//let obj = { 1: 22, 2: 11, 3: 93 }

/**** Exercice 1 *****/

let imgCarrousel = [
    "https://cdn.pixabay.com/photo/2017/06/04/16/33/pyramids-2371501_960_720.jpg",
    "http://wowslider.com/sliders/demo-29/data1/images/spider.jpg",
    "https://i.pinimg.com/originals/b9/dd/f6/b9ddf6d58154c378ac98ca5446ef9320.png"
]

let occurrenceCarrousel = 0;

setInterval(function() {
    let img = document.querySelector('#slider img')
    img.src = imgCarrousel[occurrenceCarrousel];
    occurrenceCarrousel++
    if (occurrenceCarrousel == imgCarrousel.length)
        occurrenceCarrousel = 0;
}, 5000);

/**** Exercice 2 *****/

function randomText(text = "Hello") {
    let tableau = text.split("");
    tableau = arrayToStringRandom(tableau).join('');
    return tableau;
}

function arrayToStringRandom(tab = []) {
    let tabRandom = []

    let random, newArray = [];
    for (let i = 0; i < tab.length; i++) {
        do {
            random = getRandomInt(0, tab.length);
        } while (tabRandom.includes(random));
        tabRandom.push(random);
        newArray.push(tab[random]);
        console.log(random);
    }
    return newArray;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let baliseA = document.querySelectorAll("#header > nav a")
for (let i = 0; i < baliseA.length; i++) {
    baliseA[i].innerHTML = randomText(baliseA[i].innerHTML);

}
console.log(baliseA)

randomText("Hello");

/** Exercice 3 **/

let imgclic = [
    "https://www.mybbshowershop.com/4385-large_leotea/invitation-anniversaire-forme-de-ballon-de-foot.jpg",
    "https://www.basketstore.fr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/a/ballon-nike-hyperelite-orange_1.jpg",
    "https://i2.cdscdn.com/pdt2/3/0/8/1/1200x1200/hum3335290534308/rw/ballon-de-hand-hummel-vortex-training.jpg"
]

let imghtml = document.querySelectorAll('#services img');
console.log(imghtml);

for (let i = 0; i < imghtml.length; i++) {
    imghtml[i].addEventListener("click", function() {
        imghtml[i].src = imgclic[i]
    });
}

/** Exercice 4 **/

let paragraph = document.querySelectorAll(".more a")[0];
const textBaliseA = document.querySelectorAll("#services figcaption p")[0].innerHTML;
paragraph.addEventListener("click", function() {
    event.preventDefault();
    let read = document.querySelectorAll("#services figcaption p")[0];
    if (paragraph.innerHTML == "Read More »") {
        read.innerHTML += "ouais ouais ouais ouais ouais ouais"
        paragraph.innerHTML = "Read Less »"
    } else {
        read.innerHTML = textBaliseA
        paragraph.innerHTML = "Read More »"
    }
})