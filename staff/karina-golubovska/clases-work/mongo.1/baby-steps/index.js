const mongodb = require('mongodb')

const { MongoClient } = mongodb

const client = new MongoClient('mongodb://localhost:27017')

    (async () => {
        try {
            const connection = await client.connect()

            const db = connection.db('postits')
            const users = db.collection('users')

            await users.deleteMany({})

            const user = await users.insertOne({
                name: 'James Hook 2',
                email: 'james@hook.com',
                password: '123123123'
            })

            console.log('insert one', user)


            await connection.close()
            console.log('disconnected')
        } catch (error) {
            console.error('ERROR', error)
        }
    })()









