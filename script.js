"use strict"

window.onload = () => {
    getFccStream()
}

function getFccStream(){
    let fccID = document.getElementById('fcc').innerHTML
    fccID = fccID.replace('#', 'https://www.twitch.tv/freecodecamp')
    document.getElementById('fcc').innerHTML = fccID
    


    // function Get(yourUrl){
    //     let Httpreq = new XMLHttpRequest(); // a new request
    //     Httpreq.open("GET",yourUrl,false);
    //     Httpreq.send(null);
    //     return Httpreq.responseText;          
    // }

    let fccURL = 'https://wind-bow.glitch.me/twitch-api/streams/freecodecamp'

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('fccCurr').innerHTML = 
        JSON.parse(this.responseText).stream || 'No active stream'
      }
    };
    xhttp.open("GET", fccURL, true)
    xhttp.send()



}
