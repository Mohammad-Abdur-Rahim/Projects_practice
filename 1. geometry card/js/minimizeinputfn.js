



function calculateTriangle(){
    const base =getBase('triangle-base');
    console.log(base);
    
   }

function getBase(inputFieldId) {
    const inputBase = document.getElementById(inputFieldId).value;
    const baseInput=parseFloat(inputBase);
   return baseInput;
    
}

