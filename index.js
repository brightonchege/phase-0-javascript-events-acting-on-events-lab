const dodger = document.getElementById('dodger')
function moveDodgerLeft(){
  const moveit = dodger.style.left.replace("px","")
  const left = parseInt(moveit,10)

  if(left > 0){
    dodger.style.left=`${left - 5}px`
  }
}
function moveDodgerRight(){
  const moveit = dodger.style.left.replace("px","")
  const left = parseInt(moveit,10)

  if(left > 0 && left < 360){
    dodger.style.left=`${left + 5}px`
  }
}
document.addEventListener('keydown',function(f){

  if(f.key === "ArrowLeft"){
    moveDodgerLeft()

  }else if(f.key === "ArrowRight"){
    moveDodgerRight()

  }
})