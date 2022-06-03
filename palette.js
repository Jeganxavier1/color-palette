document.body.innerHTML=`
<div>
<h1>INPUT FORM</h1>
<form class="form-inline my-2 my-lg-0" onsubmit="return false">

   <input type="text" name="number" id="form-control" placeholder="enter a number">

   <button type="submit" onclick="colorPalett()">Search</button>
 </form>
</div>

<div id ="container">
</div>
`

function palettColor(number,array){
  const box = document.querySelector(`.col${number}`)
  const length  = array.length
  const percent =( 100/length) * number
   box.style.float ="left"
  box.style.width ="100px"
   box.style.height ="150px"
    box.style.margin ="2px"
  box.style.background =`rgb(255 0 0 /${percent}%)`
}


function colorPalett(){
  let container = document.querySelector("#container")
  container.innerHTML=""
  const input = document.querySelector("#form-control").value
  const array =[]
  for (let i=0;i<input;i++){
    array.push(i+1)
  }

array.forEach(number=>{
   container.innerHTML +=`
  <div class=col${number}>${number}</div>
  `
 palettColor(number,array)
})
 }


