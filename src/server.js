//const express = require('express')
import express from 'express'
import userRouter from './routers/userRouter.js'
import userProduct from './routers/productRouter.js'
const app = express()
const port = 3000

app.use('/user', userRouter)
app.use('/prods', userProduct)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})