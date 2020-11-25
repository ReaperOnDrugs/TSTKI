import qManager from "./qManager.js";
import tMaster from "./tMaster.js";

var newTST;

document.getElementById("authCBtn").addEventListener("click", function(){
    newTSTf(document.getElementById("authName").value);
    document.getElementById("authBlck").style.setProperty("opacity","0");
    document.getElementById("authBlck").style.setProperty("visibility","collapse");
});

function newTSTf(auth){
    newTST = new tMaster(auth);
}