//============================= Navbar ===========================
window.onscroll = function() {navbar()};
    
    function navbar() {
        if(document.body.scrollTop > 140 || document.documentElement.scrollTop > 140)
        {
            document.getElementById('end-nav').style.position="fixed";
            document.getElementById('end-nav').style.width="100%";
            document.getElementById('end-nav').style.top="0";
            document.getElementById('end-nav').style.zIndex="9999";
        }

        else{
            document.getElementById('end-nav').style.position="relative";
            document.getElementById('end-nav').style.width="100%";
        }
    }

//============================= Change HTML ============================
    function clickCod() {
        document.getElementById("cod-btn").style.backgroundColor = "#FDB03D";
        document.getElementById("cod").style.display = "block";
        document.getElementById("cd-btn").style.backgroundColor = "#000";
        document.getElementById("nb-btn").style.backgroundColor = "#000";
        document.getElementById("p-btn").style.backgroundColor = "#000";
        document.getElementById("cd").style.display = "none";
        document.getElementById("netb").style.display = "none";
        document.getElementById("paypal").style.display = "none";
    }
    function clickCd() {
        document.getElementById("cd-btn").style.backgroundColor = "#FDB03D";
        document.getElementById("cd").style.display = "block";
        document.getElementById("cod-btn").style.backgroundColor = "#000";
        document.getElementById("nb-btn").style.backgroundColor = "#000";
        document.getElementById("p-btn").style.backgroundColor = "#000";
        document.getElementById("cod").style.display = "none";
        document.getElementById("netb").style.display = "none";
        document.getElementById("paypal").style.display = "none";
    }
    function clickNb() {
        document.getElementById("nb-btn").style.backgroundColor = "#FDB03D";
        document.getElementById("netb").style.display = "block";
        document.getElementById("cd-btn").style.backgroundColor = "#000";
        document.getElementById("cod-btn").style.backgroundColor = "#000";
        document.getElementById("p-btn").style.backgroundColor = "#000";
        document.getElementById("cd").style.display = "none";
        document.getElementById("cod").style.display = "none";
        document.getElementById("paypal").style.display = "none";
    }
    function clickP() {
        document.getElementById("p-btn").style.backgroundColor = "#FDB03D";
        document.getElementById("paypal").style.display = "block";
        document.getElementById("cd-btn").style.backgroundColor = "#000";
        document.getElementById("cod-btn").style.backgroundColor = "#000";
        document.getElementById("nb-btn").style.backgroundColor = "#000";
        document.getElementById("netb").style.display = "none";
        document.getElementById("cd").style.display = "none";
        document.getElementById("cod").style.display = "none";
    }

//============================ Counter ==========================
    function add(id){
        let no = parseInt(document.getElementById(id).value);
        document.getElementById(id).value = no + 1;
    }
    function sub(id){
        let no = parseInt(document.getElementById(id).value);
        if(no>1){
            document.getElementById(id).value = no - 1;
        }
    }
    function remove(target){
        target.parentElement.parentElement.remove();
    }
