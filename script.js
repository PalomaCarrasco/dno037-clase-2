var elEncabezado = document.querySelector("header");
var laHora = new Date().getHours();
var dondeEstas;
if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}
var elSaludo;
if (5 < laHora && laHora < 12) {
    elSaludo = "Good Morning";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "Good Afternoon";
} else {
    elSaludo = "Good Night";
}
var elColor;
function setup() {
    createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
    background(189,236,182);
    createElement("h1", elSaludo).parent(elEncabezado).id("title");
    createA("index.html", "index").parent("vinculos");
    createA("page.html", "page").parent("vinculos");
    createA("paint.html", "paint").parent("vinculos");
    elColor = createColorPicker("#000000").parent("controles");
    elSlider = createSlider(1, 5, 3).parent("controles");
    if (dondeEstas) {
        portada();
    } else {
        pagina();
    }
}
function draw() {
    stroke(elColor.color());
    strokeWeight(elSlider.value());
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function portada() {
    createSpan(". You are in index.html").parent("title");
    select("a:nth-child(1)").style("font-weight", "bold").style("color", "#000000");
}
function pagina() {
    createSpan(". You are in page.html").parent("title");
    select("a:nth-child(2)").style("font-weight", "bold").style("color", "#000000");
}