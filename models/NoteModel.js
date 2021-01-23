import mongoose from 'mongoose'

const NoteModel = new mongoose.Schema({
    title: String,
    date: String,
    note: String
})

export default mongoose.model('Notes', NoteModel)