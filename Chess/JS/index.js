let id = 0;

const icon = ['./Image/rook.png', './Image/horse.png', './Image/camel.png', './Image/queen.png', './Image/king.png','./Image/camel.png', './Image/horse.png', './Image/rook.png'];
const whiteicon = ['./Image/White_rook.png', './Image/White_horse.png', './Image/White_camel.png', './Image/White_queen.png', './Image/White_king.png','./Image/White_camel.png', './Image/White_horse.png', './Image/White_rook.png'];

for (let i = 0; i < 8; i++) {
    document.getElementById('table').innerHTML += `<tr class="" id="row${i}">`;
    // ======================= chess bord 1 row =========================
    if (i == 0) {
        for (let index = 0; index < icon.length; index++) {
            if (index % 2 == 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#d18b46] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="addData(this)" id="${id}"><img src="${icon[index]}"/></td>`;
                id++;
            }
            else if(index % 2 != 0){
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#a3524e] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="addData(this)" id="${id}"><img src="${icon[index]}"/></td>`;
                id++;
            }
        }
    }
    if (i == 1) {
        for (let index = 0; index < 8; index++) {
            if (index % 2 == 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#a3524e] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="addData(this)" id="${id}"><img src="./Image/soldier.png"/></td>`;
                id++;
            }
            else if(index % 2 != 0){
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#d18b46] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="addData(this)" id="${id}"><img src="./Image/soldier.png"/></td>`;
                id++;
            }
        }
    }
    // ======================= chess bord 7 row =========================
    if (i == 6) {
        for (let index = 0; index < icon.length; index++) {
            if (index % 2 == 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#d18b46] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="addData(this)" id="${id}"><img src="./Image/White_soldier.png"/></td>`;
                id++;
            }
            else if(index % 2 != 0){
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#a3524e] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="addData(this)" id="${id}"><img src="./Image/White_soldier.png"/></td>`;
                id++;
            }
        }
    }
    if (i == 7) {
        for (let index = 0; index < 8; index++) {
            if (index % 2 == 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#a3524e] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="addData(this)" id="${id}"><img src="${whiteicon[index]}"/></td>`;
                id++;
            }
            else if(index % 2 != 0){
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#d18b46] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="addData(this)" id="${id}"><img src="${whiteicon[index]}"/></td>`;
                id++;
            }
        }
    }

    // ======================= chess bord =========================
    for (let j = 0; j < 8; j++) {
        if (i % 2 == 0 && i >= 2 && i < 6) {
            if (j % 2 == 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#d18b46] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[60px] font-bold p-2" data-id="${j}" id="${id}"></td>`;
                id++;
            }
            else if (j % 2 != 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#a3524e] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[60px] font-bold p-2" data-id="${j}" id="${id}"></td>`;
                id++;
            }
        }
        else if (i % 2 != 0 && i >= 2 && i < 6) {
            if (j % 2 == 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#a3524e] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[60px] font-bold p-2" data-id="${j}" id="${id}"></td>`;
                id++;
            }
            else if (j % 2 != 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#d18b46] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[60px] font-bold p-2" data-id="${j}" id="${id}"></td>`;
                id++;
            }
        }
    }
    document.getElementById('table').innerHTML += `</tr>`;
}

    // ======================== select the player ===================
        let player1 = null;
        let player2 = null;
        let turn = null;

        function getPlayer(e){
            if (player1 == null && player2 == null) {
                player1 = e.innerText;
                if (player1 == "White") {
                    player2 = "Black";
                    turn = player1;
                    document.getElementById('selectPlayerModel').style.visibility = "hidden";
                    document.getElementById('player1').innerHTML = player1;
                    document.getElementById('player2').innerHTML = player2;
                }
                else if (player1 == "Black") {
                    player2 = "White";
                    turn = player1;
                    document.getElementById('selectPlayerModel').style.visibility = "hidden";
                    document.getElementById('player1').innerHTML = player1;
                    document.getElementById('player2').innerHTML = player2;
                }
            }
            console.log("Player 1 :" , player1);
            console.log("Player 2 :" , player2);
        }

    // ======================== select the player ===================
        function addData(e){
                if (turn != null && turn == player1) {
                    alert(turn + " " + e.id);
                    turn = player2;
                }
                else if (turn == player2) {
                    alert(turn + " " + e.id);
                    turn = player1;
                }
            }