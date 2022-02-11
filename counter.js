//add, pause, restart decrement counter:
main2(-1);

let idNo2 = -1;

document.querySelector(".add-btn2").addEventListener('click',addCounter2);

function main2(idNo2) {
    let counterObj2 = document.getElementById(String(idNo2));
    counterObj2.addEventListener('click', pauseFunc2);
    let noOfClicks = 0;
    let pause2 = false;
    let count2 = 0;
    let counterText2 = 1;

    async function decrement() {
        if(pause2) {
            return counterText2;
        }
        else {
                if(count2 <= 20) {
                    count2 +=1;
                    counterText2 -= 1;
                    counterObj2.innerText = counterText2;
                    await sleep(1000);
                    decrement();
                }
        }
    }
    decrement();

    function pauseFunc2() {
        noOfClicks += 1;
        if(noOfClicks%2 == 1) {
            pause2 = true;
        }
        else if(noOfClicks%2 == 0) {
            pause2 = false;
            decrement();
        }
    }
}

function addCounter2() {
    idNo2 -= 1;
    let div2 = document.createElement('div');
    div2.className = 'counter2';
    div2.innerHTML = ` 
                    <input type="button" value="Remove Counter" onclick="removeCounter(this)" /> 
                    <h2 id="${idNo2}" class="counter-display2">0</h2>
                    `;
    document.getElementById("new-counter2").appendChild(div2);
    main2(idNo2);
}

function removeCounter(input) {
    document.getElementById('new-counter2').removeChild(input.parentNode);
}