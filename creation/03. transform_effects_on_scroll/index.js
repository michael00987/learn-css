const banner=document.querySelector('.banner')

window.addEventListener('scroll',(e)=>{
  const value = window.scrollY
  console.log(value)
  banner.style.clipPath=`polygon(50% ${0-value/4}%, ${82+value/4}% ${100+value/2}%, ${0-value/4}% ${38-value/4}%, ${100+value/4}% ${38-value/4}%, ${18-value/4}% ${100+value/2}%)`
})
