
new p5((p) => {
    let xPos = 0;
    let yPos = 0;
    let easing = 0.05;

    p.setup = function () {
        let canvas = p.createCanvas(
            p.windowWidth,
            p.windowHeight
        );

        canvas.parent('rainbow-background');
        canvas.style('position', 'fixed');
        canvas.style('top', '0');
        canvas.style('left', '0');
        canvas.style('z-index', '0');
        canvas.style('pointer-events', 'none');
    };

    p.draw = function () {
        p.clear();

        xPos += (p.mouseX - xPos) * easing;
        yPos += (p.mouseY - yPos) * easing;

        p.noStroke();

        p.fill(
            p.random(200, 255),
            p.random(200, 255),
            p.random(200, 255)
        );

        p.ellipse(xPos, yPos, 30, 30);
    };

    p.windowResized = function () {
        p.resizeCanvas(
            p.windowWidth,
            p.windowHeight
        );
    };
});
