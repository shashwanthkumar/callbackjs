
function op(a, b, call) {
    console.log(call(a, b));
}

function add(a, b) {
    return (a + b)
}
op(3, 4, add)

function sum(a, b) {
    return (a - b)
}
op(8, 4, sum)

function mux(a, b) {
    return (a * b)
}
op(3, 4, mux)

function div(a, b) {
    return (a % b)
}
op(12, 4, div)

function divv(a, b) {
    return (a / b)
}
op(12, 4, divv)

function pow(a, b) {
    return (a ** b)
}
op(3, 4, pow)
