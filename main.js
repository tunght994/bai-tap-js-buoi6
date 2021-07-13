document.querySelector('.btn').addEventListener('click' , countSum)
document.querySelector('.btnGT').addEventListener('click' , count)
document.querySelector('.btnDiv').addEventListener('click' , Newdiv)


// BAI TAP 1 
var n = 0
var sum = 0
while (sum < 10000) {
    n++
    sum = sum + n
}
var inputNumber = document.getElementById("inputNumber");
inputNumber.value = `Số nguyên dương nhỏ nhất là: ${n}`

// BAI TAP 2
function countSum() {
    var x = +document.getElementById("numberX").value;
    var n = +document.getElementById("numberN").value;
    var power = 1;
    var sumPower = 0;
    for (i = 1; i <= n; i++ ) {
        power = power * x;
        sumPower = sumPower + power;
    }

    var sum = document.getElementById("result");
    sum.value = sumPower;
}

// BAI TAP 3

function count() {
    var numberP = document.getElementById("numberGT").value;
    var number = 1;
     for ( i = 1; i <= numberP; i++ ) {
        number = number * i;
     }

    var result = document.getElementById("resultNumber");
    result.value = number;
}


// BAI TAP 4

function Newdiv () {

    for (var i = 1; i <= 10; i++ ) {
        var pDiv = document.createElement("div");

        if ( i % 2 === 0) {
            pDiv.innerText = "Div chẵn:" + i;
            pDiv.className = "red";
        } else {
            pDiv.innerText = "Div lẻ:" + i;
            pDiv.className = "blue";
        }
        createDiv.appendChild(pDiv);
    }
}