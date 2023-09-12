window.onload = function () {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var x1 = 0;
  var y1 = 100;
  var x2 = 300;
  var y2 = 200;
  var x3 = 1200;
  var y3 = 400;
  var x4 = 1400;
  var y4 = 450;
  var x5 = 1300;
  var y5 = 100;
  var x6 = 700;
  var y6 = 400;
  var x7 = 600;
  var y7 = 50;
  var x8 = 150;
  var y8 = 450;
  var t = Date.now();
  let speedB = 100;
  let speedS = 50;
  let speedN = 90;

  //draw bubbles in the background
  function draw() {
    var timePassed = (Date.now() - t) / 1000;
    t = Date.now();
    var fps = Math.round(1 / timePassed);

    context.clearRect(0, 0, 1490, 740);

    var grd1 = context.createRadialGradient(
      x1 + 27,
      y1,
      2.5,
      x1 + 25,
      y1 + 20,
      30
    );
    grd1.addColorStop(0, 'white');
    grd1.addColorStop(1, '#9acdf5');

    context.beginPath();
    context.arc(x1, y1, 50, 0, 2 * Math.PI);
    context.fillStyle = grd1;
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = '#fff';
    context.stroke();

    y1 -= speedS * timePassed;
    if (y1 < 0) {
      y1 = 740;
    }

    var grd2 = context.createRadialGradient(
      x2 + 54,
      y2,
      5,
      x2 + 50,
      y2 + 40,
      60
    );
    grd2.addColorStop(0, 'white');
    grd2.addColorStop(1, '#9acdf5');

    context.beginPath();
    context.arc(x2, y2, 100, 0, 2 * Math.PI);
    context.fillStyle = grd2;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#fff';
    context.stroke();

    y2 -= speedB * timePassed;
    if (y2 < 0) {
      y2 = 740;
    }

    var grd3 = context.createRadialGradient(
      x3 + 54,
      y3,
      5,
      x3 + 50,
      y3 + 40,
      60
    );
    grd3.addColorStop(0, 'white');
    grd3.addColorStop(1, '#9acdf5');

    context.beginPath();
    context.arc(x3, y3, 100, 0, 2 * Math.PI);
    context.fillStyle = grd3;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#fff';
    context.stroke();

    y3 -= speedB * timePassed;
    if (y3 < 0) {
      y3 = 740;
    }

    var grd4 = context.createRadialGradient(x4, y4, 2.5, x4, y4 + 10, 30);
    grd4.addColorStop(0, 'white');
    grd4.addColorStop(1, '#9acdf5');

    context.beginPath();
    context.arc(x4, y4, 50, 0, 2 * Math.PI);
    context.fillStyle = grd1;
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = '#fff';
    context.stroke();

    y4 -= speedB * timePassed;
    if (y4 < 0) {
      y4 = 740;
    }

    var grd5 = context.createRadialGradient(
      x5 + 54,
      y5,
      5,
      x5 + 50,
      y5 + 40,
      60
    );
    grd5.addColorStop(0, 'white');
    grd5.addColorStop(1, '#9acdf5');

    context.beginPath();
    context.arc(x5, y5, 100, 0, 2 * Math.PI);
    context.fillStyle = grd5;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#fff';
    context.stroke();

    y5 -= speedB * timePassed;
    if (y5 < 0) {
      y5 = 740;
    }

    var grd1 = context.createRadialGradient(
      x6 + 27,
      y6,
      2.5,
      x6 + 25,
      y6 + 20,
      30
    );
    grd1.addColorStop(0, 'white');
    grd1.addColorStop(1, '#9acdf5');

    context.beginPath();
    context.arc(x6, y6, 50, 0, 2 * Math.PI);
    context.fillStyle = grd1;
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = '#fff';
    context.stroke();

    y6 -= speedN * timePassed;
    if (y6 < 0) {
      y6 = 740;
    }

    var grd7 = context.createRadialGradient(
      x7 + 27,
      y7,
      2.5,
      x7 + 25,
      y7 + 20,
      30
    );
    grd7.addColorStop(0, 'white');
    grd7.addColorStop(1, '#9acdf5');

    context.beginPath();
    context.arc(x7, y7, 50, 0, 2 * Math.PI);
    context.fillStyle = grd7;
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = '#fff';
    context.stroke();

    y7 -= speedN * timePassed;
    if (y7 < 0) {
      y7 = 740;
    }

    var grd8 = context.createRadialGradient(
      x8 + 27,
      y8,
      2.5,
      x8 + 25,
      y8 + 20,
      30
    );
    grd8.addColorStop(0, 'white');
    grd8.addColorStop(1, '#9acdf5');

    context.beginPath();
    context.arc(x8, y8, 40, 0, 2 * Math.PI);
    context.fillStyle = grd8;
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = '#fff';
    context.stroke();

    y8 -= speedN * timePassed;
    if (y8 < 0) {
      y8 = 740;
    }
    window.requestAnimationFrame(draw);
  }
  draw();
};

//reloads the page
reset.addEventListener('click', function (e) {
  e.preventDefault();
  location.reload();
  gameOver.style.visibility = 'hidden';
});
