require('dotenv').config()

const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Look } = require('../../../models')
const { NotFoundError } = require('errors')
const searchLooks = require('.')

const { MONGO_URL_TEST } = process.env

describe('searchNotes', () => {
    beforeAll(() => connect(MONGO_URL_TEST))

    beforeEach(() => Promise.all([User.deleteMany(), Look.deleteMany()]))

    it('succeeds on existing user and looks', () => {  // happy path
        const name = 'Karina Golubovska'
        const email = 'golubov963@gmail.com'
        const password = '123123123'

        const look1 = ''
        const look2 = 'https://i.pinimg.com/564x/88/43/d7/8843d7b1a332900d78110c363628d003.jpg'
        

        const user = new User({ name, email, password })

        const query = 'cine'

        return Promise.all([
            user.save(),
            Note.create({ user: user.id, look: look1 }), // create() -> new, save()
            Note.create({ user: user.id, look: look2 }),
            Note.create({ user: user.id, look: look3 })
        ])
            .then(([user, look1, look2, look3]) =>
                searchNotes(user.id, query)
                    .then(looks => {
                        expect(looks).toHaveLength(1)

                        const [look] = looks
                       
                        expect(look).toBeDefined()
                        expect(look.user).toBeUndefined()
                        expect(look.description).toEqual(look3.description)
                        expect(look.visibility).toEqual(look3.visibility)
                        expect(look.createdAt).toEqual(look3.createdAt)
                        expect(look.modifiedAt).toBeUndefined()
                    })
            )
    })
    .then(([user, item1, item2, item3]) =>
                searchNotes(user.id, query)
                    .then(items => {
                        expect(items).toHaveLength(1)

                        const [item] = items
                       
                        expect(item).toBeDefined()
                        expect(item.user).toBeUndefined()
                        expect(item.description).toEqual(item3.description)
                        expect(item.visibility).toEqual(item3.visibility)
                        expect(item.category).toEqual(item3.category)
                        expect(item.createdAt).toEqual(item3.createdAt)
                        expect(item.modifiedAt).toBeUndefined()
                    })
            )
    })

    it('fails on non-existing user', () => {  // unhappy path
        const userId = new ObjectId().toString()

        const query = 'pr'

        return searchNotes(userId, query)
            .catch(error => {
                expect(error).toBeInstanceOf(NotFoundError)
                expect(error.message).toEqual(`user with id ${userId} not found`)
            })
    })

    afterAll(() => disconnect())
