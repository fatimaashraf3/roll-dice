function dice(){
    var x = Math.floor(Math.random()*6+1);
var img1;
switch(x)
{
    // case 1:
    //     img1 = document.getElementById("img").src = "src/img1.png"
    //     break;

    case 1:
        img1 = document.getElementById("img").src = "./img2.png"
        break;

    case 2:
        img1 = document.getElementById("img").src = "./img3.png"
        break;

    case 3:
        img1 = document.getElementById("img").src = "./img4.png"
        break;

    case 4:
        img1 = document.getElementById("img").src = "./img5.png"
        break;

    case 5:
        img1 = document.getElementById("img").src = "./img6.png"
        break;
}}
