function digital_root(n) {
    let sN = n.toString()
    let numbers = sN.split("")
    let tot = 0
    let arr = []
    for (let i = 0; i < numbers.length; i++) {
        tot += Number(numbers[i])
    }
    if (tot < 10) {
        return tot
    } else {
        arr.unshift(tot)
    }
    while (arr[0] > 9) {
        let newTot = 0
        let newN = arr[0].toString().split("")
        newN.forEach(n1 => {
            newTot += Number(n1)
        })
        if (newTot < 10) {
            return newTot
        }
        else {
            arr.unshift(newTot)
        }
    }
}
console.log(digital_root(942));