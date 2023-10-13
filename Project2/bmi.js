const form = document.querySelector('form');
form.addEventListener('submit',function(e){
e.preventDefault();
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');
if(height==='' || height<=0 || isNaN(height)){
    results.innerHTML = `Please give a valid Height ${height}`;
}
else if(weight==='' || weight<=0 || isNaN(weight)){
    results.innerHTML = `Please give a valid Weight ${weight}`;
}
else
{
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    let msg = ""
    if(bmi<18.6)
    msg = "You are Under weight";
    else if(bmi>=18.6 && bmi<=24.9)
    msg = "You are Normal weight";
    else if(bmi>24.9)
    msg = "You are Over weight";

    results.innerHTML = `<span>BMI = ${bmi}<br> ${msg}</span`;
}


});