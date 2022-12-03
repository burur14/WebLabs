document.getElementById("block-6").addEventListener("select", drag);

function replace_blocks() {
    let text4 = document.getElementById("block-4").innerHTML;
    document.getElementById("block-4").innerHTML = document.getElementById("block-5").innerHTML;
    document.getElementById("block-5").innerHTML = text4;
}

function calculate_triangle_square() {
    let a = Math.floor(Math.random() * 7) + 1;
    let b = Math.floor(Math.random() * 7) + 1;
    let c = Math.floor(Math.random() * 7) + 1;
    let p = (a + b + c) / 2;
    let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    if (isNaN(s)) {
        calculate_triangle_square();
    } else {
        document.getElementById("block-3").innerHTML += "<br>" + Math.round(s);
    }
}

function read_block_3() {
    let lines = document.getElementById("block-3").innerHTML.split("<br>");
    const arrOfNumbers = [];

    for (let line of lines) {
        if (isNum(line)) {
            arrOfNumbers.push(line);
            if (arrOfNumbers.length === 10) break;
        }
    }
    let max = Math.max.apply(Math, arrOfNumbers);
    let count = countElements(arrOfNumbers, max);
    alert("Max elem is " + max + "\nCount = " + count);
    setCookie("maxValue", max, 365);
    setCookie("countMax", count, 365);
}

function isNum(str) {
    return /^\d+$/.test(str);
    ;
}

function countElements(arr, elem) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == elem) count++;
    }
    return count;

}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookies() {
    let boldness;
    if ((boldness = localStorage.getItem("boldness")) !== undefined) {
        if (localStorage.getItem("boldness") === "1") {
            document.getElementById("block-6").style.fontWeight = "bold";
        } else if (localStorage.getItem("boldness") === "0") {
            document.getElementById("block-6").style.fontWeight = "normal";
        }
    }
    let maxValue = getCookie("maxValue");
    let countMax = getCookie("countMax");
    if (maxValue != "" && countMax != "") {
        let conf = confirm("MaxValue= " + maxValue + ";\nCountMax= " + countMax + ";\nAfter Clicking 'OK' cookies wiil be deleted");
        if(conf === true){
            setCookie("maxValue", "", -1);
            setCookie("countMax", "", -1);
            alert("Cookies have been deleted. Reloading page...");
            location.reload();
        }
    }
}

function setBoldness(){
    let bold;
    if(document.getElementsByName("boldness")[1].checked){
        bold = 1;
        document.getElementById("block-6").style.fontWeight = "bold";
    }else if(document.getElementsByName("boldness")[0].checked){
        bold = 0
        document.getElementById("block-6").style.fontWeight = "normal";
    }
    localStorage.setItem("boldness", bold);
}

function addItem(){
    let number = Number(document.getElementById("list").lastChild.textContent.match(/\d+/)) + 1;
    document.getElementById("list").innerHTML += "<li> Element " + number + "</li>";

}

function save_to_storage(){
    const list = document.getElementById("list").children;
    const elemsStr = [];
    for(item of list){
        elemsStr.push(item.innerHTML);
    }
    localStorage.setItem("Elements of list", elemsStr);
}

function checkStorage(){
    let listStr = localStorage.getItem("Elements of list").replaceAll(",", "<br>");
    if(listStr !== ""){
        document.getElementById("block-5").innerHTML += listStr;
    }


}



