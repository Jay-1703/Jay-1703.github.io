//============================= Navbar ===========================
window.onscroll = function () { navbar() };

function navbar() {
    if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
        document.getElementById('end-nav').style.position = "fixed";
        document.getElementById('end-nav').style.width = "100%";
        document.getElementById('end-nav').style.top = "0";
        document.getElementById('end-nav').style.zIndex = "9999";
    }

    else {
        document.getElementById('end-nav').style.position = "relative";
        document.getElementById('end-nav').style.width = "100%";
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
function add(item) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.map((element) => {
        let id = element.id;
        if (item == id) {
            element.qty = element.qty + 1;
        }
        cart.splice(item, cart);
        localStorage.setItem("cart", JSON.stringify(cart));
        //return element;
        window.location.reload();
    });
}
function sub(item) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.map((element) => {
            let id = element.id;
            if (item == id) {
                if(element.qty > 1){
                    element.qty = element.qty - 1;
                }
                else{
                    element.qty = 1;
                }
            }
            cart.splice(item, cart);
            localStorage.setItem("cart", JSON.stringify(cart));
            //return element;
            window.location.reload();
        });
    }
function remove(target) {
    target.parentElement.parentElement.remove();
}
//============================== Add productes ========================
function setcookie() {
    // let name = document.getElementById("name").value;

    //  let cookie = document.cookie = "username=" + name;
    //  const d = new Date();
    //  d.setTime(d.getTime() + 10000);
    //  var cookiestr = "username=" + cookie + ";expires=" + d.toUTCString(); + ";path=/";
    //  document.cookie = cookiestr;
    let obj = [{
        "id": 0,
        "src": "./Images/m4.png",
        "name": "Mi 4A Horizon",
        "Price": "320.00"
    }, {
        "id": 1,
        "src": "./Images/m6.png",
        "name": "Smart AC with Wi-fi",
        "Price": "349.00"
    }, {
        "id": 2,
        "src": "./Images/m5.png",
        "name": "Microwave Oven",
        "Price": "249.00"
    },{
        "id": 3,
        "src": "./Images/m7.png",
        "name": "Desert Air Cooler",
        "Price": "230.00"
    }, {
        "id": 4,
        "src": "./Images/m8.png",
        "name": "Auto Washing Machine",
        "Price": "180.00"
    }, {
        "id": 5,
        "src": "./Images/m9.png",
        "name": "Water Purifier",
        "Price": "199.00"
    }];
    localStorage.setItem("Products", JSON.stringify(obj));     
}

function addproduct(item){   
    let Productid = item;
    let adddata = true;

    let cart = (localStorage.getItem("cart"))?JSON.parse(localStorage.getItem("cart")):[];
        cart.map(element => {
         let id = element.id;
         if(Productid == id){
            element.qty = element.qty + 1;
            adddata = false;
         }
        //  return element;
     });
    var info = data[item];
    info.qty = 1; 
    adddata?cart.push(info):null;
    localStorage.setItem("cart",JSON.stringify(cart));
    window.location.href="./Checkout.html";
}