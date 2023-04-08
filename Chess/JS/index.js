let id = 0;

const icon = ['./Image/rook.png', './Image/horse.png', './Image/camel.png', './Image/queen.png', './Image/king.png','./Image/camel.png', './Image/horse.png', './Image/rook.png'];
const whiteicon = ['./Image/White_rook.png', './Image/White_horse.png', './Image/White_camel.png', './Image/White_queen.png', './Image/White_king.png','./Image/White_camel.png', './Image/White_horse.png', './Image/White_rook.png'];

for (let i = 0; i < 8; i++) {
    document.getElementById('table').innerHTML += `<tr class="" id="row${i}">`;
    // ======================= chess bord 1 row =========================
    if (i == 0) {
        for (let index = 0; index < icon.length; index++) {
            if (index % 2 == 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#d18b46] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="addData(this) id="uid${id}"><img src="${icon[index]}"/></td>`;
                id++;
            }
            else if(index % 2 != 0){
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#a3524e] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="addData(this) id="uid${id}"><img src="${icon[index]}"/></td>`;
                id++;
            }
        }
    }
    if (i == 1) {
        for (let index = 0; index < 8; index++) {
            if (index % 2 == 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#a3524e] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="addData(this) id="uid${id}"><img src="./Image/soldier.png"/></td>`;
                id++;
            }
            else if(index % 2 != 0){
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#d18b46] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="addData(this) id="uid${id}"><img src="./Image/soldier.png"/></td>`;
                id++;
            }
        }
    }
    // ======================= chess bord 7 row =========================
    if (i == 6) {
        for (let index = 0; index < icon.length; index++) {
            if (index % 2 == 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#d18b46] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="addData(this) id="uid${id}"><img src="./Image/White_soldier.png"/></td>`;
                id++;
            }
            else if(index % 2 != 0){
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#a3524e] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="addData(this) id="uid${id}"><img src="./Image/White_soldier.png"/></td>`;
                id++;
            }
        }
    }
    if (i == 7) {
        for (let index = 0; index < 8; index++) {
            if (index % 2 == 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#a3524e] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="addData(this) id="uid${id}"><img src="${whiteicon[index]}"/></td>`;
                id++;
            }
            else if(index % 2 != 0){
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#d18b46] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[30px] font-bold p-2" onclick="addData(this) id="uid${id}"><img src="${whiteicon[index]}"/></td>`;
                id++;
            }
        }
    }

    // ======================= chess bord =========================
    for (let j = 0; j < 8; j++) {
        if (i % 2 == 0 && i >= 2 && i < 6) {
            if (j % 2 == 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#d18b46] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[60px] font-bold p-2" onclick="addData(this)" data-id="${j}" id="${id}"></td>`;
                id++;
            }
            else if (j % 2 != 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#a3524e] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[60px] font-bold p-2" onclick="addData(this)" data-id="${j}" id="${id}"></td>`;
                id++;
            }
        }
        else if (i % 2 != 0 && i >= 2 && i < 6) {
            if (j % 2 == 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#a3524e] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[60px] font-bold p-2" onclick="addData(this)" data-id="${j}" id="${id}"></td>`;
                id++;
            }
            else if (j % 2 != 0) {
                document.getElementById(`row${i}`).innerHTML += `<td class="bg-[#d18b46] cursor-pointer	w-14 h-14 sm:w-20 sm:h-20 text-[60px] font-bold p-2" onclick="addData(this)" data-id="${j}" id="${id}"></td>`;
                id++;
            }
        }
    }
    document.getElementById('table').innerHTML += `</tr>`;
}

function addData(e){
    alert(e.id);
}
// document.getElementById('table').innerHTML += `<td class="odd" id="cell${i}${index}">${icon[index]}</td>`;
