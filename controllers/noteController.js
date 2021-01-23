import NoteModel from '../models/NoteModel.js'
import colors from 'colors'

export const createNote = (req, res) => {
    const { title, note } = req.body
    const newNote = new NoteModel({
        title: title,
        date: new Date(),
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
                res.status(500).send('Failed to create the New Note!')
            }
        })
        .catch(error => {
            console.log(colors.red(error).underline)
            res.status(500).send('Failed to create the New Note!')
        })
}

export const fetchNotes = (req, res) => {
    NoteModel.find()
        .then(notes => {
            console.log(colors.green(`Notes in the DB are fetched:`))
            console.log(colors.green(notes))
            // send the notes to the client
            res.status(200).send(notes)
        })
        .catch(error => {
            console.log(colors.red(error).underline)
            res.status(404).send('Sorry Some Error occurred')
        })
}

export const deleteNote = (req, res) => {
    const noteId = req.params.noteId
    NoteModel.findOneAndRemove({ _id: noteId })
        .then(_result => {
            console.log(colors.white('Note is Deleted!'))
            res.status(204).send('Note is Deleted!')
        })
        .catch(error => {
            console.log(colors.red(error).underline)
            res.status(500).send('Couldn\'t Delete the Note!')
        })
}

// export const updateNote = (req, res) => {}

export default {
    createNote, 
    fetchNotes,
    deleteNote,
    updateNote
}