const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { looks :{ searchLooks} } = require('../../logic')
const logger = createLogger(module) 

module.exports = (req, res ) => {
    runWithErrorHandling(() => {
        
        const userId = verifyToken(req)

        const { query: { q: query}} = req

        return searchLooks(userId, query)
            .then(looks => res.status(200).json(looks))
    }, res, logger)
}