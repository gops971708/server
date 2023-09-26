const app = require('express')()

app.get('/demo-url',(req,res)=>{
    const resposne={
        message: 'Successfully api call',
        statusCode:200
    }
  res.status(200).json(resposne)
})

app.get('/demo-url2',(req,res)=>{
    const resposne={
        message: 'Successfully api call',
        data:[{
            id: 1,
            name:'Demo',
            city: 'Demo1'
        },{
            id: 2,
            name:'Demo2',
            city: 'Demo2'
        }],
        statusCode:200
    }
  res.status(200).json(resposne)
})

app.listen(4000,()=>{
    console.log('Server listening port 4000')
})