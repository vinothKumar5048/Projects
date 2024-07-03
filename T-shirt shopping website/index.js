const b1=document.getElementById( "b1");
const b2=document.getElementById( "b2");
const b3=document.getElementById( "b3");
const b4=document.getElementById("b4");
const b5=document.getElementById("b5");

function border2(){
    b1.style.border='none';
    b3.style.border='none';
    b5.style.border='none';
    b4.style.border='none';
    b2.style.border='1px Solid black';
}
function border1(){
    b2.style.border='none';
    b3.style.border='none';
    b5.style.border='none';
    b4.style.border='none';
    b1.style.border='1px Solid black';
}
function border3(){
    b2.style.border='none';
    b1.style.border='none';
    b5.style.border='none';
    b4.style.border='none';
    b3.style.border='1px solid black';
}
function border4(){
    b2.style.border='none';
    b3.style.border='none';
    b5.style.border='none';
    b1.style.border='none';
    b4.style.border='1px solid black';
}
function border5(){
    b2.style.border='none';
    b3.style.border='none';
    b1.style.border='none';
    b4.style.border='none';
    b5.style.border='1px solid black';
}
const c1=document.getElementById("opt1");
const c2=document.getElementById("opt2");
const c3=document.getElementById("opt3");
const rate=document.getElementById("rate");
const image1=document.getElementById("img1");

function change1(){
    c1.style.outline='4px double black';
    c2.style.outline='none';
    c3.style.outline='none';
    rate.innerHTML="$120.00";
    image1.src="./img-08-a-black-300x366.jpg";
}
function change2(){
    c2.style.outline='4px double black';
    c1.style.outline='none';
    c3.style.outline='none';
    rate.innerHTML="$130.00";
    image1.src="./img-08-a-green-300x366.jpg";
}
function change3(){
    c3.style.outline='4px double black';
    c2.style.outline='none';
    c1.style.outline='none';
    rate.innerHTML="$140.00";
    image1.src="./img-08-a-red-300x366.jpg";
}
const box2b1=document.getElementById("box2-b1");
const box2b2=document.getElementById("box2-b2");
const box2b3=document.getElementById("box2-b3");
const box2b4=document.getElementById("box2-b4");
const box2b5=document.getElementById("box2-b5");

function border1box2(){
    box2b5.style.border='none';
    box2b2.style.border='none';
    box2b3.style.border='none';
    box2b4.style.border='none';
    box2b1.style.border='1px Solid black';
}
function border2box2(){
    box2b5.style.border='none';
    box2b1.style.border='none';
    box2b3.style.border='none';
    box2b4.style.border='none';
    box2b2.style.border='1px Solid black';
}
function border3box2(){
    box2b5.style.border='none';
    box2b2.style.border='none';
    box2b1.style.border='none';
    box2b4.style.border='none';
    box2b3.style.border='1px Solid black';
}
function border4box2(){
    box2b5.style.border='none';
    box2b2.style.border='none';
    box2b3.style.border='none';
    box2b1.style.border='none';
    box2b4.style.border='1px Solid black';
}
function border5box2(){
    box2b1.style.border='none';
    box2b2.style.border='none';
    box2b3.style.border='none';
    box2b4.style.border='none';
    box2b5.style.border='1px Solid black';
}
const box2c1=document.getElementById("box2-opt1");
const box2c2=document.getElementById("box2-opt2");
const box2c3=document.getElementById("box2-opt3");
const box2rate=document.getElementById("rate1");
const box2image1=document.getElementById("img2");

function box2change1(){
    box2c1.style.outline='4px double black';
    box2c2.style.outline='none';
    box2c3.style.outline='none';
    box2rate.innerHTML="$160.50";
    box2image1.src="./img-06-a-black-300x366.jpg";
}
function box2change2(){
    box2c2.style.outline='4px double black';
    box2c1.style.outline='none';
    box2c3.style.outline='none';
    box2rate.innerHTML="$145.50";
    box2image1.src="./img-06-a-green-300x366.jpg";
}
function box2change3(){
    box2c3.style.outline='4px double black';
    box2c2.style.outline='none';
    box2c1.style.outline='none';
    box2rate.innerHTML="$135.00";
    box2image1.src="./img-06-a-red-300x366.jpg";
}

const box3b1=document.getElementById("box3-b1");
const box3b2=document.getElementById("box3-b2");
const box3b3=document.getElementById("box3-b3");
const box3b4=document.getElementById("box3-b4");
const box3b5=document.getElementById("box3-b5");

