window.onload = function checkUserAgent(){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById("blocker").classList.add("blockedHUH");
    }
}
const selInd = document.getElementById("selectIndicator");
const tab = document.querySelectorAll(".navigOptionC");

function moveind(targ){
    selInd.style.top = targ+"px";
}
tab.forEach((e) => {
    e.addEventListener("mousemove", (em) =>{
        moveind(em.target.offsetTop);
    });
});
document.getElementById("selConnC").addEventListener("mouseleave", () => {
    selInd.style.top = document.querySelector("._selectedTAB").offsetTop+"px";
});
function setTab(str){
    document.querySelector("._selectedTAB").classList.remove("_selectedTAB");
    document.getElementById(str+"C").classList.add("_selectedTAB");
}