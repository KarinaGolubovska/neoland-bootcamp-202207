const { runWithErrorHandling, createLogger, verifyToken } = require('../../utils')
const { notes: { retrieveLooks } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {
        const userId = verifyToken(req)

        return retrieveLooks(userId)
            .then(notes => res.status(200).json(notes))
    }, res, logger)
}