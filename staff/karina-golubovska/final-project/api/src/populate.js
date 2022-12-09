require('dotenv').config()

const { connect, disconnect, default: mongoose } = require('mongoose')
const { User, Look, Item } = require('./models')

const { MONGO_URL } = process.env

connect(MONGO_URL)
    //.then(() => Promise.all([User.deleteMany(), Look.deleteMany()]))
    .then(() => mongoose.connection.db.dropDatabase())
    .then(() => {
        const kari = new User({
            name: 'Karina Golubovska',
            email: 'golubov963@gmail.com',
            password: '123123123',
            photo: 'https://i.pinimg.com/474x/10/8d/eb/108deb1497be83bbe4543c5c4d6317be.jpg'

        })
        const julia = new User({
            name: 'Juliana Tymchyshyn',
            email: 'tymchyshyn@gmail.com',
            password: '123123123',
            photo: 'https://i.pinimg.com/474x/d7/02/63/d7026387338284d82974721e4cacad40.jpg'
        })



        return Promise.all([
            kari.save(),
            julia.save()
        ])
    })
    .then(([kari, julia]) => {
        const look1 = new Look({
            user: kari.id,
            title: 'look for a school',
            description: 'Hi guys , today ia a first day of school , are you ready ?',
            photo: 'https://i.pinimg.com/564x/e3/c0/a1/e3c0a1ada58d0cd14e15ddc23ab29531.jpg'
        })

        const item1 = new Item({ url: 'https://www.chanel.com/es/moda/p/A35200Y0405994305/bolso-mini-con-solapa-piel-de-cordero-y-metal-dorado/', coords: [140, 200], category:'pantalones' , description:"bolso chanel"})
        const item2 = new Item({ url: 'https://www.zara.com/es/es/blazer-basica-p08372380.html?v1=213636342', coords: [155, 260], category:'camiseta',description:"blazer zara" })
        const item3 = new Item({ url: 'https://www.zara.com/es/es/jersey-basico-punto-cuello-subido-p08851123.html?v1=179714647', coords: [180, 320], category:'chaqueta',description:" jersey zara " })

        look1.items.push(item1)
        look1.items.push(item2)
        look1.items.push(item3)

        const look2 = new Look({
            user: kari.id,
            title: 'look for a cinema',
            description: 'Decided to go to cinema with my friends , how do you spend your time wiith friends',
            photo: 'https://i.pinimg.com/564x/c5/ff/86/c5ff86b7c81b9ce0e7d8da975392e69d.jpg'
        })
        const look3 = new Look({
            user: kari.id,
            title: 'look for a school',
            description: 'Hi guys , today ia a first day of school , are you ready ?',
            photo: 'https://i.pinimg.com/564x/b3/1e/dc/b31edcdad5af537faae52b314fc6af20.jpg'
        })

        const look4 = new Look({
            user: kari.id,
            title: 'look for a cinema',
            description: 'Decided to go to cinema with my friends , how do you spend your time wiith friends',
            photo: 'https://i.pinimg.com/474x/c1/27/ce/c127ce44616a35e7e988f604b4912af8.jpg'
        })
        const look5 = new Look({
            user: kari.id,
            title: 'look for a cinema',
            description: 'Decided to go to cinema with my friends , how do you spend your time wiith friends',
            photo: 'https://i.pinimg.com/474x/c7/e8/9e/c7e89e81ee79596a6354098f868fc5c9.jpg'
        })
        const look6 = new Look({
            user: kari.id,
            title: 'look for a cinema',
            description: 'Decided to go to cinema with my friends , how do you spend your time wiith friends',
            photo: 'https://i.pinimg.com/564x/2f/f7/fe/2ff7fe1f6270a36acc86a85483d00b67.jpg'
        })
        const look7 = new Look({
            user: kari.id,
            title: 'look for a cinema',
            description: 'Decided to go to cinema with my friends , how do you spend your time wiith friends',
            photo: 'https://i.pinimg.com/474x/77/c0/9f/77c09ff4e0322b1d1208488ec4d0fc8f.jpg'
        })
        const look8 = new Look({
            user: kari.id,
            title: 'look for a cinema',
            description: 'Decided to go to cinema with my friends , how do you spend your time wiith friends',
            photo: 'https://i.pinimg.com/474x/59/8f/c8/598fc871ebc95feb39b6add1ffa39754.jpg'
        })
        const look9 = new Look({
            user: kari.id,
            title: 'look for a cinema',
            description: 'Decided to go to cinema with my friends , how do you spend your time wiith friends',
            photo: 'https://i.pinimg.com/474x/be/39/9f/be399f0200ff3ca37a8dfbd181e5cbf1.jpg'
        })
        const look10 = new Look({
            user: kari.id,
            title: 'look for a cinema',
            description: 'Decided to go to cinema with my friends , how do you spend your time wiith friends',
            photo: 'https://i.pinimg.com/474x/92/29/70/92297043749a5001917e2d68d4f11e65.jpg'
        })
        const look11 = new Look({
            user: julia.id,
            title: 'look for a cinema',
            description: 'Decided to go to cinema with my friends , how do you spend your time wiith friends',
            photo: 'https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/301279501_1736585250053581_3570050557834972505_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=B1pU5OdyAH4AX8JNjdP&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNDE4OTgwMzkyMDI2Mzg1Ng%3D%3D.2-ccb7-5&oh=00_AT8tzBadIINwfKcXpZ0aIARjT4rFWgUffXpmK5Ki3cj8dw&oe=631D8B18&_nc_sid=30a2ef'
        })
        const look12 = new Look({
            user: julia.id,
            title: 'look for a cinema',
            description: 'Decided to go to cinema with my friends , how do you spend your time wiith friends',
            photo: 'https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/301279501_1736585250053581_3570050557834972505_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=B1pU5OdyAH4AX8JNjdP&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNDE4OTgwMzkyMDI2Mzg1Ng%3D%3D.2-ccb7-5&oh=00_AT8tzBadIINwfKcXpZ0aIARjT4rFWgUffXpmK5Ki3cj8dw&oe=631D8B18&_nc_sid=30a2ef'
        })
        return Promise.all([
            look1.save(),
            look2.save(),
            look3.save(),
            look4.save(),
            look5.save(),
            look6.save(),
            look7.save(),
            look8.save(),
            look9.save(),
            look10.save(),
            look11.save(),
            look12.save()
        ])
    })
    .catch(error => {
        console.error(error.message)
    })
    .then(() => disconnect())