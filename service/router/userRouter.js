import Router from 'express'
import userController from '../controller/userController.js'



const router = new Router()

router.post('/registratsion',userController.registration)
router.post('/login',userController.login)
router.get('/auth',userController.check)

export default router;