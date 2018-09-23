function factorialize(num) {
    let fact = 1;
    for (let i = num; i > 0; i--) {
        fact *= i;
    }
    return fact;
}
factorialize(5);