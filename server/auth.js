const jwt = require("jsonwebtoken");

module.exports = async (request, response, next) => {
    try {
        //   get the token from the authorization header
       const token = await request.headers.authorization.split(" ")[1];
    } catch (error) {
        response.status(401).json({
            error: new Error("Invalid request!"),
          });
    }
}
