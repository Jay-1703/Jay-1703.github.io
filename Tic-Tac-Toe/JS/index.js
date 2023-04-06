let id = 0;

for (let i = 0; i < 3; i++) {
    document.getElementById('table').innerHTML += `<tr class="border-solid border-4" id="row${i}">`;
    for (let j = 0; j < 3; j++) {
        document.getElementById(`row${i}`).innerHTML += `<td class="border-solid border-white bg-[#97affd] border-4 w-28 h-28 text-[50px] font-bold p-2" onclick="addData(this)" data-id="${j}" id="${id}"></td>`;
        id++;
    }
    document.getElementById('table').innerHTML += `</tr>`;
}

let player1 = null;
let player2 = null;
let turn = 0;

const patten = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let player1arr = [];
let player2arr = [];

function getdata(e) {
    if (player1 == null ) {
        player1 = e.value;
        e.style.backgroundColor = "#f5d600"
    } else if (player2 == null && player1 != e.value) {
        player2 = e.value;
        e.style.backgroundColor = "#ff5768"
    }
}

function isSubset(array1, array2) {
    let incCount = 0;

    for (let ele of array2) {
        if (array1.indexOf(ele) !== -1) {
            incCount++;
        }
    }
    return incCount >= 3 ? true : false;
}
function addData(e) {
    if (player1 != null && player2 != null) {
        if (turn % 2 == 0 && turn != 9) {
            e.innerHTML = player1;
            e.style.backgroundColor = "#f5d600"
            player1arr.push(parseInt(e.id));
            winner(e);
            turn++;
        } else if (turn % 2 != 0 && turn != 9) {
            e.innerHTML = player2;
            e.style.backgroundColor = "#ff5768"
            player2arr.push(parseInt(e.id));
            winner(e);
            turn++;
        }
    } 
    else {
        document.getElementById("alert").innerHTML =`<div class="flex justify-center">
        <div class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">Error!</span> Select The Item.
            </div>
          </div>
    </div>`;
        document.getElementById('alert').style.display ="block";
        setTimeout(() => {
        document.getElementById('alert').style.display ="none";
        }, 3000); 
    }
}
function winner(e){
    for (let index = 0; index < patten.length; index++) {
        if (turn % 2 == 0) {
            if (patten[index][0] == e.id || patten[index][1] == e.id || patten[index][2] == e.id) {
                if (isSubset(player1arr, patten[index]) == true) {
                    document.getElementById('box').style.visibility = "visible";
                }
            }
        }
        else if (turn % 2 != 0) {
            if (patten[index][0] == e.id || patten[index][1] == e.id || patten[index][2] == e.id) {
                if (isSubset(player2arr, patten[index]) == true) {
                    document.getElementById('box1').style.visibility = "visible";
                }

            }
        }
    }
}
function matchdrow(params) {
        document.getElementById('alert').innerHTML = `<div class="flex justify-center" id="player1">
        <div class="flex p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">Winnner!</span> Match is Drow
            </div>
        </div>
    </div>`;
        document.getElementById('alert').style.display ="block";
            setTimeout(() => {
                document.getElementById('alert').style.display ="none";
            }, 2000); 
}
function nextGame(){
    document.getElementById('box').style.visibility = "hidden";
    window.location.reload();   
}