const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler } = require('./users')
const { retrieveLooksHandler } = require('./looks')

const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)
usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)
usersRouter.get('/users', retrieveUserHandler)

const looksRouter = Router()

looksRouter.get('/looks', retrieveLooksHandler)

module.exports = {
    usersRouter,
    looksRouter
}