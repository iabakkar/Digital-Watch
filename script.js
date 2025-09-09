function clock() {
    let hours = document.getElementById('hours')
    let dots = document.getElementById('dots')
    let minutes = document.getElementById('minutes')
    let periods = document.getElementById('periods')
    let second = document.getElementById('second')


    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    // let ampm = h >= 12 ? "PM" : "AM"
    let ampm;
    if (h >= 12) {
        ampm = "PM"
    } else {
        ampm = "AM"
    }

    if (h > 12) {
        h = h - 12
    }

    if (h < 10) {
        h = "0" + h
    } else {
        h
    }

    if (m < 10) {
        m = "0" + m
    } else {
        m
    }

    if (s < 10) {
        s = "0" + s
    } else {
        s
    }

    hours.innerHTML = h;
    minutes.innerHTML = m
    second.innerHTML = s
    periods.innerHTML = ampm

};

setInterval(() => {
    clock()
}, 1000);