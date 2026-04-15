const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Ajuste dinámico del tamaño
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.7; // Deja espacio para el footer
}
window.onresize = resize;
resize();

// 4. ESCENARIO (Regla 4)
canvas.style.backgroundImage = "url('assets/img/fondo.png')"; 
canvas.style.backgroundSize = "cover";

const bgMusic = new Audio('assets/audio/fondo.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.5;

const playMusic = () => {
    bgMusic.play().then(() => {
        console.log("Música iniciada correctamente");
        // Una vez que suena, quitamos los escuchadores para no reiniciar
        window.removeEventListener('click', playMusic);
        window.removeEventListener('keydown', playMusic);
    }).catch(error => {
        console.error("Error al reproducir: ", error);
    });
};

// Escuchar cualquier interacción (clic o tecla)
window.addEventListener('click', playMusic);
window.addEventListener('keydown', playMusic);

// 2. RECURSOS (Regla 2)
const ghostFiles = {
    'red': 'assets/img/blinky.png',
    'pink': 'assets/img/rosa.png',
    'cyan': 'assets/img/azul.png',
    'orange': 'assets/img/naranja.png',
    'collision': 'assets/img/asustado.png'
};

const loadedImages = {};
let imagesToLoad = Object.keys(ghostFiles).length;
let score = 0;

for (let key in ghostFiles) {
    loadedImages[key] = new Image();
    loadedImages[key].src = ghostFiles[key];
    loadedImages[key].onload = () => {
        imagesToLoad--;
        if (imagesToLoad === 0) generateGhosts(25);
    };
}

class Ghost {
    constructor(x, y, radius, type, speed) {
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.type = type;
        this.baseSpeed = speed;
        this.collisionTimer = 0;
        this.moveType = Math.floor(Math.random() * 4); // 4 direcciones (Regla 1) [cite: 11]
        this.angle = Math.random() * Math.PI * 2;
        this.dx = (Math.random() - 0.5) * speed * 6;
        this.dy = (Math.random() - 0.5) * speed * 6;
    }

    draw(context) {
        let img = this.collisionTimer > 0 ? loadedImages['collision'] : loadedImages[this.type];
        const size = this.radius * 2.5;

        context.save();
        // Mejora visual: Sombra suave para que "resalten" del fondo
        context.shadowBlur = 15;
        context.shadowColor = "rgba(0,0,0,0.5)";

        if (img && img.complete) {
            context.drawImage(img, this.posX - size/2, this.posY - size/2, size, size);
        } else {
            // Backup visual si no cargan las imágenes
            context.beginPath();
            context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
            context.fillStyle = this.type;
            context.fill();
        }
        context.restore();
        
        if (this.collisionTimer > 0) this.collisionTimer--;
    }

    update(context, ghosts) {
        if (this.moveType === 3) { // Movimiento circular (Regla 1) [cite: 11]
            this.angle += 0.05;
            this.posX += Math.cos(this.angle) * 4;
            this.posY += Math.sin(this.angle) * 4;
        } else {
            this.posX += this.dx;
            this.posY += this.dy;
        }

        // Rebotes en bordes [cite: 15]
        if (this.posX + this.radius > canvas.width || this.posX - this.radius < 0) this.dx *= -1;
        if (this.posY + this.radius > canvas.height || this.posY - this.radius < 0) this.dy *= -1;

        ghosts.forEach(other => {
            if (this !== other && this.checkCollision(other)) {
                this.collisionTimer = 10; // Animación choque [cite: 15]
                this.resolveCollision(other);
            }
        });
        this.draw(context);
    }

    checkCollision(other) {
        let dx = other.posX - this.posX;
        let dy = other.posY - this.posY;
        return Math.sqrt(dx * dx + dy * dy) < (this.radius + other.radius);
    }

    resolveCollision(other) {
        [this.dx, other.dx] = [other.dx, this.dx];
        [this.dy, other.dy] = [other.dy, this.dy];
    }
}

let ghostsArray = [];

// REGLA 3: Eliminar y reaparecer (Corregido para precisión de clic) [cite: 18]
canvas.addEventListener("mousedown", (event) => {
    // Calculamos la posición real dentro del canvas
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    for (let i = ghostsArray.length - 1; i >= 0; i--) {
        let g = ghostsArray[i];
        // Calculamos distancia entre clic y centro del fantasma
        let dist = Math.sqrt(Math.pow(mouseX - g.posX, 2) + Math.pow(mouseY - g.posY, 2));
        
        if (dist < g.radius * 1.8) { // Margen de error para facilitar el clic
            ghostsArray.splice(i, 1); // Desaparece [cite: 18]
            score++;
            document.getElementById("contador").innerText = `Objetos eliminados: ${score}`;
            addSingleGhost(); // Reaparece aleatoriamente [cite: 18]
            break;
        }
    }
});

function addSingleGhost() {
    const types = ['red', 'pink', 'cyan', 'orange'];
    let radius = 25;
    let x = Math.random() * (canvas.width - radius * 2) + radius;
    let y = Math.random() * (canvas.height - radius * 2) + radius;
    ghostsArray.push(new Ghost(x, y, radius, types[Math.floor(Math.random() * 4)], Math.random() * 2 + 1));
}

function generateGhosts(n) {
    ghostsArray = [];
    for (let i = 0; i < n; i++) addSingleGhost();
    requestAnimationFrame(animate);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ghostsArray.forEach(ghost => ghost.update(ctx, ghostsArray));
    requestAnimationFrame(animate);
}