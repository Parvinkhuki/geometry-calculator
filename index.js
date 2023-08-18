
function getInputById(inputid){
    const input=document.getElementById(inputid)
    const inputStrig = input.value 
    const inputValue=parseFloat(inputStrig)
    input.value ='';
    return inputValue;
}
function setValue(elemetid,newValue){
    const values=document.getElementById(elemetid)
     values.innerText =newValue;
}
const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
const btn3=document.getElementById("btn3")
const btn4=document.getElementById("btn4")
const btn5=document.getElementById("btn5")
const btn6=document.getElementById("btn6")

function btn(){
    const base = getInputById("base")
    const height= getInputById("height")
    const sum = 0.5*base*height;
    console.log(sum)
    setValue("areaTriangle",sum)
//     const ul=document.getElementById("area-calc")
//     const li=document.createElement("li")
//    li.innerHTML=`<p>triangle area: <span id="0"></span>cm<sup>2</sup></p>`
//     document.getElementById("0").innerText=sum
//     ul.append(li)
    
 }
 function rect(){
    const width=getInputById("width")
    const length=getInputById("length")
    console.log(length)
    const sum=width*length;

    setValue("areaRectangle",sum)
    

 }
 function paral(){
    const baseP = getInputById("base2")
    const heightP= getInputById("height2")
    const sum =baseP*heightP;
    console.log(sum)
   setValue("areaParall",sum)
 }
 function penta(){
    const base3 = getInputById("base3")
    const apothem = getInputById("apothem")
  
    const sum =((5/2)*base3*apothem);
    console.log(sum)
   setValue("areaPentagon",sum)
 }

 function rhom(){
    const d1 = getInputById("d1")
    const d2= getInputById("d2")
    const sum = 0.5*d1*d2;
    console.log(sum)
    setValue("areaRhom",sum)
}
function elip(){
    const axis1 = getInputById("axis1")
    const axis2= getInputById("axis2")
    const sum = 3.16*axis1*axis2;
    console.log(sum)
    setValue("areaElip",sum)
}