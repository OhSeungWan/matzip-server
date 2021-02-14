
import express from 'express'
import address from './address'
const router = express.Router()
router.use('/address',address)
export default router