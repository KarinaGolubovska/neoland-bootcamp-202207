require('dotenv').config()

const cors = require('cors')
const { connect, disconnect } = require('mongoose')
const { createLogger } = require('./utils')
const logger = createLogger(module)
const { env: { MONGO_URL, PORT } } = process

connect(MONGO_URL)
    .then(() => {
        logger.info('db connected to ' + MONGO_URL)

        const express = require('express')

        const api = express()

        api.get('/hello', (req, res) => res.send('hello world!'))

        const { usersRouter, looksRouter } = require('./routes')

        api.use(cors())

        api.use('/api', usersRouter, looksRouter)

        api.listen(PORT, () => logger.info('api started'))

        process.on('SIGINT', () => {
            if (!process.stopped) {
                process.stopped = true

                logger.info('\napi stopped')

                disconnect()
                    .then(() => {
                        logger.info('db disconnected')

                        process.exit(0)
                    })
            }
        })
    })
    .catch(error => {
        logger.error(error)
    })