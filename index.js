let scoreEl = document.getElementById("score")

let count = 0

function add1() {
    count += 1
    scoreEl.textContent = count
}

function add2() {
    count += 2
    scoreEl.textContent = count
}

function add3() {
    count += 3
    scoreEl.textContent = count
}


let guestScoreEl = document.getElementById("guest-score")

let guestCount = 0

function guestAdd1() {
    guestCount += 1
    guestScoreEl.textContent = guestCount
}

function guestAdd2() {
    guestCount += 2
    guestScoreEl.textContent = guestCount
}

function guestAdd3() {
    guestCount += 3
    guestScoreEl.textContent = guestCount
}

// let resetScores = 0

function reset() {
    count = 0
    scoreEl.textContent = count
    guestCount = 0
    guestScoreEl.textContent = guestCount
}