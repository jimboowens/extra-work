let x = document.getElementById("demo")
let num=0
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser."
  }
}

function showPosition(position) {
  console.log(position)
  x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude
}

function* fibonacci() { 
  let [prev, curr] = [0, 1]
  while (true) {
    [prev, curr] = [curr, prev + curr]
    yield curr
  }
}

for (let n of fibonacci()) {
  if(num===0){
    console.log(`the 1st number in the fibonacci sequence is: ${n}`)
  }else if (num===1){
    console.log(`the 2nd number in the fibonacci sequence is: ${n}`)
  }else if(num===2){
    console.log(`the 3rd number in the fibonacci sequence is: ${n}`)
  }else{
  console.log(`the ${num+2}th number in the fibonacci sequence is: ${n}`)
  }
  num++
  // end the loop at 1000
  if (num >= 100) {
    break;
  }
}