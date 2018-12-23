function setup(){
    createCanvas(640, 480);
    colorMode(HSB);
}

function draw(){
    background(color(0, 0, 100));
    const x = width/2;
    const y = height/2;
    const radius = 200;
    stroke(0, 0, 0);
    noFill();
    ellipse(x, y, 2*radius, 2*radius);
    const N = 10;
    for(var index=3; index < N; index++) {
        var color_value = map(index, 3, N, 0, 360);
        stroke(color_value, 100, 100);
        regular_polygon(index, x, y, radius);
        fill(color_value, 100 , 100);
        travel(millis(), index, x, y, radius);
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

function travel(t, n, x, y, r) {
    const nt = t/1000;
    const fnt = floor(nt);
    const delta = nt - fnt;
    let u = regular_vertex(fnt, n, x, y, r);
    let v = regular_vertex(fnt + 1, n, x, y, r);
    let cx = (1-delta)*u[0] + delta*v[0];
    let cy = (1-delta)*u[1] + delta*v[1];
    const cr = 10;
    ellipse(cx, cy, cr, cr);
}
