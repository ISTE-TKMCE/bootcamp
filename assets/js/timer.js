// Set the date we're counting down to
var countDownDate = new Date("Dec 25, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = `<div id = "timer" class = "mx-auto">
  <span>${days}<p>day</p></span><span>${hours}<p>hrs</p></span><span>${minutes}<p>mins</p></span><span>${seconds}<p>sec</p></span>
  
  </div>`;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



const stacker = document.getElementById('stack-img-box').querySelectorAll('img');
const stackAnimation = () =>{
    console.log(stacker)
    for (let i in stacker){
console.log(i)

        i.addEventListener('mouseover',() =>{
            alert("inner")
            x.style.display = "none";
        })
    }
}

