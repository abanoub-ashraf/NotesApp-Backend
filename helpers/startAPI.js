export const startAPI = (_req, res) => {
    return res.status(200).json({
        message: 'API is Alive!'
    })
}

export default startAPI