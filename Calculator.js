
const add = (a, b) => {
    console.log('Adding', a, 'and', b);
    return a + b;
}

const subtract = (a, b) => {
    console.log('Subtracting', b, 'from', a);
    return a - b;
}

module.exports = {
    add,
    subtract
}