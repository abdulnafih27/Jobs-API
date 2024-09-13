
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    msg : err.message || 'Something went wrong, Try again later.',
    statusCode : err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
  }
  if(err.code && err.code === 11000){
    customError.msg = `Dublicate value entered for ${Object.keys(err.keyValue)} field, Please choose another value.`
    customError.statusCode = 400
  }
  if(err.name === 'ValidationError'){
    customError.msg = Object.keys(err.errors).map((item) => item.message).join(', ');
    customError.statusCode = 400
  }
  if(err.name === 'CastError'){
    console.log(err)
    customError.msg = `No item found with id : ${err.value._id}`
    customError.statusCode = 404
  }

  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
  return res.status(customError.statusCode).json({ error : customError.msg })
}

module.exports = errorHandlerMiddleware
