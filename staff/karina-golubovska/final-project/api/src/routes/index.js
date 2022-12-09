const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler } = require('./users')
const { retrieveLooksHandler, searchLooksHandler, addFavoriteLookHandler, retrieveFavoriteLooksHandler } = require('./looks')
const { looks } = require('../logic')

const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)
usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)
usersRouter.get('/users', retrieveUserHandler)
const looksRouter = Router()

looksRouter.get('/looks', retrieveLooksHandler)
looksRouter.get('/looks/search', searchLooksHandler)
looksRouter.get('/looks/favorites', retrieveFavoriteLooksHandler)
looksRouter.patch('/looks/favorites', jsonBodyParser, addFavoriteLookHandler)
//looksRouter.post('/users/image/upload', jsonBodyParser, uploadImageHandler),


module.exports = {
    usersRouter,
    looksRouter
}