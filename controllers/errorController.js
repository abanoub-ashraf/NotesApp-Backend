import colors from 'colors'

// for any other random not existed endpoints the user might enter
export const pageNotFound = (req, res, next) => {
    console.log(colors.gray('The user has entered an invalid endpoint'))
    res.status(404).json({
        message: 'Invalid Endpoint, please try again'
    })
    next()
}

export default pageNotFound