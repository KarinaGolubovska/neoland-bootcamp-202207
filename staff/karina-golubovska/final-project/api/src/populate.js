const { connect, disconnect } = require('mongoose')
const { User, Post, Item } = require('./models')

connect('mongodb://localhost:27017/withoutname')

    .then(() => Promise.all([User.deleteMany(), Post.deleteMany()]))
    .then(() => {
        const kari = new User({
            name: 'Karina Golubovska',
            email: 'golubov963@gmail.com',
            password: '123123123'
        })
        const julia = new User({
            name: 'Juliana Tymchyshyn',
            email: 'tymchyshyn@gmail.com',
            password: '123123123'
        })



        return Promise.all([
            kari.save(),
            julia.save()
        ])
    })
    .then(([kari, julia]) => {
        const post1 = new Post({
            user: kari.id,
            title: 'look for a school',
            description: 'Hi guys , today ia a first day of school , are you ready ?',
            photo: 'https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/301279501_1736585250053581_3570050557834972505_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=B1pU5OdyAH4AX8JNjdP&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNDE4OTgwMzkyMDI2Mzg1Ng%3D%3D.2-ccb7-5&oh=00_AT8tzBadIINwfKcXpZ0aIARjT4rFWgUffXpmK5Ki3cj8dw&oe=631D8B18&_nc_sid=30a2ef'
        })

        const post2 = new Post({
            user: kari.id,
            title: 'look for a cinema',
            description: 'Decided to go to cinema with my friends , how do you spend your time wiith friends',
            photo: 'https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/301279501_1736585250053581_3570050557834972505_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=B1pU5OdyAH4AX8JNjdP&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNDE4OTgwMzkyMDI2Mzg1Ng%3D%3D.2-ccb7-5&oh=00_AT8tzBadIINwfKcXpZ0aIARjT4rFWgUffXpmK5Ki3cj8dw&oe=631D8B18&_nc_sid=30a2ef'
        })
        const post3 = new Post({
            user: julia.id,
            title: 'look for a school',
            description: 'Hi guys , today ia a first day of school , are you ready ?',
            photo: 'https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/301279501_1736585250053581_3570050557834972505_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=B1pU5OdyAH4AX8JNjdP&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNDE4OTgwMzkyMDI2Mzg1Ng%3D%3D.2-ccb7-5&oh=00_AT8tzBadIINwfKcXpZ0aIARjT4rFWgUffXpmK5Ki3cj8dw&oe=631D8B18&_nc_sid=30a2ef'
        })

        const post4 = new Post({
            user: julia.id,
            title: 'look for a cinema',
            description: 'Decided to go to cinema with my friends , how do you spend your time wiith friends',
            photo: 'https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/301279501_1736585250053581_3570050557834972505_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=B1pU5OdyAH4AX8JNjdP&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNDE4OTgwMzkyMDI2Mzg1Ng%3D%3D.2-ccb7-5&oh=00_AT8tzBadIINwfKcXpZ0aIARjT4rFWgUffXpmK5Ki3cj8dw&oe=631D8B18&_nc_sid=30a2ef'
        })
        return Promise.all([
            post1.save(),
            post2.save(),
            post3.save(),
            post4.save()
        ])
    })
    .catch(error => {
        console.error(error.message)
    })
    .then(() => disconnect())