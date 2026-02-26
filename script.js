
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let score = document.getElementById("puntuacion")

// 🐍 Snake como array de segmentos
let snake = [{x: 200, y: 200}];

let size = 20;

// Dirección inicial
let dx = 0;
let dy = 0;

// Comida
let comida = {
    x: Math.floor(Math.random() * (canvas.width / size)) * size,
    y: Math.floor(Math.random() * (canvas.height / size)) * size
};

puntos = 0;
score.innerHTML = "puntos: " + puntos;




// 🎮 Movimiento automático
function update() {

    // Nueva cabeza
    let head = {
        x: snake[0].x + dx,
        y: snake[0].y + dy
    };

    snake.unshift(head);

    // Si come
    if (head.x === comida.x && head.y === comida.y) {
        comida.x = Math.floor(Math.random() * (canvas.width / size)) * size;
        comida.y = Math.floor(Math.random() * (canvas.height / size)) * size;
        puntos += 1;
        score.innerHTML = "puntos: " + puntos;
       
      

    } else {
        snake.pop()
        // elimina cola si no comió
    }

    // Si choca con pared → reinicia
    if (
        head.x < 0 ||
        head.x >= canvas.width ||
        head.y < 0 ||
        head.y >= canvas.height
    ) {
        alert("Game Over");
        snake = [{x: 200, y: 200}];
        dx = 0;
        dy = 0;
        puntos = 0;
        score.innerHTML = "puntos: " + puntos;
      
    }
}




function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar comida
    ctx.fillStyle = "green";
    ctx.fillRect(comida.x, comida.y, size, size);

    // Dibujar snake
    ctx.fillStyle = "red";
    snake.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, size, size);
    });
}



// Loop del juego
function gameLoop() {
    update();
    draw();
}



setInterval(gameLoop, 120);



//function point (){
  // letpuntos2= document.getElementById(puntos")
  //puntos2.innerHTML =puntos;
   
   
//}



// Controles
document.addEventListener("keydown", function(e) {

    if (e.key === "w" && dy === 0) {
        dx = 0;
        dy = -size;
    }

    if (e.key === "s" && dy === 0) {
        dx = 0;
        dy = size;
    }

    if (e.key === "a" && dx === 0) {
        dx = -size;
        dy = 0;
    }

    if (e.key === "d" && dx === 0) {
        dx = size;
        dy = 0;
    }
});
