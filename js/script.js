document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".circulo-clickeable").forEach(spot => {
        spot.addEventListener("click", function() {
            window.location.href = this.getAttribute("data-target");
        });
    });
    document.querySelectorAll(".cuadrado-horizontal-clickeable").forEach(spot => {
        spot.addEventListener("click", function() {
            window.location.href = this.getAttribute("data-target");
        });
    });
    document.querySelectorAll(".cuadrado-vertical-clickeable").forEach(spot => {
        spot.addEventListener("click", function() {
            window.location.href = this.getAttribute("data-target");
        });
    });


    // Responsive
    function funcionPuntos() {
        const img = document.querySelector(".imagen-maquina");
        const circulos = document.querySelectorAll(".circulo-clickeable");
        const cuadradosHorizontal = document.querySelectorAll(".cuadrado-horizontal-clickeable");
        const cuadradosVertical = document.querySelectorAll(".cuadrado-vertical-clickeable");
        const imgWidth = img.offsetWidth;
        const imgHeight = img.offsetHeight;
        const originalWidth = 1080; // Ancho imagen
        const scale = imgWidth / originalWidth;

        circulos.forEach(spot => {
                const originalLeft = parseFloat(spot.style.left);
                const originalTop = parseFloat(spot.style.top);
                spot.style.left = `${originalLeft * scale}px`;
                spot.style.top = `${originalTop * scale}px`;
                spot.style.width = `${38 * scale}px`;
                spot.style.height = `${38 * scale}px`;
        });
        cuadradosHorizontal.forEach(spot => {
                const originalLeft = parseFloat(spot.style.left);
                const originalTop = parseFloat(spot.style.top);
                const originalWidthRect = 220; // Ancho (657px - 437px)
                const originalHeightRect = 54; // Alto (643px - 589px)
    
                spot.style.left = `${originalLeft * scale}px`;
                spot.style.top = `${originalTop * scale}px`;
                spot.style.width = `${originalWidthRect * scale}px`;
                spot.style.height = `${originalHeightRect * scale}px`;
        });
        cuadradosVertical.forEach(spot => {
            const originalLeft = parseFloat(spot.style.left);
            const originalTop = parseFloat(spot.style.top);
            const originalWidthRect = 45; // Ancho (675px - 630px)
            const originalHeightRect = 90; // Alto (546px - 456px)

            spot.style.left = `${originalLeft * scale}px`;
            spot.style.top = `${originalTop * scale}px`;
            spot.style.width = `${originalWidthRect * scale}px`;
            spot.style.height = `${originalHeightRect * scale}px`;
    });
    }

    window.addEventListener("resize", funcionPuntos);
    funcionPuntos();
});


document.querySelector(".imagen-maquina").addEventListener("click", function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left; // Coordenada X relativa
    const y = e.clientY - rect.top;  // Coordenada Y relativa
    console.log(`Coordenadas: ${Math.round(x)}, ${Math.round(y)}`);
});