const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Veg = require('../models/Veg')
const User = require('../models/User')

mongoose.connect(
  dbURI, 
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err) // if connect fails, will send an error to the console and exit
    db.dropDatabase() // on a good connect, first drop all data in the database
      .then(() => {
        return User.create([
          {
            username: 'Lloyd',
            email: 'lloyd@email.com',
            password: 'pass',
            passwordConfirmation: 'pass',
            availablePickUpDays: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ], 
            availablePickUpTimes: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23' ],
            addressLineOne: 'Peaches Castle', 
            addressLineTwo: '', 
            addressCity: 'The mushroom Kingdom', 
            addressPostcode: 'M4R1O'
          },
          {
            username: 'Claire',
            email: 'claire@email.com',
            password: 'pass',
            passwordConfirmation: 'pass',
            availablePickUpDays: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ], 
            availablePickUpTimes: [ '18', '19', '20' ],
            addressLineOne: '60 Disney Lane', 
            addressLineTwo: 'Marshmellow World', 
            addressCity: 'Paris', 
            addressPostcode: 'E8 2RS', 
          },
          {
            username: 'jenny',
            email: 'jenny@email.com',
            password: 'pass',
            passwordConfirmation: 'pass',
            availablePickUpDays: [ 'Saturday', 'Sunday' ], 
            availablePickUpTimes: [ '9', '10' ],
            addressLineOne: 'Round here', 
            addressLineTwo: 'Aldgate', 
            addressCity: 'Lodon', 
            addressPostcode: 'E156TW'
          },
          {
            username: 'Paul',
            email: 'paul@email.com',
            password: 'pass',
            passwordConfirmation: 'pass',
            availablePickUpDays: [ 'Tuesday', 'Wednesday' ], 
            availablePickUpTimes: [ '18', '19', '20' ],
            addressLineOne: '15 Cerulean Lane', 
            addressLineTwo: '', 
            addressCity: 'Cerulean City', 
            addressPostcode: 'P0K3M0N' 
          }
        ])
      })
      .then(users => {
        return Veg.create([
          {
            title: 'Box of tomato',
            typeOfVeg: 'tomato',
            varietyOfVeg: 'cherry',
            pickedDate: 5,
            description: 'very sweet',
            image: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg?w=1155&h=1528',
            isClaimed: false,
            vegLocation: 'SW18 4TQ',
            user: users[0],
            availablePickUpDays: ['Monday', 'Tuesday'],
            availablePickUpTimes: ['18', '19']
          },
          {
            title: 'A basket of cucumbers',
            typeOfVeg: 'cucumber',
            varietyOfVeg: 'armenian',
            pickedDate: 8,
            description: 'mmmmm so juicy',
            image: 'https://www.edenbrothers.com/store/media/Seeds-Vegetables/resized/SVCUC124-1_medium.jpg',
            isClaimed: false,
            vegLocation: 'SW11 1XT',
            user: users[1],
            availablePickUpDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            availablePickUpTimes: ['8', '9', '10']
          },
          {
            title: '5 Aubergines',
            typeOfVeg: 'Aubergine',
            varietyOfVeg: 'English',
            pickedDate: 5,
            description: 'Full of flavour and quite large. ',
            image: 'https://www.nhm.ac.uk/content/dam/nhmwww/discover/aubergine-evolution/aubergine-shutterstock-full-width.jpg.thumb.1920.1920.png',
            isClaimed: false,
            vegLocation: 'SW13 9PF',
            user: users[2],
            availablePickUpDays: ['Saturday', 'Sunday'],
            availablePickUpTimes: ['9', '10', '11']
          },
          {
            title: 'A bunch of asparagus',
            typeOfVeg: 'Asparagus',
            varietyOfVeg: 'English',
            pickedDate: 5,
            description: 'beautiful colour...',
            image: 'https://www.thespruce.com/thmb/AslNxNSnIywOCJuM4fcUAU7VWBA=/1983x1416/filters:fill(auto,1)/Asparagus-GettyImages-135630192-5be349fcc9e77c0051aac6ea.jpg',
            isClaimed: false,
            vegLocation: 'SW12 8RJ',
            user: users[3],
            availablePickUpDays: ['Wednesday', 'Thursday', 'Friday'],
            availablePickUpTimes: ['12', '13']
          }
        ])
      })
      .then(vegetables => console.log(`${vegetables.length} Vegetables created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)