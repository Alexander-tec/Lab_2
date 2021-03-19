let sample = [
    {value: "3", in: "spares"},
    {value: "7", in: "spares"},
    {value: "10", in: "spares"},
    {value: "K", in: "spares"},
    {value: "7", in: "spares"},
    ];

function findPair(a){
    for (let i = 0; i < a.length; i++) {
        for(let v = i + 1; v < a.length; v++){
            if (a[i].value == a[v].value) return a[i];
        }
    }
}

console.log (findPair(sample))