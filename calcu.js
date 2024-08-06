let bill = document.getElementById("bill")
let tip = document.getElementById("tip")

let total = document.getElementById("total")
// let result = bill.value
const c = () => {
    // total.innerHTML=bill+tip
    // total.innerHTML=(bill.value + tip.value)
    // total.innerText= bill.value + tip.value

    const billEnter = bill.value
    const tipEnter = tip.value

    const result = billEnter * (1 + tipEnter / 100)
    total.innerText = result.toFixed(2)

}