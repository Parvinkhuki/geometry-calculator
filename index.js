
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

function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' '  + area)
    const calculationEntry = document.getElementById('area-calc');
    const count = calculationEntry.childElementCount;
    if(count===5){
        return alert("can not add ")
    }

    const li = document.createElement('li');
    li.classList.add('my-4');
   
    li.innerHTML = `${count+1}. ${areaType}<span class='item'>${area}</span> cm<sup>2</sup><button class="btn w-auto p-2 bg-cyan-500 hover:bg-cyan-200" onclick="convert("item")">convert</button>`;

    calculationEntry.appendChild(li);
}
function convert(items){
    const item=document.getElementsByClassName(items)
    const convert = parseFloat(item.innerText)/100;
    item.innerText=convert;
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
    if(isNaN(base)||isNaN(height)){
        return alert("give a num ")
    }
    const sum = 0.5*base*height;
    console.log(sum)
    setValue("areaTriangle",sum)
    addToCalculationEntry("Triangle", sum)

 }
 function rect(){
    const width=getInputById("width")
    const length=getInputById("length")
    console.log(length)
    if(isNaN(width)||isNaN(length)){
        return alert("give a num ")
    }
    const sum=width*length;
    setValue("areaRectangle",sum)
    addToCalculationEntry("Rectangle", sum)
   
    

 }
 function paral(){
    const baseP = getInputById("base2")
    const heightP= getInputById("height2")
    const sum =baseP*heightP;
    console.log(sum)
   setValue("areaParall",sum)
   addToCalculationEntry("Parallelogram", sum)
 }
 function penta(){
    const base3 = getInputById("base3")
    const apothem = getInputById("apothem")
    if(isNaN(base3)||isNaN(apothem)){
        return alert("give a num ")
    }
    const sum =((5/2)*base3*apothem);
    console.log(sum)
   setValue("areaPentagon",sum)
   addToCalculationEntry("pentagon", sum)
 }

 function rhom(){
    const d1 = getInputById("d1")
    const d2= getInputById("d2")
    if(isNaN(d1)||isNaN(d2)){
        return alert("give a num ")
    }
    const sum = 0.5*d1*d2;
    console.log(sum)
    setValue("areaRhom",sum)
    addToCalculationEntry("Rhombus", sum)
}
function elip(){
    const axis1 = getInputById("axis1")
    const axis2= getInputById("axis2")
    const sum = 3.16*axis1*axis2;
    if(isNaN(axis1)||isNaN(axis2)){
        return alert("give a num ")
    }
    console.log(sum)
    setValue("areaElip",sum)
    addToCalculationEntry("ellipse", sum)
    
}