function border1box3(){
    box3b5.style.border='none';
    box3b2.style.border='none';
    box3b3.style.border='none';
    box3b4.style.border='none';
    box3b1.style.border='1px Solid black';
}
function border2box3(){
    box3b5.style.border='none';
    box3b1.style.border='none';
    box3b3.style.border='none';
    box3b4.style.border='none';
    box3b2.style.border='1px Solid black';
}
function border3box3(){
    box3b5.style.border='none';
    box3b2.style.border='none';
    box3b1.style.border='none';
    box3b4.style.border='none';
    box3b3.style.border='1px Solid black';
}
function border4box3(){
    box3b5.style.border='none';
    box3b2.style.border='none';
    box3b3.style.border='none';
    box3b1.style.border='none';
    box3b4.style.border='1px Solid black';
}
function border5box3(){
    box3b1.style.border='none';
    box3b2.style.border='none';
    box3b3.style.border='none';
    box3b4.style.border='none';
    box3b5.style.border='1px Solid black';
}
const box3c1=document.getElementById("box3-opt1");
const box3c2=document.getElementById("box3-opt2");
const box3c3=document.getElementById("box3-opt3");
const box3rate=document.getElementById("rate3");
const box3image1=document.getElementById("img3");

function box3change1(){
    box3c1.style.outline='4px double black';
    box3c2.style.outline='none';
    box3c3.style.outline='none';
    box3rate.innerHTML="$160.00";
    box3image1.src="./img-05-a-black-300x366.jpg";
}
function box3change2(){
    box3c2.style.outline='4px double black';
    box3c1.style.outline='none';
    box3c3.style.outline='none';
    box3rate.innerHTML="$170.00";
    box3image1.src="./img-05-a-green-300x366.jpg";
}
function box3change3(){
    box3c3.style.outline='4px double black';
    box3c2.style.outline='none';
    box3c1.style.outline='none';
    box3rate.innerHTML="$180.00";
    box3image1.src="./img-05-a-red-300x366.jpg";
}
const box4c1=document.getElementById("box4-opt1");
const box4c2=document.getElementById("box4-opt2");
const box4c3=document.getElementById("box4-opt3");
const box4rate=document.getElementById("rate4");
const box4image1=document.getElementById("img4");

function box4change1(){
    box4c1.style.outline='4px double black';
    box4c2.style.outline='none';
    box4c3.style.outline='none';
    box4rate.innerHTML="$175.00";
    box4image1.src="./img-01-a-black-300x366.jpg";
}
function box4change2(){
    box4c2.style.outline='4px double black';
    box4c1.style.outline='none';
    box4c3.style.outline='none';
    box4rate.innerHTML="$165.00";
    box4image1.src="./img-01-a-green-300x366.jpg";
}
function box4change3(){
    box4c3.style.outline='4px double black';
    box4c2.style.outline='none';
    box4c1.style.outline='none';
    box4rate.innerHTML="$155.00";
    box4image1.src="./img-01-a-red-300x366.jpg";
}
const box4b1=document.getElementById("box4-b1");
const box4b2=document.getElementById("box4-b2");
const box4b3=document.getElementById("box4-b3");
const box4b4=document.getElementById("box4-b4");
const box4b5=document.getElementById("box4-b5");

function border1box4(){
    box4b5.style.border='none';
    box4b2.style.border='none';
    box4b3.style.border='none';
    box4b4.style.border='none';
    box4b1.style.border='1px Solid black';
}
function border2box4(){
    box4b5.style.border='none';
    box4b1.style.border='none';
    box4b3.style.border='none';
    box4b4.style.border='none';
    box4b2.style.border='1px Solid black';
}
function border3box4(){
    box4b5.style.border='none';
    box4b2.style.border='none';
    box4b1.style.border='none';
    box4b4.style.border='none';
    box4b3.style.border='1px Solid black';
}
function border4box4(){
    box4b5.style.border='none';
    box4b2.style.border='none';
    box4b3.style.border='none';
    box4b1.style.border='none';
    box4b4.style.border='1px Solid black';
}
function border5box4(){
    box4b1.style.border='none';
    box4b2.style.border='none';
    box4b3.style.border='none';
    box4b4.style.border='none';
    box4b5.style.border='1px Solid black';
}
const ab1=document.getElementById("1b1");
const ab2=document.getElementById("1b2");
const ab3=document.getElementById("1b3");
const ab4=document.getElementById("1b4");
const ab5=document.getElementById("1b5");

