import mongoose from 'mongoose'

const connectToDB = () => {
    return mongoose.connect(process.env.MONGO_DB_URI_LOCAL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

export default connectToDB