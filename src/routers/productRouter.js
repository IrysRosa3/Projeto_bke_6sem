import express from "express"

const product = express.Router()

product.get('/', (req, res) => {
    res.json({message: "Rota GET /user" })
})

product.post('/', (req, res) => {
  res.json({message: "Rota POST /user" })
})

product.put('/', (req, res) => {
  res.json({message: "Rota PUT /user" })
})

product.patch('/', (req, res) => {
  res.json({message: "Rota PATCH /user" })
})

product.delete('/', (req, res) => {
  res.json({message: "Rota DELETE /user" })
})

export default product