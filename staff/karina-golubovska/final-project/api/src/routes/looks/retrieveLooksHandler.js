const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { looks: { retrieveLooks } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        return retrieveLooks(userId)
            .then(looks => res.status(200).json(looks))
    }, res, logger)
}