import NoteModel from '../models/NoteModel.js'
import colors from 'colors'

const createNote = (req, res) => {
    const { note, title, date } = req.body
    const newNote = new NoteModel({
        title: title,
        date: date,
        note: note
    })
    newNote.save()
        .then(() => {
            if (newNote.isNew === false) {
                console.log(colors.yellow('A New Note is created Successfully!'))
                // tell the client that we created and saved the new note
                res.status(201).send('A New Note is created Successfully!')
            } else {
                console.log(colors.red('Failed to create the New Note!'))
                // tell the client that we failed to save the new note
                res.status(201).send('Failed to create the New Note!')
            }
        })
        .catch(error => {
            console.log(colors.red(error).underline)
        })
}

export default { createNote }