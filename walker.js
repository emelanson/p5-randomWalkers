function Walker(color) {
    this.x = width / 2;
    this.y = height / 2;

    this.r = color;
    this.g = color;
    this.b = color;

    this.update = () => {
        this.render();
        this.step();
        this.chooseColor();
    }

    this.render = () => {
        stroke(this.r, this.g, this.b);
        point(this.x, this.y);
    }

    this.step = () => {
        var choice = Math.floor(Math.random() * 4);

        if (choice == 1) {
            this.x = this.x + 1;
        }
        else if (choice == 2) {
            this.x = this.x - 1;
        }
        else if (choice == 3) {
            this.y = this.y + 1;
        }
        else if (choice == 0) {
            this.y = this.y - 1;
        }
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);

    }

    this.chooseColor = () => {
        var choice = Math.floor(Math.random() * 3);
        var upOrDown = Math.floor(Math.random() * 3);

        if (upOrDown == 0) {
            if (choice == 1) {
                this.b = this.b - 1
            }
            else if (choice == 2) {
                this.g = this.g - 1
            }
            else if (choice == 0) {
                this.r = this.r - 1
            }
        }
        else if (upOrDown == 1) {
            if (choice == 1) {
                this.b = this.b + 1
            }
            else if (choice == 2) {
                this.g = this.g + 1
            }
            else if (choice == 0) {
                this.r = this.r + 1
            }
        }
        else if (upOrDown == 2) {
            return
        }
        this.r = constrain(this.r, 0, 255);
        this.g = constrain(this.g, 0, 255);
        this.b = constrain(this.b, 0, 255);
    }
}
