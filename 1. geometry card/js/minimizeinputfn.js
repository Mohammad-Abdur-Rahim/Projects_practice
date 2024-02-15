



function calculateTriangle(){
    const base =getBase('triangle-base');
    console.log(base);
    const height = getBase('triangle-height');
    console.log(height);
   }

function getBase(inputFieldId) {
    const inputBase = document.getElementById(inputFieldId).value;
    const baseInput=parseFloat(inputBase);
   return baseInput;
    
}

