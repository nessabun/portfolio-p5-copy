class MyLine {
    constructor(penColor, penWidth){
        this.px = pmouseX
        this.py = pmouseY
        this.x = mouseX
        this.y = mouseY

        this.color = penColor
        this.width = penWidth
    }
    show(){
        stroke(this.color)
        strokeWeight(this.width)
        line(this.px, this.py, this.x, this.y)

    }
}