function aborder2(){
    ab1.style.border='none';
    ab3.style.border='none';
    ab5.style.border='none';
    ab4.style.border='none';
    ab2.style.border='1px Solid black';
}
function aborder1(){
    ab2.style.border='none';
    ab3.style.border='none';
    ab5.style.border='none';
    ab4.style.border='none';
    ab1.style.border='1px Solid black';
}
function aborder3(){
    ab2.style.border='none';
    ab1.style.border='none';
    ab5.style.border='none';
    ab4.style.border='none';
    ab3.style.border='1px solid black';
}
function aborder4(){
    ab2.style.border='none';
    ab3.style.border='none';
    ab5.style.border='none';
    ab1.style.border='none';
    ab4.style.border='1px solid black';
}
function aborder5(){
    ab2.style.border='none';
    ab3.style.border='none';
    ab1.style.border='none';
    ab4.style.border='none';
    ab5.style.border='1px solid black';
}
const ac1=document.getElementById("1opt1");
const ac2=document.getElementById("1opt2");
const ac3=document.getElementById("1opt3");
const arate=document.getElementById("1rate");
const aimage1=document.getElementById("1img1");

function achange1(){
    ac1.style.outline='4px double black';
    ac2.style.outline='none';
    ac3.style.outline='none';
    arate.innerHTML="$120.00";
    aimage1.src="./t-black.jfif";
}
function achange2(){
    ac2.style.outline='4px double black';
    ac1.style.outline='none';
    ac3.style.outline='none';
    arate.innerHTML="$130.00";
    aimage1.src="./t-green.jfif";
}
function achange3(){
    ac3.style.outline='4px double black';
    ac2.style.outline='none';
    ac1.style.outline='none';
    arate.innerHTML="$140.00";
    aimage1.src="./red-t.jfif";
}
const abox2b1=document.getElementById("1box2-b1");
const abox2b2=document.getElementById("1box2-b2");
const abox2b3=document.getElementById("1box2-b3");
const abox2b4=document.getElementById("1box2-b4");
const abox2b5=document.getElementById("1box2-b5");

function aborder1box2(){
    abox2b5.style.border='none';
    abox2b2.style.border='none';
    abox2b3.style.border='none';
    abox2b4.style.border='none';
    abox2b1.style.border='1px Solid black';
}
function aaborder2box2(){
    abox2b5.style.border='none';
    abox2b1.style.border='none';
    abox2b3.style.border='none';
    abox2b4.style.border='none';
    abox2b2.style.border='1px Solid black';
}
function aborder3box2(){
    abox2b5.style.border='none';
    abox2b2.style.border='none';
    abox2b1.style.border='none';
    abox2b4.style.border='none';
    abox2b3.style.border='1px Solid black';
}
function aborder4box2(){
    abox2b5.style.border='none';
    abox2b2.style.border='none';
    abox2b3.style.border='none';
    abox2b1.style.border='none';
    abox2b4.style.border='1px Solid black';
}
function aborder5box2(){
    abox2b1.style.border='none';
    abox2b2.style.border='none';
    abox2b3.style.border='none';
    abox2b4.style.border='none';
    abox2b5.style.border='1px Solid black';
}
const abox2c1=document.getElementById("1box2-opt1");
const abox2c2=document.getElementById("1box2-opt2");
const abox2c3=document.getElementById("1box2-opt3");
const abox2rate=document.getElementById("1rate1");
const abox2image1=document.getElementById("1img2");

function abox2change1(){
    abox2c1.style.outline='4px double black';
    abox2c2.style.outline='none';
    abox2c3.style.outline='none';
    abox2rate.innerHTML="$160.50";
    abox2image1.src="./product-05-a-300x366.jpg";
}
function abox2change2(){
    abox2c2.style.outline='4px double black';
    abox2c1.style.outline='none';
    abox2c3.style.outline='none';
    abox2rate.innerHTML="$145.50";
    abox2image1.src="./t-green.jfif";
}
function abox2change3(){
    abox2c3.style.outline='4px double black';
    abox2c2.style.outline='none';
    abox2c1.style.outline='none';
    abox2rate.innerHTML="$135.00";
    abox2image1.src="./t-red.jfif";
}

const abox3b1=document.getElementById("1box3-b1");
const abox3b2=document.getElementById("1box3-b2");
const abox3b3=document.getElementById("1box3-b3");
const abox3b4=document.getElementById("1box3-b4");
const abox3b5=document.getElementById("1box3-b5");

