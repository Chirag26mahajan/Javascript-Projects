const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)  //parseInt we didi because .value se strng me ati hai and to convert it to integer 
    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')

    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }else if(weight==='' || weight<0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }else{
        const BMI = (weight/((height*height)/10000)).toFixed(2)
    let message =  `<span>${BMI}</span>`
    if(BMI<18.6){
        message+= '<p>Under Weight</p>'
    }else if(BMI >=18.6 && BMI<=24.9){
        message+= '<p>Normal Range</p>'
    }else{
        message+='<P>Over Weight</P>'
    }
    results.innerHTML = message;
    }
})