function chooseBestSum(km, num, ls) {
    if ((num < 1) || (km < 0) || (ls.length === 0)) return null;

    let sumArr = [];
    for (let i = 0; i <= ls.length; i++) {
        for (let j = ls.length; i + 1 < j; j--) {

            const a = ls[i];
            const b = ls[i + 1];
            let c = ls[j];

            if (a + b + c <= km) {
                sumArr.push(a + b + c);
            }
        }
    }
console.log(sumArr)
    return sumArr.length === 0 ? null : Math.max(...sumArr);
}
var ts=[50, 55, 56, 57, 58]
console.log(chooseBestSum(163, 3, ts))