
document.addEventListener("DOMContentLoaded", function() {
   
    const hourss= new Date();

    const formattedDate = hourss.getHours();
    const formattedTime = hourss.getMinutes();


   var dateDisplayElement = document.getElementById('timee')
    dateDisplayElement.textContent = `${formattedDate}:${formattedTime}`;
});

   var dropdownn = document.getElementById('dropdown');
   var celciusvalue;


   dropdownn.addEventListener("change", ()=> {
    var selectedValue = dropdownn.value;
    var tmpvalue = temperature.value;

   if(selectedValue=='kelvin'){
    const newdata = parseFloat(tmpvalue)-273.15;
    celciusvalue=newdata.toFixed(2);
    console.log(newdata);
   }
   else if(selectedValue=='farenheit'){
    const newdata = (parseFloat(tmpvalue)-32)*5/9;
    celciusvalue=newdata.toFixed(2);
    console.log(newdata);
   }
});
const getTmp =() =>{
celcius.value=celciusvalue;
console.log(celciusvalue)

}