function setup(){
    createCanvas(640, 480);
    colorMode(HSB);
}

function draw(){
    const N = 10;
    for(var index=3; index < N; index++) {
        var color_value = map(index, 3, N, 0, 360);
        stroke(color_value, 100, 100);
        regular_polygon(index, 320, 240, 200);
    }
}

function regular_polygon(n, x, y, r) {
    for(var index=0; index < n; index++) {
        let u = regular_vertex(index, n, x, y, r);
        let v = regular_vertex(index + 1, n, x, y, r);
        line(u[0], u[1], v[0], v[1]);
    }
}

function regular_vertex(index, n, x, y, r) {
    const angle = TWO_PI/n;
    return [r*cos(index*angle) + x, r*sin(index*angle) + y];
}
