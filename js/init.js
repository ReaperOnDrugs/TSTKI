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
    selInd.style.top = document.querySelector("._selectedTABi").offsetTop+"px";
});
function setTab(str,id){
    let oldTab = document.querySelector("._selectedTAB");
    let newTab = document.getElementById(id);
    document.querySelectorAll("._selectedTABi").forEach(e => {
        e.classList.remove("_selectedTABi");
    });
    document.getElementById(str).classList.add("_selectedTABi");
    document.getElementById(str+"C").classList.add("_selectedTABi");
    oldTab.classList.remove("slideLeft2");
    oldTab.classList.add("slideLeft1");
    oldTab.classList.remove("_selectedTAB");
    newTab.classList.add("_selectedTAB");
    newTab.classList.add("slideLeft2");
}
function expandNew(){
    document.getElementById("newTSTelement").classList.toggle("nTSTcollapse");
    document.getElementById("newTSTelement").classList.toggle("nTSTexpand");
    document.getElementById('openBtn').childNodes[0].classList.toggle("obCollapse");
    document.getElementById('openBtn').childNodes[0].classList.toggle("obExpand");
}

window.onresize = () => {
    selInd.style.top = document.querySelector("._selectedTABi").offsetTop+"px";
}