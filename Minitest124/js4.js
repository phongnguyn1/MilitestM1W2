class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    tinhChuVi() {
        return 2 * (this.width + this.height);
    }

    tinhDienTich() {
        return this.width * this.height;
    }

    veHinh(canvasId) {
        let canvas = document.getElementById(canvasId);
        if (canvas.getContext) {
            let ctx = canvas.getContext('2d');

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#3498db';
            ctx.fillRect(10, 10, this.width, this.height);
        }
        }

}

let rectangle = new Rectangle(100, 50);

