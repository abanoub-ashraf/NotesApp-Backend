import express from 'express'
import noteController from '../controllers/noteController.js'

const router = express.Router()

/** 
 * @method POST
 * @router notes/create 
 * @description create a new note
 */
router.post('/create', noteController.createNote)

// DELETE A NOTE
router.delete('')

// UPDATE A NOTE
router.patch('')

// FETCH ALL NOTES
router.get('')

export default router