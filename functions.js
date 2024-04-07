function change(){
    alert("You did it!")
    let element = document.getElementById("target");
    let bor_r = document.getElementById("border_R");
    let bor_g = document.getElementById("border_G");
    let bor_b = document.getElementById("border_B");
    let bor_w = document.getElementById("border_W");
    let bgr = document.getElementById("back_R");
    let bgg = document.getElementById("back_G");
    let bgb = document.getElementById("back_B");
    element.style = `background-color:rgb(${bgr.value},${bgg.value},${bgb.value}); border-width:${bor_w.value}px; border-color:rgb(${bor_r.value},${bor_g.value},${bor_b.value});`;
}

function verify(){
    let element1 = document.getElementById("pass1");
    let element2 = document.getElementById("pass2");
    let element3 = document.getElementById("win");
    if (element1.value.length < 8 || element2.value.length < 8){
        alert("The titans will get you with those sad defenses. Must be 8 or more characters.");
        element1.value = null;
        element2.value = null;
    }else{
        for (i in element1.value){
            if (element1.value[i] != element2.value[i]){
                return alert("Passwords do not match. Get your defenses together!");
            }
        }
        element3.style = "display: "
        return alert("Great Defense in Depth!");
    }
}