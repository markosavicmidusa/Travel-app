import { Injectable } from '@angular/core';
import { TripsModel } from '../trips/trips-service.service';

export interface ProfileModel {

  id: number,
  name: string,
  surname: string,
  password: string,
  email: string,
  phone_number: string,
  address: string,
  favorite_trips: string
  travel: Array<TripsModel>,
  isLogedIn: boolean

}

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  static profiles: Array<ProfileModel> = [

    {
      id: 1,
      name: 'Tina',
      surname: 'Markovic',
      password: 'user1',
      email: 'user1@gmail.com',
      phone_number: '0658412658',
      address: 'Ruzina 22',
      favorite_trips: 'I love traveling with my family, friends and loved ones.I like the clean mountain air, while in warmer destinations I enjoy the sunny weather and swimming in the sea and visiting various beaches.I have a special memory from each trip.',
      isLogedIn: false,
      travel: [
        {
          id: 1,
          destination: 'Las Vegas',
          picture_path: '../../assets/images/lasvegas.png',
          travel_type: 'plane',
          duration: 10,
          distance: 9960,
          price: 5000.00,
          description: 'The city anchors the Las Vegas Valley metropolitan area and is the largest city within the greater Mojave Desert.As Vegas is an internationally renowned major resort city, known primarily for its gambling, shopping, fine dining, entertainment, and nightlife.The Las Vegas Valley as a whole serves as the leading financial, commercial, and cultural center for Nevada.The city bills itself as The Entertainment Capital of the World, and is famous for its mega casino-hotels and associated activities.We wish you a crazy and unforgettable trip!',
          time: new Date('2022-05-06T04:20'),
          recensents: ['Tina', 'Jovan', 'Mario', 'Nina', 'Marina'],
          recensions: ['Great journey.', 'Great all recommendations!', 'Solid.', 'Nothing special.', 'Fantastic'],
          grade: [7, 10, 5, 2, 9],
          status: 'active',
        },

        {
          id: 2,
          destination: 'Barcelona',
          picture_path: '../../assets/images/barselona.png',
          travel_type: 'plane',
          duration: 10,
          distance: 2000,
          price: 1000.00,
          description: 'Barcelona is the capital and largest city of Catalonia and Spains second largest city, with a population of over one and half a million people (over five million in the whole province).Barcelona is the city of the football club FC Barcelona.This city, located directly on the northeastern Mediterranean coast of Spain, has a rich history, having been under Roman, then Frank law before declaring its independence.Barcelona is a big port city.Barcelona is the main Mediterranean port and financial and commercial center, known for its individuality, culture and beauty.',
          time: new Date('2022-04-28T15:20'),
          recensents: ['John', 'Smith', 'Marta', 'Nina', 'Bill'],
          recensions: ['Wonderful!', 'Like that.', 'Interesting.', 'Very interesting.', 'Exciting.'],
          grade: [9, 10, 7, 9, 9],
          status: 'active',
        },

        {
          id: 3,
          destination: 'Miami',
          picture_path: '../../assets/images/miami.png',
          travel_type: 'plane',
          duration: 10,
          distance: 8800,
          price: 4000.00,
          description: 'There is no winter in Miami, the temperature does not fall below 20 degrees all year round.Cuban bars and music can be found on every corner.For a complete atmosphere, head to the part of the city of Little Havana.We enjoy a unique blend of Latin and American traditions.We rest on the most beautiful beaches.We drink cocktails in Midtown, the part of town where the best bars are located',
          time: new Date('2022-07-15T13:30'),
          recensents: ['Tijana', 'Zdravko', 'Kris', 'Nadja', 'Mario'],
          recensions: ['Great!', 'Beautiful', 'Like it', 'Good time.', 'Woow.'],
          grade: [9, 10, 7, 9, 10],
          status: 'active',
        },

        {
          id: 4,
          destination: 'Florida',
          picture_path: '../../assets/images/florida.png',
          travel_type: 'plane',
          duration: 7,
          distance: 8900,
          price: 4500.00,
          description: 'Florida is a state in the southeastern United States, often referred to as the Sunshine State.The capital is Tallahassee.Floridas abbreviation is FL, and its trademark is the bald eagle-fisherman.The climate and the large number of sandy beaches have made Florida an attractive holiday destination for visitors from all over the world.And various amusement parks, such as Disneyland, Universal Studios and others near Orlando are a big magnet for many tourists.',
          time: new Date('2022-07-25T17:40'),
          recensents: ['Petar', 'Patricia', 'John', 'Darko', 'Nadja'],
          recensions: ['Wonderful experience', 'Beautiful beach', 'Wonderful', 'Enchanting', 'Too hot'],
          grade: [9, 10, 10, 9, 7],
          status: 'active',
        },

        {
          id: 5,
          destination: 'Venesia',
          picture_path: '../../assets/images/venecija.png',
          travel_type: 'bus',
          duration: 7,
          distance: 767,
          price: 900.00,
          description: 'Venice is a city, port and famous tourist destination in northeastern Italy, on the Adriatic Sea.Venice is the administrative center of the province of Veneto and the district of the same name in Venice.In the Middle Ages, Venice was the most important city in the world and the largest market town in Europe between its West and East.The city is also known as the long-time capital of the most famous Venetian Republic.',
          time: new Date('2022-08-05T19:00'),
          recensents: ['Persa', 'Milos', 'Jovana', 'Darinka', 'Nada'],
          recensions: ['Like it', 'City ​​on the water', 'Wonderful', 'I do not like', 'Nicely'],
          grade: [9, 10, 10, 9, 7],
          status: 'active',
        },

        {
          id: 6,
          destination: 'Vienna',
          picture_path: '../../assets/images/bec.png',
          travel_type: 'bus',
          duration: 5,
          distance: 615,
          price: 200.00,
          description: 'Vienna, the imperial city and one of the oldest metropolises in Europe, was the seat of the emperor of the Holy Roman Empire, the capital of the Austrian Empire and the Austro-Hungarian monarchy when it reached its peak at the end of the 19th century.It is a favorite destination of millions of tourists from all over the world, mostly thanks to numerous cultural and historical monuments, palaces and a diverse cultural offer.Vienna is also the music capital of the world where the most famous composers lived and worked: Josef Haydn, Wolfgang Amadeus Mozart, Ludwig van Beethoven, Franz Schubert, Franz Liszt, Johannes Brahms, Johann Strauss.Among the many attractions, a special place is occupied by the Vienna Opera, Schönbrunn Castle, the Hofburg Cathedral. Stefana, Baroque palace Belvedere Albertina, amusement park "Prater", Quarter of the museum, Charles Square, a large number of galleries and museums.',
          time: new Date('2022-05-18T22:20'),
          recensents: ['Tina', 'Jovan', 'Mario', 'Nina', 'Marina'],
          recensions: ['Great.', 'Beautiful city', 'Solid.', 'Nothing special.', 'Fantastic'],
          grade: [7, 10, 5, 2, 9],
          status: 'active',
        },

        {
          id: 7,
          destination: 'Madrid',
          picture_path: '../../assets/images/madrid.png',
          travel_type: 'plane',
          duration: 10,
          distance: 2500,
          price: 1200.00,
          description: 'Madrid is the capital of the Kingdom of Spain and is located in the heart of the Iberian Peninsula. By traveling to Madrid, you will satisfy the desire to enjoy works of modern architecture and skyscrapers, but also the cultural heritage of ancient times, as evidenced by museums, magnificent buildings, churches, palaces and parks.Traveling to Madrid, you will have the opportunity to visit Toledo.If you decide to travel to Madrid, we recommend going shopping or visiting one of the museums (Museo del Prado, Museo Nacional Centro de Arte Reina Sofía, Museo Thyssen – Bornemisza ...)',
          time: new Date('2022-04-28T15:20'),
          recensents: ['John', 'Smith', 'Marta', 'Nina', 'Bill'],
          recensions: ['Wonderful!', 'Like that.', 'Interesting.', 'Very interesting.', 'Exciting.'],
          grade: [9, 10, 7, 9, 9],
          status: 'active',
        },
        {
          id: 8,
          destination: 'Jahorina',
          picture_path: '../../assets/images/jahorina.png',
          travel_type: 'bus',
          duration: 7,
          distance: 304,
          price: 500.00,
          description: 'Jahorina belongs to the high mountains of the Dinaric system. Jahorina mountain where you will be greeted by well-prepared ski slopes. These trails and vertical transport are managed by the Jahorina Olympic Center, which will offer you the opportunity to rent adequate ski equipment in our rental shops near the trails.Jahorina is a mountain that boasts a very specific and mild mountain climate, as a result of mixing continental and Mediterranean air. current.Everyone who has ever stayed on Jahorina will tell you that the climatic conditions are significantly different compared to other mountains in the region. ',
          time: new Date('2022-03-05T09:30'),
          recensents: ['Petar', 'Patricia', 'John', 'Darko', 'Nadja'],
          recensions: ['Beautiful mountain', 'Good time.', 'Expensive.', 'Nicely', 'Cold'],
          grade: [10, 9, 9, 8, 6],
          status: 'active',
        },

        {
          id: 9,
          destination: 'Egipat',
          picture_path: '../../assets/images/egipat.png',
          travel_type: 'plane',
          duration: 10,
          distance: 8900,
          price: 4500.00,
          description: ' It is located in the northeastern part of Africa and part of Asia (Sinai) in the Mediterranean and the Red Sea, between Libya, Israel and the Gaza Strip. An old saying: "Egypt is the gift of the Nile" Hurghada is the pearl of the Egyptian coast, located on the Red Sea, which tourists call the "Seven Colored Sea" for many reasons.Newly built hotels that take your breath away with their beauty, combined with the local way of life give a true picture of Egypt.The Red Sea on which the city is located is a real lure for tourists who are professional and amateur diving.The ideal position of the city offers you the possibility of various excursions.',
          time: new Date('2022-09-15T05:50'),
          recensents: ['Bill', 'Niki', 'Jovana', 'Kristina', 'Robin'],
          recensions: ['I like it.', 'Hell of heat', 'Enchanting pyramids', 'Good', 'Beautiful'],
          grade: [10, 7, 10, 9, 8],
          status: 'active',
        },
        {
          id: 10,
          destination: 'Brazil',
          picture_path: '../../assets/images/brazil.png',
          travel_type: 'plane',
          duration: 7,
          distance: 9900,
          price: 5000.00,
          description: 'Brazil is officially the Federal Republic of Brazil, a country in South America.It is the largest and most populous country in Latin and South America.Also, Brazil is the largest Portuguese-speaking country in the world. The capital is Brazil and the official language is Portuguese.',
          time: new Date('2022-05-13T21:00'),
          recensents: ['Marko', 'Milica', 'John', 'Dr. Smith', 'Nikolas'],
          recensions: ['Wonderful!', 'Like that.', 'Interesting.', 'Very interesting.', 'Exciting.'],
          grade: [9, 7, 8, 9, 7],
          status: 'active',
        },
        {
          id: 11,
          destination: 'Las Vegas',
          picture_path: '../../assets/images/lasvegas.png',
          travel_type: 'plane',
          duration: 10,
          distance: 9960,
          price: 5000.00,
          description: 'The city anchors the Las Vegas Valley metropolitan area and is the largest city within the greater Mojave Desert.As Vegas is an internationally renowned major resort city, known primarily for its gambling, shopping, fine dining, entertainment, and nightlife.The Las Vegas Valley as a whole serves as the leading financial, commercial, and cultural center for Nevada.The city bills itself as The Entertainment Capital of the World, and is famous for its mega casino-hotels and associated activities.We wish you a crazy and unforgettable trip!',
          time: new Date('2022-05-06T04:20'),
          recensents: ['Tina', 'Jovan', 'Mario', 'Nina', 'Marina'],
          recensions: ['Great journey.', 'Great all recommendations!', 'Solid.', 'Nothing special.', 'Fantastic'],
          grade: [7, 10, 5, 2, 9],
          status: 'canceled',
        },

        {
          id: 12,
          destination: 'Barcelona',
          picture_path: '../../assets/images/barselona.png',
          travel_type: 'plane',
          duration: 10,
          distance: 2000,
          price: 1000.00,
          description: 'Barcelona is the capital and largest city of Catalonia and Spains second largest city, with a population of over one and half a million people (over five million in the whole province).Barcelona is the city of the football club FC Barcelona.This city, located directly on the northeastern Mediterranean coast of Spain, has a rich history, having been under Roman, then Frank law before declaring its independence.Barcelona is a big port city.Barcelona is the main Mediterranean port and financial and commercial center, known for its individuality, culture and beauty.',
          time: new Date('2022-04-28T15:20'),
          recensents: ['John', 'Smith', 'Marta', 'Nina', 'Bill'],
          recensions: ['Wonderful!', 'Like that.', 'Interesting.', 'Very interesting.', 'Exciting.'],
          grade: [9, 10, 7, 9, 9],
          status: 'canceled',
        },

        {
          id: 13,
          destination: 'Miami',
          picture_path: '../../assets/images/miami.png',
          travel_type: 'plane',
          duration: 10,
          distance: 8800,
          price: 4000.00,
          description: 'There is no winter in Miami, the temperature does not fall below 20 degrees all year round.Cuban bars and music can be found on every corner.For a complete atmosphere, head to the part of the city of Little Havana.We enjoy a unique blend of Latin and American traditions.We rest on the most beautiful beaches.We drink cocktails in Midtown, the part of town where the best bars are located',
          time: new Date('2022-07-15T13:30'),
          recensents: ['Tijana', 'Zdravko', 'Kris', 'Nadja', 'Mario'],
          recensions: ['Great!', 'Beautiful', 'Like it', 'Good time.', 'Woow.'],
          grade: [9, 10, 7, 9, 10],
          status: 'canceled',
        },

        {
          id: 14,
          destination: 'Florida',
          picture_path: '../../assets/images/florida.png',
          travel_type: 'plane',
          duration: 7,
          distance: 8900,
          price: 4500.00,
          description: 'Florida is a state in the southeastern United States, often referred to as the Sunshine State.The capital is Tallahassee.Floridas abbreviation is FL, and its trademark is the bald eagle-fisherman.The climate and the large number of sandy beaches have made Florida an attractive holiday destination for visitors from all over the world.And various amusement parks, such as Disneyland, Universal Studios and others near Orlando are a big magnet for many tourists.',
          time: new Date('2022-07-25T17:40'),
          recensents: ['Petar', 'Patricia', 'John', 'Darko', 'Nadja'],
          recensions: ['Wonderful experience', 'Beautiful beach', 'Wonderful', 'Enchanting', 'Too hot'],
          grade: [9, 10, 10, 9, 7],
          status: 'canceled',
        },

        {
          id: 15,
          destination: 'Venesia',
          picture_path: '../../assets/images/venecija.png',
          travel_type: 'bus',
          duration: 7,
          distance: 767,
          price: 900.00,
          description: 'Venice is a city, port and famous tourist destination in northeastern Italy, on the Adriatic Sea.Venice is the administrative center of the province of Veneto and the district of the same name in Venice.In the Middle Ages, Venice was the most important city in the world and the largest market town in Europe between its West and East.The city is also known as the long-time capital of the most famous Venetian Republic.',
          time: new Date('2022-08-05T19:00'),
          recensents: ['Persa', 'Milos', 'Jovana', 'Darinka', 'Nada'],
          recensions: ['Like it', 'City ​​on the water', 'Wonderful', 'I do not like', 'Nicely'],
          grade: [9, 10, 10, 9, 7],
          status: 'canceled',
        },

        {
          id: 16,
          destination: 'Vienna',
          picture_path: '../../assets/images/bec.png',
          travel_type: 'bus',
          duration: 5,
          distance: 615,
          price: 200.00,
          description: 'Vienna, the imperial city and one of the oldest metropolises in Europe, was the seat of the emperor of the Holy Roman Empire, the capital of the Austrian Empire and the Austro-Hungarian monarchy when it reached its peak at the end of the 19th century.It is a favorite destination of millions of tourists from all over the world, mostly thanks to numerous cultural and historical monuments, palaces and a diverse cultural offer.Vienna is also the music capital of the world where the most famous composers lived and worked: Josef Haydn, Wolfgang Amadeus Mozart, Ludwig van Beethoven, Franz Schubert, Franz Liszt, Johannes Brahms, Johann Strauss.Among the many attractions, a special place is occupied by the Vienna Opera, Schönbrunn Castle, the Hofburg Cathedral. Stefana, Baroque palace Belvedere Albertina, amusement park "Prater", Quarter of the museum, Charles Square, a large number of galleries and museums.',
          time: new Date('2022-05-18T22:20'),
          recensents: ['Tina', 'Jovan', 'Mario', 'Nina', 'Marina'],
          recensions: ['Great.', 'Beautiful city', 'Solid.', 'Nothing special.', 'Fantastic'],
          grade: [7, 10, 5, 2, 9],
          status: 'canceled',
        },

        {
          id: 17,
          destination: 'Madrid',
          picture_path: '../../assets/images/madrid.png',
          travel_type: 'plane',
          duration: 10,
          distance: 2500,
          price: 1200.00,
          description: 'Madrid is the capital of the Kingdom of Spain and is located in the heart of the Iberian Peninsula. By traveling to Madrid, you will satisfy the desire to enjoy works of modern architecture and skyscrapers, but also the cultural heritage of ancient times, as evidenced by museums, magnificent buildings, churches, palaces and parks.Traveling to Madrid, you will have the opportunity to visit Toledo.If you decide to travel to Madrid, we recommend going shopping or visiting one of the museums (Museo del Prado, Museo Nacional Centro de Arte Reina Sofía, Museo Thyssen – Bornemisza ...)',
          time: new Date('2022-04-28T15:20'),
          recensents: ['John', 'Smith', 'Marta', 'Nina', 'Bill'],
          recensions: ['Wonderful!', 'Like that.', 'Interesting.', 'Very interesting.', 'Exciting.'],
          grade: [9, 10, 7, 9, 9],
          status: 'finished',
        },
        {
          id: 18,
          destination: 'Las Vegas',
          picture_path: '../../assets/images/lasvegas.png',
          travel_type: 'plane',
          duration: 10,
          distance: 9960,
          price: 5000.00,
          description: 'The city anchors the Las Vegas Valley metropolitan area and is the largest city within the greater Mojave Desert.As Vegas is an internationally renowned major resort city, known primarily for its gambling, shopping, fine dining, entertainment, and nightlife.The Las Vegas Valley as a whole serves as the leading financial, commercial, and cultural center for Nevada.The city bills itself as The Entertainment Capital of the World, and is famous for its mega casino-hotels and associated activities.We wish you a crazy and unforgettable trip!',
          time: new Date('2022-05-06T04:20'),
          recensents: ['Tina', 'Jovan', 'Mario', 'Nina', 'Marina'],
          recensions: ['Great journey.', 'Great all recommendations!', 'Solid.', 'Nothing special.', 'Fantastic'],
          grade: [7, 10, 5, 2, 9],
          status: 'finished',
        },

        {
          id: 19,
          destination: 'Barcelona',
          picture_path: '../../assets/images/barselona.png',
          travel_type: 'plane',
          duration: 10,
          distance: 2000,
          price: 1000.00,
          description: 'Barcelona is the capital and largest city of Catalonia and Spains second largest city, with a population of over one and half a million people (over five million in the whole province).Barcelona is the city of the football club FC Barcelona.This city, located directly on the northeastern Mediterranean coast of Spain, has a rich history, having been under Roman, then Frank law before declaring its independence.Barcelona is a big port city.Barcelona is the main Mediterranean port and financial and commercial center, known for its individuality, culture and beauty.',
          time: new Date('2022-04-28T15:20'),
          recensents: ['John', 'Smith', 'Marta', 'Nina', 'Bill'],
          recensions: ['Wonderful!', 'Like that.', 'Interesting.', 'Very interesting.', 'Exciting.'],
          grade: [9, 10, 7, 9, 9],
          status: 'finished',
        },

        {
          id: 20,
          destination: 'Miami',
          picture_path: '../../assets/images/miami.png',
          travel_type: 'plane',
          duration: 10,
          distance: 8800,
          price: 4000.00,
          description: 'There is no winter in Miami, the temperature does not fall below 20 degrees all year round.Cuban bars and music can be found on every corner.For a complete atmosphere, head to the part of the city of Little Havana.We enjoy a unique blend of Latin and American traditions.We rest on the most beautiful beaches.We drink cocktails in Midtown, the part of town where the best bars are located',
          time: new Date('2022-07-15T13:30'),
          recensents: ['Tijana', 'Zdravko', 'Kris', 'Nadja', 'Mario'],
          recensions: ['Great!', 'Beautiful', 'Like it', 'Good time.', 'Woow.'],
          grade: [9, 10, 7, 9, 10],
          status: 'finished',
        },

        {
          id: 21,
          destination: 'Florida',
          picture_path: '../../assets/images/florida.png',
          travel_type: 'plane',
          duration: 7,
          distance: 8900,
          price: 4500.00,
          description: 'Florida is a state in the southeastern United States, often referred to as the Sunshine State.The capital is Tallahassee.Floridas abbreviation is FL, and its trademark is the bald eagle-fisherman.The climate and the large number of sandy beaches have made Florida an attractive holiday destination for visitors from all over the world.And various amusement parks, such as Disneyland, Universal Studios and others near Orlando are a big magnet for many tourists.',
          time: new Date('2022-07-25T17:40'),
          recensents: ['Petar', 'Patricia', 'John', 'Darko', 'Nadja'],
          recensions: ['Wonderful experience', 'Beautiful beach', 'Wonderful', 'Enchanting', 'Too hot'],
          grade: [9, 10, 10, 9, 7],
          status: 'finished',
        },

        {
          id: 22,
          destination: 'Venesia',
          picture_path: '../../assets/images/venecija.png',
          travel_type: 'bus',
          duration: 7,
          distance: 767,
          price: 900.00,
          description: 'Venice is a city, port and famous tourist destination in northeastern Italy, on the Adriatic Sea.Venice is the administrative center of the province of Veneto and the district of the same name in Venice.In the Middle Ages, Venice was the most important city in the world and the largest market town in Europe between its West and East.The city is also known as the long-time capital of the most famous Venetian Republic.',
          time: new Date('2022-08-05T19:00'),
          recensents: ['Persa', 'Milos', 'Jovana', 'Darinka', 'Nada'],
          recensions: ['Like it', 'City ​​on the water', 'Wonderful', 'I do not like', 'Nicely'],
          grade: [9, 10, 10, 9, 7],
          status: 'finished',
        },

        {
          id: 23,
          destination: 'Vienna',
          picture_path: '../../assets/images/bec.png',
          travel_type: 'bus',
          duration: 5,
          distance: 615,
          price: 200.00,
          description: 'Vienna, the imperial city and one of the oldest metropolises in Europe, was the seat of the emperor of the Holy Roman Empire, the capital of the Austrian Empire and the Austro-Hungarian monarchy when it reached its peak at the end of the 19th century.It is a favorite destination of millions of tourists from all over the world, mostly thanks to numerous cultural and historical monuments, palaces and a diverse cultural offer.Vienna is also the music capital of the world where the most famous composers lived and worked: Josef Haydn, Wolfgang Amadeus Mozart, Ludwig van Beethoven, Franz Schubert, Franz Liszt, Johannes Brahms, Johann Strauss.Among the many attractions, a special place is occupied by the Vienna Opera, Schönbrunn Castle, the Hofburg Cathedral. Stefana, Baroque palace Belvedere Albertina, amusement park "Prater", Quarter of the museum, Charles Square, a large number of galleries and museums.',
          time: new Date('2022-05-18T22:20'),
          recensents: ['Tina', 'Jovan', 'Mario', 'Nina', 'Marina'],
          recensions: ['Great.', 'Beautiful city', 'Solid.', 'Nothing special.', 'Fantastic'],
          grade: [7, 10, 5, 2, 9],
          status: 'finished',
        },

        {
          id: 24,
          destination: 'Madrid',
          picture_path: '../../assets/images/madrid.png',
          travel_type: 'plane',
          duration: 10,
          distance: 2500,
          price: 1200.00,
          description: 'Madrid is the capital of the Kingdom of Spain and is located in the heart of the Iberian Peninsula. By traveling to Madrid, you will satisfy the desire to enjoy works of modern architecture and skyscrapers, but also the cultural heritage of ancient times, as evidenced by museums, magnificent buildings, churches, palaces and parks.Traveling to Madrid, you will have the opportunity to visit Toledo.If you decide to travel to Madrid, we recommend going shopping or visiting one of the museums (Museo del Prado, Museo Nacional Centro de Arte Reina Sofía, Museo Thyssen – Bornemisza ...)',
          time: new Date('2022-04-28T15:20'),
          recensents: ['John', 'Smith', 'Marta', 'Nina', 'Bill'],
          recensions: ['Wonderful!', 'Like that.', 'Interesting.', 'Very interesting.', 'Exciting.'],
          grade: [9, 10, 7, 9, 9],
          status: 'finished',
        },
        {
          id: 25,
          destination: 'Jahorina',
          picture_path: '../../assets/images/jahorina.png',
          travel_type: 'bus',
          duration: 7,
          distance: 304,
          price: 500.00,
          description: 'Jahorina belongs to the high mountains of the Dinaric system. Jahorina mountain where you will be greeted by well-prepared ski slopes. These trails and vertical transport are managed by the Jahorina Olympic Center, which will offer you the opportunity to rent adequate ski equipment in our rental shops near the trails.Jahorina is a mountain that boasts a very specific and mild mountain climate, as a result of mixing continental and Mediterranean air. current.Everyone who has ever stayed on Jahorina will tell you that the climatic conditions are significantly different compared to other mountains in the region. ',
          time: new Date('2022-03-05T09:30'),
          recensents: ['Petar', 'Patricia', 'John', 'Darko', 'Nadja'],
          recensions: ['Beautiful mountain', 'Good time.', 'Expensive.', 'Nicely', 'Cold'],
          grade: [10, 9, 9, 8, 6],
          status: 'finished',
        },

        {
          id: 26,
          destination: 'Egipat',
          picture_path: '../../assets/images/egipat.png',
          travel_type: 'plane',
          duration: 10,
          distance: 8900,
          price: 4500.00,
          description: ' It is located in the northeastern part of Africa and part of Asia (Sinai) in the Mediterranean and the Red Sea, between Libya, Israel and the Gaza Strip. An old saying: "Egypt is the gift of the Nile" Hurghada is the pearl of the Egyptian coast, located on the Red Sea, which tourists call the "Seven Colored Sea" for many reasons.Newly built hotels that take your breath away with their beauty, combined with the local way of life give a true picture of Egypt.The Red Sea on which the city is located is a real lure for tourists who are professional and amateur diving.The ideal position of the city offers you the possibility of various excursions.',
          time: new Date('2022-09-15T05:50'),
          recensents: ['Bill', 'Niki', 'Jovana', 'Kristina', 'Robin'],
          recensions: ['I like it.', 'Hell of heat', 'Enchanting pyramids', 'Good', 'Beautiful'],
          grade: [10, 7, 10, 9, 8],
          status: 'finished',
        },
        {
          id: 27,
          destination: 'Brazil',
          picture_path: '../../assets/images/brazil.png',
          travel_type: 'plane',
          duration: 7,
          distance: 9900,
          price: 5000.00,
          description: 'Brazil is officially the Federal Republic of Brazil, a country in South America.It is the largest and most populous country in Latin and South America.Also, Brazil is the largest Portuguese-speaking country in the world. The capital is Brazil and the official language is Portuguese.',
          time: new Date('2022-05-13T21:00'),
          recensents: ['Marko', 'Milica', 'John', 'Dr. Smith', 'Nikolas'],
          recensions: ['Wonderful!', 'Like that.', 'Interesting.', 'Very interesting.', 'Exciting.'],
          grade: [9, 7, 8, 9, 7],
          status: 'canceled',
        },
        {
          id: 28,
          destination: 'Las Vegas',
          picture_path: '../../assets/images/lasvegas.png',
          travel_type: 'plane',
          duration: 10,
          distance: 9960,
          price: 5000.00,
          description: 'The city anchors the Las Vegas Valley metropolitan area and is the largest city within the greater Mojave Desert.As Vegas is an internationally renowned major resort city, known primarily for its gambling, shopping, fine dining, entertainment, and nightlife.The Las Vegas Valley as a whole serves as the leading financial, commercial, and cultural center for Nevada.The city bills itself as The Entertainment Capital of the World, and is famous for its mega casino-hotels and associated activities.We wish you a crazy and unforgettable trip!',
          time: new Date('2022-05-06T04:20'),
          recensents: ['Tina', 'Jovan', 'Mario', 'Nina', 'Marina'],
          recensions: ['Great journey.', 'Great all recommendations!', 'Solid.', 'Nothing special.', 'Fantastic'],
          grade: [7, 10, 5, 2, 9],
          status: 'canceled',
        },

        {
          id: 29,
          destination: 'Barcelona',
          picture_path: '../../assets/images/barselona.png',
          travel_type: 'plane',
          duration: 10,
          distance: 2000,
          price: 1000.00,
          description: 'Barcelona is the capital and largest city of Catalonia and Spains second largest city, with a population of over one and half a million people (over five million in the whole province).Barcelona is the city of the football club FC Barcelona.This city, located directly on the northeastern Mediterranean coast of Spain, has a rich history, having been under Roman, then Frank law before declaring its independence.Barcelona is a big port city.Barcelona is the main Mediterranean port and financial and commercial center, known for its individuality, culture and beauty.',
          time: new Date('2022-04-28T15:20'),
          recensents: ['John', 'Smith', 'Marta', 'Nina', 'Bill'],
          recensions: ['Wonderful!', 'Like that.', 'Interesting.', 'Very interesting.', 'Exciting.'],
          grade: [9, 10, 7, 9, 9],
          status: 'canceled',
        },

        {
          id: 30,
          destination: 'Miami',
          picture_path: '../../assets/images/miami.png',
          travel_type: 'plane',
          duration: 10,
          distance: 8800,
          price: 4000.00,
          description: 'There is no winter in Miami, the temperature does not fall below 20 degrees all year round.Cuban bars and music can be found on every corner.For a complete atmosphere, head to the part of the city of Little Havana.We enjoy a unique blend of Latin and American traditions.We rest on the most beautiful beaches.We drink cocktails in Midtown, the part of town where the best bars are located',
          time: new Date('2022-07-15T13:30'),
          recensents: ['Tijana', 'Zdravko', 'Kris', 'Nadja', 'Mario'],
          recensions: ['Great!', 'Beautiful', 'Like it', 'Good time.', 'Woow.'],
          grade: [9, 10, 7, 9, 10],
          status: 'active',
        },

        {
          id: 31,
          destination: 'Florida',
          picture_path: '../../assets/images/florida.png',
          travel_type: 'plane',
          duration: 7,
          distance: 8900,
          price: 4500.00,
          description: 'Florida is a state in the southeastern United States, often referred to as the Sunshine State.The capital is Tallahassee.Floridas abbreviation is FL, and its trademark is the bald eagle-fisherman.The climate and the large number of sandy beaches have made Florida an attractive holiday destination for visitors from all over the world.And various amusement parks, such as Disneyland, Universal Studios and others near Orlando are a big magnet for many tourists.',
          time: new Date('2022-07-25T17:40'),
          recensents: ['Petar', 'Patricia', 'John', 'Darko', 'Nadja'],
          recensions: ['Wonderful experience', 'Beautiful beach', 'Wonderful', 'Enchanting', 'Too hot'],
          grade: [9, 10, 10, 9, 7],
          status: 'active',
        },

        {
          id: 32,
          destination: 'Venesia',
          picture_path: '../../assets/images/venecija.png',
          travel_type: 'bus',
          duration: 7,
          distance: 767,
          price: 900.00,
          description: 'Venice is a city, port and famous tourist destination in northeastern Italy, on the Adriatic Sea.Venice is the administrative center of the province of Veneto and the district of the same name in Venice.In the Middle Ages, Venice was the most important city in the world and the largest market town in Europe between its West and East.The city is also known as the long-time capital of the most famous Venetian Republic.',
          time: new Date('2022-08-05T19:00'),
          recensents: ['Persa', 'Milos', 'Jovana', 'Darinka', 'Nada'],
          recensions: ['Like it', 'City ​​on the water', 'Wonderful', 'I do not like', 'Nicely'],
          grade: [9, 10, 10, 9, 7],
          status: 'active',
        },

        {
          id: 33,
          destination: 'Vienna',
          picture_path: '../../assets/images/bec.png',
          travel_type: 'bus',
          duration: 5,
          distance: 615,
          price: 200.00,
          description: 'Vienna, the imperial city and one of the oldest metropolises in Europe, was the seat of the emperor of the Holy Roman Empire, the capital of the Austrian Empire and the Austro-Hungarian monarchy when it reached its peak at the end of the 19th century.It is a favorite destination of millions of tourists from all over the world, mostly thanks to numerous cultural and historical monuments, palaces and a diverse cultural offer.Vienna is also the music capital of the world where the most famous composers lived and worked: Josef Haydn, Wolfgang Amadeus Mozart, Ludwig van Beethoven, Franz Schubert, Franz Liszt, Johannes Brahms, Johann Strauss.Among the many attractions, a special place is occupied by the Vienna Opera, Schönbrunn Castle, the Hofburg Cathedral. Stefana, Baroque palace Belvedere Albertina, amusement park "Prater", Quarter of the museum, Charles Square, a large number of galleries and museums.',
          time: new Date('2022-05-18T22:20'),
          recensents: ['Tina', 'Jovan', 'Mario', 'Nina', 'Marina'],
          recensions: ['Great.', 'Beautiful city', 'Solid.', 'Nothing special.', 'Fantastic'],
          grade: [7, 10, 5, 2, 9],
          status: 'finished',
        },

        {
          id: 34,
          destination: 'Madrid',
          picture_path: '../../assets/images/madrid.png',
          travel_type: 'plane',
          duration: 10,
          distance: 2500,
          price: 1200.00,
          description: 'Madrid is the capital of the Kingdom of Spain and is located in the heart of the Iberian Peninsula. By traveling to Madrid, you will satisfy the desire to enjoy works of modern architecture and skyscrapers, but also the cultural heritage of ancient times, as evidenced by museums, magnificent buildings, churches, palaces and parks.Traveling to Madrid, you will have the opportunity to visit Toledo.If you decide to travel to Madrid, we recommend going shopping or visiting one of the museums (Museo del Prado, Museo Nacional Centro de Arte Reina Sofía, Museo Thyssen – Bornemisza ...)',
          time: new Date('2022-04-28T15:20'),
          recensents: ['John', 'Smith', 'Marta', 'Nina', 'Bill'],
          recensions: ['Wonderful!', 'Like that.', 'Interesting.', 'Very interesting.', 'Exciting.'],
          grade: [9, 10, 7, 9, 9],
          status: 'finished',
        }
      ]
    },

    {
      id: 2,
      name: 'Nikola',
      surname: 'Nikolic',
      password: 'sifra987',
      email: 'nikolanikolic345@gmail.com',
      phone_number: '0664584751',
      address: 'Kralja Petra 765',
      favorite_trips: 'Through various travels I met a lot of new people.I like to explore new places.I enjoy the kings of the sea, but the mountain is not such a bad option.',
      isLogedIn: true,
      travel: [
        {
          id: 1,
          destination: 'Vienna',
          picture_path: '../../assets/images/bec.png',
          travel_type: 'bus',
          duration: 5,
          distance: 615,
          price: 200.00,
          description: 'Vienna, the imperial city and one of the oldest metropolises in Europe, was the seat of the emperor of the Holy Roman Empire, the capital of the Austrian Empire and the Austro-Hungarian monarchy when it reached its peak at the end of the 19th century.It is a favorite destination of millions of tourists from all over the world, mostly thanks to numerous cultural and historical monuments, palaces and a diverse cultural offer.Vienna is also the music capital of the world where the most famous composers lived and worked: Josef Haydn, Wolfgang Amadeus Mozart, Ludwig van Beethoven, Franz Schubert, Franz Liszt, Johannes Brahms, Johann Strauss.Among the many attractions, a special place is occupied by the Vienna Opera, Schönbrunn Castle, the Hofburg Cathedral. Stefana, Baroque palace Belvedere Albertina, amusement park "Prater", Quarter of the museum, Charles Square, a large number of galleries and museums.',
          time: new Date('2022-05-18T22:20'),
          recensents: ['Tina', 'Jovan', 'Mario', 'Nina', 'Marina'],
          recensions: ['Great.', 'Beautiful city', 'Solid.', 'Nothing special.', 'Fantastic'],
          grade: [7, 10, 5, 2, 9],
          status: 'active',
        },

        {
          id: 2,
          destination: 'Madrid',
          picture_path: '../../assets/images/madrid.png',
          travel_type: 'plane',
          duration: 10,
          distance: 2500,
          price: 1200.00,
          description: 'Madrid is the capital of the Kingdom of Spain and is located in the heart of the Iberian Peninsula. By traveling to Madrid, you will satisfy the desire to enjoy works of modern architecture and skyscrapers, but also the cultural heritage of ancient times, as evidenced by museums, magnificent buildings, churches, palaces and parks.Traveling to Madrid, you will have the opportunity to visit Toledo.If you decide to travel to Madrid, we recommend going shopping or visiting one of the museums (Museo del Prado, Museo Nacional Centro de Arte Reina Sofía, Museo Thyssen – Bornemisza ...)',
          time: new Date('2022-04-28T15:20'),
          recensents: ['John', 'Smith', 'Marta', 'Nina', 'Bill'],
          recensions: ['Wonderful!', 'Like that.', 'Interesting.', 'Very interesting.', 'Exciting.'],
          grade: [9, 10, 7, 9, 9],
          status: 'active',
        },
        {
          id: 3,
          destination: 'Jahorina',
          picture_path: '../../assets/images/jahorina.png',
          travel_type: 'bus',
          duration: 7,
          distance: 304,
          price: 500.00,
          description: 'Jahorina belongs to the high mountains of the Dinaric system. Jahorina mountain where you will be greeted by well-prepared ski slopes. These trails and vertical transport are managed by the Jahorina Olympic Center, which will offer you the opportunity to rent adequate ski equipment in our rental shops near the trails.Jahorina is a mountain that boasts a very specific and mild mountain climate, as a result of mixing continental and Mediterranean air. current.Everyone who has ever stayed on Jahorina will tell you that the climatic conditions are significantly different compared to other mountains in the region. ',
          time: new Date('2022-03-05T09:30'),
          recensents: ['Petar', 'Patricia', 'John', 'Darko', 'Nadja'],
          recensions: ['Beautiful mountain', 'Good time.', 'Expensive.', 'Nicely', 'Cold'],
          grade: [10, 9, 9, 8, 6],
          status: 'active',
        },

        {
          id: 4,
          destination: 'Egipat',
          picture_path: '../../assets/images/egipat.png',
          travel_type: 'plane',
          duration: 10,
          distance: 8900,
          price: 4500.00,
          description: ' It is located in the northeastern part of Africa and part of Asia (Sinai) in the Mediterranean and the Red Sea, between Libya, Israel and the Gaza Strip. An old saying: "Egypt is the gift of the Nile" Hurghada is the pearl of the Egyptian coast, located on the Red Sea, which tourists call the "Seven Colored Sea" for many reasons.Newly built hotels that take your breath away with their beauty, combined with the local way of life give a true picture of Egypt.The Red Sea on which the city is located is a real lure for tourists who are professional and amateur diving.The ideal position of the city offers you the possibility of various excursions.',
          time: new Date('2022-09-15T05:50'),
          recensents: ['Bill', 'Niki', 'Jovana', 'Kristina', 'Robin'],
          recensions: ['I like it.', 'Hell of heat', 'Enchanting pyramids', 'Good', 'Beautiful'],
          grade: [10, 7, 10, 9, 8],
          status: 'active',
        },
        {
          id: 5,
          destination: 'Brazil',
          picture_path: '../../assets/images/brazil.png',
          travel_type: 'plane',
          duration: 7,
          distance: 9900,
          price: 5000.00,
          description: 'Brazil is officially the Federal Republic of Brazil, a country in South America.It is the largest and most populous country in Latin and South America.Also, Brazil is the largest Portuguese-speaking country in the world. The capital is Brazil and the official language is Portuguese.',
          time: new Date('2022-05-13T21:00'),
          recensents: ['Marko', 'Milica', 'John', 'Dr. Smith', 'Nikolas'],
          recensions: ['Wonderful!', 'Like that.', 'Interesting.', 'Very interesting.', 'Exciting.'],
          grade: [9, 7, 8, 9, 7],
          status: 'active',
        }

      ]
    }
  ];
  constructor() { }

  currentProfile= ProfileServiceService.profiles[0];
  getActiveTravelsFromProfile():Array<TripsModel>{
    var travels: Array<TripsModel>=[];
    this.currentProfile.travel.map((travel: any)=>{
      if(travel.status === 'active'){
        travels.push(travel);
      }
    })
    return travels;
  }
  getCanceledTravelsFromProfile():Array<TripsModel>{
    var travels: Array<TripsModel>=[];
    this.currentProfile.travel.map((travel: any)=>{
      if(travel.status === 'canceled'){
        travels.push(travel);
      }
    })
    return travels;

  }
  getFinishedTravelsFromProfile():Array<TripsModel>{
    var travels: Array<TripsModel>=[];
    this.currentProfile.travel.map((travel: any)=>{
      if(travel.status === 'finished'){
        travels.push(travel);
      }
    })
    return travels;

  }
  getTotalSumOfActiveTravels():number{

    var sum=0;
    this.currentProfile.travel.map((travel: any)=>{
      sum+=travel.price;
    })
    return sum;

  }

  /**Login component function*/
  isUserRegistred(email: string, password: string):any{
    var user:boolean=false;

    ProfileServiceService.profiles.map(profile => {
     
      if(profile.email.toString().includes(email)){
        console.log('Email is ok')
        console.log(email)
        if(profile.password.toString().includes(password)){
          console.log('PassIsOk')
          console.log(password)
          user=true;

        }
      }
    

    });

    return user; 
  }
}