function aborder1box3(){
    abox3b5.style.border='none';
    abox3b2.style.border='none';
    abox3b3.style.border='none';
    abox3b4.style.border='none';
    abox3b1.style.border='1px Solid black';
}
function aborder2box3(){
    abox3b5.style.border='none';
    abox3b1.style.border='none';
    abox3b3.style.border='none';
    abox3b4.style.border='none';
    abox3b2.style.border='1px Solid black';
}
function aborder3box3(){
    abox3b5.style.border='none';
    abox3b2.style.border='none';
    abox3b1.style.border='none';
    abox3b4.style.border='none';
    abox3b3.style.border='1px Solid black';
}
function aborder4box3(){
    abox3b5.style.border='none';
    abox3b2.style.border='none';
    abox3b3.style.border='none';
    abox3b1.style.border='none';
    abox3b4.style.border='1px Solid black';
}
function aborder5box3(){
    abox3b1.style.border='none';
    abox3b2.style.border='none';
    abox3b3.style.border='none';
    abox3b4.style.border='none';
    abox3b5.style.border='1px Solid black';
}
const abox3c1=document.getElementById("1box3-opt1");
const abox3c2=document.getElementById("1box3-opt2");
const abox3c3=document.getElementById("1box3-opt3");
const abox3rate=document.getElementById("1rate3");
const abox3image1=document.getElementById("1img3");

function abox3change1(){
    abox3c1.style.outline='4px double black';
    abox3c2.style.outline='none';
    abox3c3.style.outline='none';
    abox3rate.innerHTML="$160.00";
    abox3image1.src="./black1.jfif";
}
function abox3change2(){
    abox3c2.style.outline='4px double black';
    abox3c1.style.outline='none';
    abox3c3.style.outline='none';
    abox3rate.innerHTML="$170.00";
    abox3image1.src="./t-green.jfif";
}
function abox3change3(){
    abox3c3.style.outline='4px double black';
    abox3c2.style.outline='none';
    abox3c1.style.outline='none';
    abox3rate.innerHTML="$180.00";
    abox3image1.src="./t-red.jfif";
}
const abox4c1=document.getElementById("1box4-opt1");
const abox4c2=document.getElementById("1box4-opt2");
const abox4c3=document.getElementById("1box4-opt3");
const abox4rate=document.getElementById("1rate4");
const abox4image1=document.getElementById("1img4");

function abox4change1(){
    abox4c1.style.outline='4px double black';
    abox4c2.style.outline='none';
    abox4c3.style.outline='none';
    abox4rate.innerHTML="$175.00";
    abox4image1.src="./t-black.jfif";
}
function abox4change2(){
    abox4c2.style.outline='4px double black';
    abox4c1.style.outline='none';
    abox4c3.style.outline='none';
    abox4rate.innerHTML="$165.00";
    abox4image1.src="./green1.jfif";
}
function abox4change3(){
    abox4c3.style.outline='4px double black';
    abox4c2.style.outline='none';
    abox4c1.style.outline='none';
    abox4rate.innerHTML="$155.00";
    abox4image1.src="./t-red.jfif";
}
const abox4b1=document.getElementById("1box4-b1");
const abox4b2=document.getElementById("1box4-b2");
const abox4b3=document.getElementById("1box4-b3");
const abox4b4=document.getElementById("1box4-b4");
const abox4b5=document.getElementById("1box4-b5");

function aborder1box4(){
    abox4b5.style.border='none';
    abox4b2.style.border='none';
    abox4b3.style.border='none';
    abox4b4.style.border='none';
    abox4b1.style.border='1px Solid black';
}
function aborder2box4(){
    abox4b5.style.border='none';
    abox4b1.style.border='none';
    abox4b3.style.border='none';
    abox4b4.style.border='none';
    abox4b2.style.border='1px Solid black';
}
function aborder3box4(){
    abox4b5.style.border='none';
    abox4b2.style.border='none';
    abox4b1.style.border='none';
    abox4b4.style.border='none';
    abox4b3.style.border='1px Solid black';
}
function aborder4box4(){
    abox4b5.style.border='none';
    abox4b2.style.border='none';
    abox4b3.style.border='none';
    abox4b1.style.border='none';
    abox4b4.style.border='1px Solid black';
}
function aborder5box4(){
    abox4b1.style.border='none';
    abox4b2.style.border='none';
    abox4b3.style.border='none';
    abox4b4.style.border='none';
    abox4b5.style.border='1px Solid black';
}