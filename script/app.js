var colors = [{
    backgroundColor: "#C31A1E",
    color: "#1C9F15"
},{
    backgroundColor: "#363585",
    color: "#BF9E38"
},{
    backgroundColor: "#19807C",
    color: "#D27429"
},{
    backgroundColor: "#047A04",
    color: "#035C5C"
},{
    backgroundColor: "#310A6A",
    color: "#9C0101"
}];


var refDate = initDate();

function initDate(){
    
    if(new URLSearchParams(location.search).get("dev")){
        var newDate = new Date();
        newDate.setSeconds(newDate.getSeconds() + 10);
        return newDate;
    } else {
        var now = new Date();
        var nextYear = new Date(now.getFullYear()+1, 0,1);
        console.log("next year fixed to", nextYear);
        return nextYear;
    }
}

var fiestaConfDone = false;

function feu_d_artifice(htmlElement){
    htmlElement.style.backgroundColor = 'midnightblue';
    htmlElement.style.color = 'goldenrod';
    
    function fire(){
        for(var i=0; i< Math.floor(3 * Math.random()); i++){
            createFirework(50,100,7,3,null,null,null,null,true,true);
        }
    }

    fire();
    var intervalID = setInterval(fire, 3000);
    setTimeout(function(){
        clearInterval(intervalID);
        refDate = initDate();
        main();
    },60000);
}

function main() {

    var horloge = document.getElementById('horloge');
    var htmlElement = document.getElementsByTagName("html")[0];

    var cpt = 0;
    var lastDate = new Date();

    var intervalID = setInterval(tick, 10);

    function tick() {
        var date = new Date();
        var remainingTime =  Math.round((refDate - date) / 1000);
        
        if(!!lastDate && lastDate.getSeconds() !== date.getSeconds()){
            //horloge.style['font-size'] = Math.floor(window.screen.width / (document.getElementById('horloge').innerText.length * 10))+'vw';
               
            if(remainingTime <= 0){
               
                horloge.innerHTML = "BONNE ANNEE";
                feu_d_artifice(htmlElement);
                clearInterval(intervalID);

            } else {
                var color = colors[cpt];

                //console.log('changement de seconde', cpt, colors.length);
                htmlElement.style.backgroundColor = color.backgroundColor;
                htmlElement.style.color = color.color;


                horloge.innerHTML = remainingTime;
                cpt = (cpt + 1) % colors.length;
                lastDate = date;
            }
        }
    }


}