import Router from 'express'
import BookDBController from "./BookDBController.js";


const router = new Router()

router.post('/books', BookDBController.create)
router.get('/books', BookDBController.getAll)
router.get('/books/:id', BookDBController.getOne)
router.put('/books', BookDBController.update)
router.delete('/books/:id', BookDBController.delete)

export default router;