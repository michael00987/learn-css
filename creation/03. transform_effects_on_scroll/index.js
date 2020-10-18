const banner=document.querySelector('.banner')

window.addEventListener('scroll',(e)=>{
  const value = window.scrollY
  console.log(value)
  banner.style.clipPath=`polygon(50% 0%, ${61+value/12}% ${35-value/12}%, 100% 35%, ${68+value/12}% ${57+value/12}%, 79% 100%, 50% ${70+value/12}%, 21% 100%, ${32-value/12}% ${57+value/12}%, 0% 35%, ${39-value/12}% ${35-value/12}%)`
})
