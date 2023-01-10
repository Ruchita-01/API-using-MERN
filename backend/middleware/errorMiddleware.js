// next : is to call further middleware
// to change the texthtml error which is default, code in errormiddleware to convert it into json
// to overwrite the default express error pass the err parameter in function
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    //Call status
    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
}

module.exports = {
    errorHandler,
}