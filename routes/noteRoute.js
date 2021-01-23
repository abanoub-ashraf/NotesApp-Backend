import express from 'express'
import { 
    createNote, 
    fetchNotes,
    deleteNote,
    updateNote
} from '../controllers/noteController.js'

const router = express.Router()

/** 
 * @method POST
 * @router /notes/create 
 * @description create a new note
 */
router.post('/create', createNote)

// /**
//  * @method DELETE
//  * @router /notes/delete/noteId
//  * @description delete a note
//  */
// router.delete('/delete/:noteId', deleteNote)

// /**
//  * @method PATCH
//  * @router /notes/update/noteId
//  * @description update a note
//  */
// router.patch('/update/:noteId', updateNote)

/**
 * @method GET
 * @router /notes/
 * @description fetch all notes
 */
router.get('/', fetchNotes)

export default router