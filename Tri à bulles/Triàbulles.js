let name = [2, 6, 0, 3, 20];
for (let i = 0; i <name.length ; i++) {
    for (let e = 0; e<name.length ; e++){
        if (name[e]>name[e+1]){
            let temp = name[e];
            name[e] = name[e+1];
            name[e+1] = temp;
           
        }
    }
}
console.log(name);