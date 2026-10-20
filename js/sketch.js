
var lines = [];
var penColor;
var bgColor;
var penWidth;
var clearButton;
var drawingCanvas;
var options;

function setup() {
    // Create the drawing canvas at the end of the webpage
    drawingCanvas = createCanvas(400, 450);
    drawingCanvas.parent('drawing-app');

    // Create the controls beside the canvas
    options = createDiv('');
    options.parent('drawing-app');

    var optionsTitles = createDiv().parent(options);

    createP('Pen Color').parent(optionsTitles);
    createP('Background Color').parent(optionsTitles);
    createP('Pen Width').parent(optionsTitles);

    var optionsValues = createDiv()
        .parent(options)
        .style('width', '120px');

    penColor = createColorPicker('#ffffff')
        .parent(optionsValues);

    bgColor = createColorPicker('#1e1e1e')
        .parent(optionsValues)
        .style('margin-top', '10px');

    penWidth = createSelect()
        .parent(optionsValues)
        .style('margin-top', '10px');

    penWidth.option('1');
    penWidth.option('2');
    penWidth.option('4');
    penWidth.option('8');
    penWidth.selected('2');

    clearButton = createButton('Clear')
        .parent(options);

    clearButton.mousePressed(function () {
        lines = [];
    });
}

function draw() {
    // Background of the drawing canvas
    background(bgColor.value());

    // Draw only when the mouse is over the canvas
    if (
        mouseIsPressed &&
        mouseX >= 0 && mouseX <= width &&
        mouseY >= 0 && mouseY <= height
    ) {
        lines.push(
            new MyLine(
                penColor.value(),
                Number(penWidth.value())
            )
        );
    }

    // Redraw saved line segments
    for (var line of lines) {
        line.show();
    }
}

