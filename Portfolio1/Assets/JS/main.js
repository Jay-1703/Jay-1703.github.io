
window.onscroll = function () { navbar() };
    function navbar() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            document.getElementById('navbar').style.position = "fixed";
            document.getElementById('navbar').style.width = "100%";
            document.getElementById('navbar').style.top = "0";
            document.getElementById('navbar').style.zIndex = "9999";
            document.getElementById('nav-items').style.paddingTop = "1rem";
            document.getElementById('nav-items').style.paddingBottom = "1rem";
            document.getElementById('navbar').style.backgroundColor = "rgb(17, 17, 17)";
        }
        else {
            document.getElementById('navbar').style.position = "relative";
            document.getElementById('navbar').style.width = "100%";
            document.getElementById('nav-items').style.paddingTop = "0";
            document.getElementById('nav-items').style.paddingBottom = "0";
            document.getElementById('navbar').style.zIndex = "0";
            document.getElementById('navbar').style.backgroundColor = "rgb(4, 4, 2)";
        }
    }
    var counter = 1;
    const marketinginterval = setInterval(countingMarketing,120);
    const brandinginterval = setInterval(countingBranding,120);
    const webdesinginterval = setInterval(countingWebdesing,120);
    const wordpressinterval = setInterval(countingWordpress,120);
    
    function countingMarketing(){
            counter+=1;
            document.getElementById('marketing').innerText = counter + "%";
            if(counter >= 42){
                clearInterval(marketinginterval);
            }
    }
    function countingBranding(){
            counter+=1;
            document.getElementById('branding').innerHTML = counter + "%";
            if(counter >= 60){
                clearInterval(brandinginterval);
            }
    }
    function countingWebdesing(){
            counter+=1;
            document.getElementById('webdesing').innerHTML = counter + "%";
            if(counter >= 84){
                clearInterval(webdesinginterval);
            }
    }
    function countingWordpress(){
            counter+=1;
            document.getElementById('wordprass').innerHTML = counter + "%";
            if(counter >= 100){
                clearInterval(wordpressinterval);
            }
    }
    function ok(){
        alert("ok");
    }
    function playBtnScaleIn(){
        document.getElementById('play-icon').style.transform = "scale(1.3)";
        document.getElementById('play-icon').style.transition = "0.5s";
    }
    function playBtnScaleOut() {
        document.getElementById('play-icon').style.transform = "scale(1)";
    }
    