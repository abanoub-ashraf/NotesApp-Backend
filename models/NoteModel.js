import mongoose from 'mongoose'

const NoteModel = new mongoose.Schema({
    title: String,
    date: Date,
    note: String
})

export default mongoose.model('Notes', NoteModel)