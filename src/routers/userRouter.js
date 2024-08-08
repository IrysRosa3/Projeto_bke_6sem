import express from "express"
import userList from '../controllers/userList'
import userById from "../controllers/userById"
import editUser from "../controllers/editUser"
import editNameuser from "../controllers/editNameuser"
import deleteUser from "../controllers/deleteUser"
import createUser from "../controllers/createUser"

const router = express.Router()

router.get('/', userById)
router.get('/list', userList)
router.get('/', editUser)
router.get('/', editNameuser)
router.get('/', deleteUser)
router.get('/', createUser)

router.get('/', (req, res) => {
    res.json({message: "Rota GET /user" })
})

router.get('/list', (req, res) => {
  res.json({message: "Rota GET /user" })
})

router.post('/', (req, res) => {
  res.json({message: "Rota POST /user" })
})

router.put('/', (req, res) => {
  res.json({message: "Rota PUT /user" })
})

router.patch('/', (req, res) => {
  res.json({message: "Rota PATCH /user" })
})

router.delete('/', (req, res) => {
  res.json({message: "Rota DELETE /user" })
})

export default router