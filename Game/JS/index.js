let arr = [[1,2,3],[4,5,6],[7,8,9]];

    for(let i=0; i<arr.length; i++){
        document.getElementById('table').innerHTML +=`<tr class="border-solid border-4" id="row${i}">`;
        for(let j=0 ; j<arr.length; j++){
            document.getElementById(`row${i}`).innerHTML +=`<td class="border-solid border-white bg-[#97affd] border-4 w-28 h-28 text-[50px]" onclick="addData(this)" id="data"></td>`;
        }
        document.getElementById('table').innerHTML +=`</tr>`;
    }
    
    let player1 = null;
    let player2 = null;
    console.log(player1);

    function getdata(e) {
        if (player1 == null) {
            player1 = e.value;
            console.log(player1);
        } else if (player2 == null) {
            player2 = e.value;
            console.log(player2);
        }    
    }   
    let turn = 0;

    function addData(e){
        if (player1 != null && player2 != null) {
            if (turn%2 == 0) {
                e.innerHTML = player1;
                e.style.backgroundColor = "#e0a64b"
                turn++;
            } else if(turn%2 != 0 && turn!=9){
                e.innerHTML = player2;
                e.style.backgroundColor = "#d06354"
                turn++;
            }                
        } else{
            document.getElementById('alert').innerHTML=`<div class=" flex justify-center">
            <div class="flex p-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Info</span>
                <div>
                  <span class="font-medium">Alert!</span> Select Your Item
                </div>
              </div>
        </div>`;
        }
    }