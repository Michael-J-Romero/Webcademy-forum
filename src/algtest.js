const minimum = 5    
const toleranceD = 3
const toleranceU = 2
const accuracy = 15 
      
let actualValues 
const t = []
for (let i = 0; i < 100; i++) {
    actualValues = startingArray().map(() => Math.round(Math.random() * 10))
    const c = calculate()
    t.push(c)               
}
const averageTime=(t.reduce((p, c) => p + c) / 100) / 16

console.log(averageTime);       
function calculate() {
    let a = [...actualValues]
    const { order, estimate } = estimatedOrder(a)
    const ordered = order.map((e, i) => a[e])
    a = ordered
    let count = 0
    const results = check(a)
    const orderedResults = reorder(results, order)
    console.log({results,a, orderedResults, actualValues, estimate })
    const pass = []
    const fail = []
    orderedResults.forEach((e, i) => {
        if (e == 1) {
            pass.push(actualValues[i])
        }
        else fail.push(actualValues[i])
    })
    console.log({ count, pass, fail })
    return count

    function add(result, a) {
        if (result == 0) return check(a)
        if (Math.abs(result) == 1) return a.map(() => result)
    }
    function check(a) {
        const newArray = []
        count++
        let total = a.reduce((p, c) => p + c)
        if (a.length < 2) return [a[0] > minimum ? 1 : -1]
        const p = Math.ceil(a.length / 2)
        const a1 = a.slice(0, p)
        const a2 = a.slice(p)
        const r = analyze(a1)
        const r2 = compare(total - r.total, r.range)
        newArray.push(...add(r.result, a1))
        newArray.push(...add(r2, a2))
        return newArray
    }
}
function estimatedOrder(a) {
    const estimateData = a.map((e) => {
        let z = accuracy / 2
        // if(e-z>10)z+=(e-z)-10        
        // else if(e-z<0)z+=e-z 
        return e + Math.round(Math.random() * accuracy - z)
    })
    const estimate = [...estimateData]
    const a2 = a.map((e, i) => i)
    const order = []
    const l = a.length
    for (let i = 0; i < l; i++) {
        const m = Math.min(...estimate)
        const index = estimate.indexOf(m)
        let ii = a2.splice(index, 1)[0]
        order.push(ii)
        estimate.splice(index, 1)
    }
    return ({ order, estimate: estimateData })
}
function reorder(a, order) {
    const newArray = []
    for (let i = 0; i < order.length; i++) {
        const ii = order[i]
        newArray[ii] = a[i]
    }
    return newArray
}
function analyze(a) {
    const total = getTotal(a)
    const range = getRange(a)
    const result = compare(total, range)
    return ({ a, total, range, result })
}
function getTotal(a) {
    let sum = 0
    a.forEach((e) => {
        sum += e
    })
    return sum
}
function getRange(a) {
    const l = a.length
    let min = (l - 1) * toleranceU + minimum
    let max = (l - 1) * (10 - toleranceD) + minimum
    return { max, min }
} 
function compare(v, range) {
    const { max, min } = range
    return v < min ? -1 : v > max ? 1 : 0
}
function startingArray() {
    return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
}
/* 
I was curious to see how that idea would work so I spent a few hours last night writing an algorithm that would could do what I was describing. But it turns out it doesn't work quite as good as I thought in this case unless you lower the accuracy of the results a bit or give it some initial approximations.. 

To get mostly accurate results, the algorithm can reduce the amount of tests by just 25% on average, but if you provide a starting point by approximating a rating for each supplement in order from highest to lowest, it gets faster. If the aproximation has around 30% accuracy, the algorithm can reduce the number of tests by 40% on average. 

So not too great, unless you have an idea of what supplements are most likely more effective than others to begin with.. But I thought it would be interesting just to test.

If one month is even enough to see results from each set of supplements, it would still take almost a year at best to test them all, most likely more! 



The real problem is the time it takes to accurately gauge the results of each trial..
 */