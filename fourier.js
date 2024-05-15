

let angle = 0;
let wave = []

let lang;
let kort;

let bediening = 40;
let slider;

function setup() {
  slider = createSlider(1, 20, 4);
  slider.size(window.innerWidth);
  slider.parent('sketch-holder');
    var canvas = createCanvas(window.innerWidth, 200);
    canvas.parent('sketch-holder');
}

function draw() {
    frameRate(30);
    lang = 300;
    kort = 200;

    translate(lang/3,kort/2);

    background(0);
    let x = 0;
    let y = 0;

    for (i=0; i<slider.value(); i++) {
        let n = 1 + 2 * i;
        let prevX = x;
        let prevY = y;
        
        let radius = (lang / 6)/n;
        x += radius * cos(angle * n);
        y += radius * sin(angle * n);

        noFill();
        stroke(255);
        ellipse(prevX,prevY, radius * 2);
        line(prevX, prevY, x, y);
  }
  
    wave.unshift(y);
    
    translate((lang/3), 0)
    beginShape()
    for (i=0; i<(window.innerWidth - (lang/2)); i++) {
        vertex(i, wave[i])
    }
    endShape()
    line(x-(lang/3), y, 0, wave[0])
    
    angle += 0.05
}