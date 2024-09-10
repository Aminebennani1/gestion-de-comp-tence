let num = [5, 0, 6, 11];
let TE;
for (let i = 0; i < num.length; i++) {
    for (let e = i + 1; e < num.length; e++) {
        // cette boucle pour comparer les nombres un par un 
        if (num[i] < num[e]) {
            TE = num[i]
            num[i] = num[e]
            num[e] = TE
        }
    }
}

console.log(num);