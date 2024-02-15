


//2nd  call the main function calculate the value  --------
function calculateTriangle(){
    const base =getBase('triangle-base');
    console.log(base);
    const height = getBase('triangle-height');
    console.log(height);
    const result =0.5 *base *height;
     console.log("Triangle value is :",result);
     setInnerTextById('showoutput',result); //3rd call the main function
   }
//1st Receive the triangle all input value & return------
function getBase(inputFieldId) {
    const inputBase = document.getElementById(inputFieldId).value;
    const baseInput=parseFloat(inputBase);
   return baseInput;

}
//3rd where i show the value 
function setInnerTextById(elementId,result){
const element=document.getElementById(elementId);
element.innerText=result;
}

