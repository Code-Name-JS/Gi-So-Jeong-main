console.log(createParagraph("첫번째 문단, 와우!", "red"))
console.log(createParagraph("두번째 문단도 여기에 있어!", "green"))
console.log(createParagraph("세번째도 잊지 말라구", "blue"))

function createParagraph( content, color ){
    const p = document.createElement("p")
    p.style.color = color
    p.textContent = content
    document.querySelector("#container").append(p)

    return `방금 만든 태그의 콘텐츠 : ${content}, 색상: ${color}`
}

/*
function sample(){
    console.log("반환 기능 테스트")

    return "짜자잔"
}

console.log(sample())
*/