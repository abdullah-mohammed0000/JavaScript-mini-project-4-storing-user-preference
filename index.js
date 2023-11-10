const selectFontSize = document.getElementById("selectFontSize");
const selectBGColor = document.getElementById("selectBGColor");
const reset = document.getElementById("reset");
const mainelement = document.querySelector("main");

//function



const selectChangeFontSize = (event) =>{

console.log(event.target.value);
const fontvalue = event.target.value;
mainelement.style.fontSize = fontvalue;
localStorage.setItem("fontSize",fontvalue);


}

const selectChangeBGColor = (event) =>{
console.log(event.target.value);
const BGvalue = event.target.value;
mainelement.style.backgroundColor = BGvalue;
localStorage.setItem("bgColor",BGvalue);
}

const clearLocalStorage = () =>{
localStorage.removeItem("bgColor");
localStorage.removeItem("fontSize");
setValues("16px","orange")
}




const initialSetup = () =>{
const bgcolor = localStorage.getItem("bgColor");
const fontsize = localStorage.getItem("fontSize");

if(bgcolor && fontsize)
{
    setValues(fontsize,bgcolor)
}
  

if(!bgcolor && !fontsize)
{
   setValues("16px","orange")
}

if(!bgcolor && fontsize)
{
   setValues(fontsize,"orange")
}

if(bgcolor && !fontsize)
{
   setValues("16px",bgcolor)
}

}



const setValues = (fontsize,bgcolor) => {
    selectFontSize.value = fontsize;
    selectBGColor.value = bgcolor;
    mainelement.style.fontSize = fontsize;
    mainelement.style.backgroundColor = bgcolor
 
}











//addeventlistener

selectFontSize.addEventListener("change",selectChangeFontSize)
selectBGColor.addEventListener("change",selectChangeBGColor)
reset.addEventListener("click",clearLocalStorage)
initialSetup();