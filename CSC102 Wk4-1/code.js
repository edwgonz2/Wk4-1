function countdownTimer() {
    var timer = 50;

    //starts at 50 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 0000);

    //Change to 45 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 5000);

    //40 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 10000);

    //35 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 15000);

    //30 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 20000);

    //25 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 25000);

    //20 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 30000);

    //15 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 35000);

    //10 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 40000);

    //5 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5;
    }, 45000);

    //0 sec
    setTimeout(function () {
        document.getElementById("ctdnTimer").innerHTML = timer;
        timer = timer - 5; alert("Blast off!")
    }, 50000);

}