const clock = document.getElementById('clock')
// console.log(date.toLocaleTimeString());

setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleString();
},1000)