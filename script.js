let inputDate = document.getElementById("date");
inputDate.max = new Date().toISOString().split("T")[0]
console.log(inputDate.max)

let calculateBtn = document.querySelector(".input-box button")
calculateBtn.addEventListener("click", callAge)


function callAge(){
    let birthDate = new Date(inputDate.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate()
    let m2 = today.getMonth()
    let y2 = today.getFullYear()

    let d3, m3, y3;

    y3 = y2 - y1
    
    if(m2 >= m1){
        m3 = m2 - m1
    }else{
        y3--
        m3 = 12 + m2 - m1
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--
        d3 = getDaysInMonth(y2, m2)
    }
    if(m3 < 0){
        m3 = 11
        y3--
    }
    document.querySelector(".age-result").textContent = `you are ${y3} years, ${m3} months and ${d3} days old`
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate()
}
