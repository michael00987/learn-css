const banner=document.querySelector('.banner')

window.addEventListener('scroll',(e)=>{
  const value = window.scrollY
  console.log(value)
  banner.style.clipPath=`circle(${value}px at center center)`
})
