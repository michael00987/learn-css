const express = require('express')
const cors = require('cors')
const app=express()
app.use(cors())
app.get('/creation/02',(req,res,next)=>{
  const items=[
    { id:0,
      bigImg:'이미지 주소'
    }
  ]
  for( let i =0 ; i<100000 ; i++){
    if(!items[i]){
      items.push({})
      console.log('j',i)
      items[i]['id']=i
      items[i]['bigImg']='이미지 주소'
    }
  }
  console.log(items)
  res.status(200).send(items)
})
app.listen(3000,()=>{
  console.log('3000 번 연결')
})