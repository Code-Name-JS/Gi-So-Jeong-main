const h1 = document.querySelector('h1')
const p = document.querySelector('p')

const isThere = confirm("제목 표시를 할까요?")

if(isThere){
    h1.textContent = "당신이 내야 할 버스요금은?"
}

const age = parseInt(prompt("나이는 어떻게 되세요?"))

if(age >= 20){
    p.textContent = "1250원입니다!"
}else if(age >= 8){
    p.textContent = "760원입니다!"
}else{
    p.textContent = "무료입니다!"
}