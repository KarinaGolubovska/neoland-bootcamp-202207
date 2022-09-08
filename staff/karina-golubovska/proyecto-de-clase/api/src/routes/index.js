const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler } = require('./users')
const { createNoteHandler, retrieveNotesHandler, updateNoteTextHandler } = require('./looks')

const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)
usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)
usersRouter.get('/users', retrieveUserHandler)

const looksRouter = Router()

looksRouter.post('/looks', jsonBodyParser, createNoteHandler)
looksRouter.get('/looks', retrieveNotesHandler)
looksRouter.patch('/looks/:lookId', jsonBodyParser, updateNoteTextHandler)

module.exports = {
    usersRouter,
    looksRouter
}