const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Look } = require('../../../models')
const { NotFoundError } = require('../../../../../errors')
// const { createNote } = require('../..')

describe('createNote', () => {
    beforeAll(() => connect('mongodb://127.0.0.1:27017/withoutname'))

    beforeEach(() => Promise.all([User.deleteMany(), Look.deleteMany()]))

    it('succeeds on correct data', () => {  // happy path
        const name = 'Karina Golubovska'
        const email = 'golubov963@gmail.com'
        const password = '123123123'

        return User.create({ name, email, password })
            .then(user =>
                createLook(user.id)
                    .then(res => {
                        expect(res).toBeUndefined()

                        return Look.find()
                    })
                    .then(looks => {
                        expect(looks).toHaveLength(1)

                        const [look] = looks

                        expect(look.user.toString()).toEqual(user.id)
                        expect(look.photo).toEqual('')
                        expect(look.visibility).toEqual('private')
                        expect(look.createAt).toBeInstanceOf(Date)
                        expect(look.modifiedAt).toBeUndefined()
                    })
            )

    })

    it('fails on non-existing user', () => {  // unhappy path
        const userId = new ObjectId().toString()

        return createLook(userId)
            .catch(error => {
                expect(error).toBeInstanceOf(NotFoundError)
                expect(error.message).toEqual(`user with id ${userId} not found`)
            })
    })

    afterAll(() => disconnect())
})