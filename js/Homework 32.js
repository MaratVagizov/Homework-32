let count = document.querySelector('.number')
let btn_1 = document.querySelector('.btn-1')
let btn_2 = document.querySelector('.btn-2')
let btn_3 = document.querySelector('.btn-3')
let btn_4 = document.querySelector('.btn-4')


btn_1.onclick = () => {
    if (count.innerText > 0) {
        count.innerText--
    }
}

btn_2.onclick = () => {
    count.innerText = 0
}

btn_3.onclick = () => {
    count.textContent++
}

btn_4.onclick = () => {

    let rnd = Math.round(Math.random() * 100)
    count.innerHTML = rnd
}