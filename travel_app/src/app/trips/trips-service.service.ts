import { Injectable } from '@angular/core';
import { TravelType } from './trips.component';


export interface TripsModel {

  id: number,
  destination: string,
  picture_path: string,
  travel_type: string,
  duration: number,
  distance: number,
  price: number,
  description: string,
  time: Date,
  recensents: Array<string>,
  recensions: Array<string>,
  grade: Array<number>,
  status: string
  
}



@Injectable({
  providedIn: 'root'
})
export class TripsServiceService {
  
  static travels: Array<TripsModel> = [

    {
      id: 1, 
      destination: 'Dubai',
      picture_path: '../../assets/images/dubai.png',
      travel_type: 'plane',
      duration: 10,
      distance: 5105,
      price: 2000.00,
      description: 'Dubai is the strongest and most densely populated city in the United Arab Emirates.A rest period of ten days is quite enough to take a break.You will enjoy a five-stars hotel with beautiful views of the Burj Khalifa. Dubai has many beautiful beaches that you must visit.',
      time: new Date('2022-06-06T01:01'),
      recensents: ['Tina','Jovan','Mario', 'Nina','Marina'],
      recensions: ['Great journey.','Great all recommendations!','Solid.', 'Nothing special.','Fantastic'],
      grade: [7,10,5,2,9],
      status:'active',
      },
      
      {
      id: 2, 
      destination: 'Maldivi',
      picture_path: '../../assets/images/maldivi.png',
      travel_type: 'plane',
      duration: 10,
      distance: 6841,
      price: 1500.00,
      description: 'Maldives or Maldives, officially the Republic of Maldives is an island nation of the Indian Ocean in South Asia.The first associations in the Maldives are glamorous hotels, beautiful, long beaches with white sand and a fascinating underwater world. Sounds like a dream vacation, doesnt it?Every island in the Maldives is a story for itself and has its own charm, its up to you to choose.Sunny mornings are waiting for you, and you are awakened by the sound of waves lapping the white sand one step away from you.The Maldives is synonymous with complete hedonism and enjoying the unreal beauty of nature, beaches and exotics that captivate at the first contact with this country.',
      time: new Date('2022-06-07T09:20'),
      recensents: ['Darija','Slavica','Bill', 'John','Bojan'],
      recensions: ['Great!','Beautiful beaches.','Wonderful.', 'Enjoyment.','Congratulations.'],
      grade: [9,10,7,8,9],
      status:'active',
      },
      
      {
      id: 3, 
      destination: 'Tajland',
      picture_path: '../../assets/images/tajland.png',
      travel_type: 'plane',
      duration: 15,
      distance: 8150,
      price: 3000.00,
      description: 'Thailand is a country of exoticism and contrast, located in Southeast Asia.Over the dense jungles of the north, the vast shores of the south, the Andaman Sea and the Gulf of Thailand, it offers complete content for an unforgettable vacation.The majesty of Thailand, its capital Bangkok is ideal for exploring and getting to know Thai culture, life, architecture, customs.Numerous temples and cultural centers promote Thai culture and religion.Bangkok proudly preserves and shows off their splendor and wealth.',
      time: new Date('2022-08-18T05:25'),
      recensents: ['Marko','Milica','John', 'Dr. Smith','Nikolas'],
      recensions: ['Wonderful!','Like that.','Interesting.', 'Very interesting.','Exciting.'],
      grade: [10,3,7,10,8],
      status:'active',
      },
      
      {
      id: 4, 
      destination: 'New York',
      picture_path: '../../assets/images/newyork.png',
      travel_type: 'plane',
      duration: 7,
      distance: 7260,
      price: 2500.00,
      description: 'New York, often called New York City (NYC) to distinguish it from the state of New York, is the most populous city in the United States.Situated on one of the worldss largest natural harbors.New York City is composed of five boroughs, each of which is coextensive with a respective county of the state of New York.',
      time: new Date('2022-04-20T21:20'),
      recensents: ['Petar','Patricia','John', 'Darko','Nadja'],
      recensions: ['Beautiful city!','Good time.','Expensive.', 'Like that.','I do not like.'],
      grade: [10,8,2,5,1],
      status:'active',
      },
      
      {
      id: 5, 
      destination: 'Paris',
      picture_path: '../../assets/images/paris.png',
      travel_type: 'plane',
      duration: 5,
      distance: 1700,
      price: 700.00,
      description: 'Paris, the cosmopolitan capital of France.Paris has the well-deserved reputation of being the most beautiful and romantic of all cities, brimming with historic associations.A large part of the city, including the River Seine, is a UNESCO World Heritage SiteYou should definitely visit the Triumphal Arch and the Eiffel Tower. ',
      time:new Date( '2022-03-15T23:00'),
      recensents: ['Bill','Niki','Jovana', 'Kristina','Robin'],
      recensions: ['Good.','Horror.','Nicely.', 'Like it','Time did not serve us otherwise interesting.'],
      grade: [7,2,5,6,1],
      status:'active',
      },
      
      {
      id: 6, 
      destination: 'Thassos',
      picture_path: '../../assets/images/thasos.png',
      travel_type: 'bus',
      duration: 10,
      distance: 831,
      price: 1500.00,
      description: 'Thassos is a Greek island located in the northern Aegean, northeastern part of Greece.Thasoss economy relies on timber (it is rich in forests), marble quarries, olive oil and honey.Tourism has also become important since the 1960s, although not to the level of other Greek islands.It is the northernmost major Greek island.You will be delighted by the most beautiful beaches that the island offers. Real enjoyment.',
      time:new Date( '2022-06-21T06:00'),
      recensents: ['Tina','Jovan','Mario', 'Nina','Marina'],
      recensions: ['Enjoyment.','Congratulations.','Great!','Beautiful beaches.','Wonderful.'],
      grade: [10, 9, 10, 8, 9],
      status:'active',
      },
      
      {
      id: 7, 
      destination: 'Lefkada',
      picture_path: '../../assets/images/lefkada.png',
      travel_type: 'bus',
      duration: 7,
      distance: 1000,
      price: 2000.00,
      description: 'The island of Lefkada does not cease to delight visitors with its exotic blue colors, so today it is rightly called the "Caribbean of Greece".This is a perfect place for families, couples and large groups of friends, because there is something for everyone.The beaches on the west coast of Lefkada are characterized by beautiful color and impressive landscape, especially Porto Katsiki, Egremni and Kathisma.Around the island, tourists can find great villages with ponds by the sea, surrounded by lush greenery.Nidri, Vasiliki, Sivota and Agios Nikitas are beautiful places, each with its own special character.',
      time:new Date( '2022-07-15T07:00'),
      recensents: ['Tina','Jovan','Mario', 'Nina','Marina'],
      recensions: ['Far', 'Beautiful','Expensive', 'Beautiful beaches', 'An interesting journey'],
      grade: [5, 9, 10, 8, 7],
      status:'active',
      },
      
      {
      id: 8, 
      destination: 'Sveti Stefan',
      picture_path: '../../assets/images/svetistefan.png',
      travel_type: 'bus',
      duration: 10,
      distance: 530,
      price: 1500.00,
      description: 'Sveti Stefan is a village not far from Budva.Today, St. Stephen is connected to the mainland by a narrow land.This island is the most luxurious resort in Montenegro and one of the most luxurious resorts on the Adriatic Sea.The whole island is now one of Ammans hotels.It is ten km away from Budva.',
      time:new Date( '2022-08-15T15:00'),
      recensents: ['Darija','Slavica','Bill', 'John','Bojan'],
      recensions: ['Great!', 'Beautiful','Like it', 'Good time.', 'Solid.'],
      grade: [9, 9, 10, 8, 4],
      status:'active',
      },
      
      {
      id: 9, 
      destination: 'Zlatibor',
      picture_path: '../../assets/images/zlatibor.png',
      travel_type: 'bus',
      duration: 5,
      distance: 230,
      price: 100.00,
      description: 'We present you all the options that are an important part of the tourist offer of Zlatibor.One of the options will allow you to find the perfect accommodation.The second is to find out which space is the best for tasting famous Zlatibor specialties.While the third is intended to present the most important attractions on the mountain.In addition to these, there are other guidelines at your disposal that will help you experience a number of quality moments on Zlatibor and organize a perfect stay.',
      time:new Date( '2022-04-19T12:00'),
      recensents: ['Tijana','Zdravko','Kris', 'Nadja','Mario'],
      recensions: ['Nicely', 'Disaster.','Too populated.', 'Expensive.', 'Good time.'],
      grade: [7, 6, 5, 3, 8],
      status:'active',
      },
      
      {
      id: 10, 
      destination: 'Kopaonik',
      picture_path: '../../assets/images/kopaonik.png',
      travel_type: 'bus',
      duration: 5,
      distance: 280,
      price: 150.00,
      description: 'Are you planning a winter or summer vacation?Kopaonik is the right choice regardless of the time of year.Find quality accommodation units, choose restaurants with the most varied menu, discover which are the most attractive mountain facilities.Choose the options that best fit the image of your ideal vacation.Prepare for the trip in the best way and provide yourself and your companions with the perfect mountain experience.',
      time:new Date( '2022-04-11T11:15'),
      recensents: ['Bill','Niki','Jovana', 'Kristina','Robin'],
      recensions: ['Good time.', 'Expensive.','Nicely', 'Beautiful mountain', 'Good.'],
      grade: [7, 1, 9, 10, 6],
      status:'active',
      },
      
      {
      id: 11, 
      destination: 'Istanbul',
      picture_path: '../../assets/images/istanbul.png',
      travel_type: 'train',
      duration: 7,
      distance: 950,
      price: 800.00,
      description: 'Istanbul is the only city that spreads over two continents. Istanbul has three parts: the old European (Istanbul), the new European (Galat), which separates the Golden Horn Bay, and the Asian, which is located on the other side of the Bosphorus Bay.Hagia Sophia and the Blue Mosque stand out, which are located in the old part of the city.Hagia Sophia was built during the reign of the Byzantine Emperor Justinian in 537, as a Christian temple.Later, the Turks turned it into a mosque and today it is a museum.',
      time:new Date( '2022-05-05T05:40'),
      recensents: ['Bill','Niki','Jovana', 'Kristina','Robin'],
      recensions: ['Beautiful city!','Nicely', 'Solid.', 'Good.','Nice Bosfor.'],
      grade: [8, 7, 5, 9, 8],
      status:'active',
      },
      
      {
      id: 12, 
      destination: 'Ohrid',
      picture_path: '../../assets/images/ohrid.png',
      travel_type: 'train',
      duration: 5,
      distance: 615,
      price: 400.00,
      description: 'Ohrid is a magnificent city in the beautiful southwestern part of Macedonia and the leading summer tourist center of the country, which they say is the soul of the Balkans and certainly the cradle of Slavic literacy.The city of Ohrid is located on the shores of Lake Ohrid, about 170 km from Skopje, the capital of Macedonia.Thanks to its extraordinary natural beauty, rich historical and cultural heritage, Ohrid has been a part of the UNESCO World Cultural Heritage. Lake Ohrid occupies a picturesque area of ​​about 350 km2 and is known for its crystal clear water, which is transparent to a depth of 22 meters.While the total depth of Lake Ohrid is 286 meters.',
      time:new Date( '2022-06-05T14:40'),
      recensents: ['Bill','Niki','Jovana', 'Kristina','Robin'],
      recensions: ['Beautiful lake!','Wonderful.', 'Solid.', 'Good.','I do not like.'],
      grade: [9, 10, 5, 6, 3],
      status:'active',
      },
      
      {
      id: 13, 
      destination: 'Novi Sad',
      picture_path: '../../assets/images/novisad.png',
      travel_type: 'train',
      duration: 5,
      distance: 100,
      price: 150.00,
      description: 'Novi Sad is the largest city in the Autonomous Province of Vojvodina and its administrative center.After Belgrade the second city in Serbia in terms of population and area.Novi Sad has been the center of Serbian culture for a long time, which is why it is often called Serbian Athens.Today, Novi Sad is a major industrial and financial center of the Serbian economy, a university city and school center, cultural, scientific.',
      time:new Date( '2022-03-05T12:30'),
      recensents: ['Bill','Niki','Jovana', 'Kristina','Robin'],
      recensions: ['Solid.','Nothing special.', 'Solid.', 'Good.','I do not like.'],
      grade: [2, 1, 4, 7, 5],
      status:'active',
      },
      
      {
      id: 14, 
      destination: 'Ethno village',
      picture_path: '../../assets/images/stanisici.png',
      travel_type: 'train',
      duration: 5,
      distance: 120,
      price: 250.00,
      description: 'Here the eyes and the soul rest, man becomes nobler, but also wiser, listening to the chirping of birds, the murmur of streams and the work of mills.Ethno Village Stanišići is a village with about twenty authentic wooden houses, a dairy, a mill, a smithy, a granary, old housesThe right space for family, business and tourist visits.Enjoy a unique ambience built in a traditional style.',
      time:new Date( '2022-05-20T08:30'),
      recensents: ['Marko','Milica','John', 'Dr. Smith','Nikolas'],
      recensions: ['Wonderful!','Like that.','Interesting.', 'Very interesting.','Exciting.'],
      grade: [9, 7, 8, 9, 7],
      status:'active',
      },
      
      {
      id: 15, 
      destination: 'Sorrento Italy',
      picture_path: '../../assets/images/sorentoitalija.png',
      travel_type: 'train',
      duration: 7,
      distance: 1500,
      price: 1700.00,
      description: 'Sorrento is located in the southern part of Italy.The city is located on the eponymous Serotin peninsula.Above the city rises Mount Lataro.And from the city itself there is a view of Naples and Mount Vesuvius.The island of Capri is also nearby.',
      time:new Date( '2022-08-07T06:30'),
      recensents: ['Darija','Slavica','Bill', 'John','Bojan'],
      recensions: ['Great!','Beautiful beaches.','Wonderful.', 'Enjoyment.','Congratulations.'],
      grade: [9, 10, 9,8, 7],
      status:'active',
      },
      
      {id: 16, 
      destination: 'Las Vegas',
      picture_path: '../../assets/images/lasvegas.png',
      travel_type: 'plane',
      duration: 10,
      distance: 9960,
      price: 5000.00,
      description: 'The city anchors the Las Vegas Valley metropolitan area and is the largest city within the greater Mojave Desert.As Vegas is an internationally renowned major resort city, known primarily for its gambling, shopping, fine dining, entertainment, and nightlife. The Las Vegas Valley as a whole serves as the leading financial, commercial, and cultural center for Nevada.The city bills itself as The Entertainment Capital of the World, and is famous for its mega casino-hotels and associated activities.We wish you a crazy and unforgettable trip!',
      time: new Date('2022-05-06T04:20'),
      recensents: ['Tina','Jovan','Mario', 'Nina','Marina'],
      recensions: ['Great journey.','Great all recommendations!','Solid.', 'Nothing special.','Fantastic'],
      grade: [7,10,5,2,9],
      status:'active',
      },
    
      {id: 17, 
      destination: 'Barcelona',
      picture_path: '../../assets/images/barselona.png',
      travel_type: 'plane',
      duration: 10,
      distance: 2000,
      price: 1000.00,
      description: 'Barcelona is the capital and largest city of Catalonia and Spains second largest city, with a population of over one and half a million people (over five million in the whole province).Barcelona is the city of the football club FC Barcelona.This city, located directly on the northeastern Mediterranean coast of Spain, has a rich history, having been under Roman, then Frank law before declaring its independence.Barcelona is a big port city.Barcelona is the main Mediterranean port and financial and commercial center, known for its individuality, culture and beauty.',
      time: new Date('2022-04-28T15:20'),
      recensents: ['John','Smith','Marta', 'Nina','Bill'],
      recensions: ['Wonderful!','Like that.','Interesting.', 'Very interesting.','Exciting.'],
      grade: [9,10,7,9,9],
      status:'active',
      },
    
      {id: 18, 
      destination: 'Miami',
      picture_path: '../../assets/images/miami.png',
      travel_type: 'plane',
      duration: 10,
      distance: 8800,
      price: 4000.00,
      description: 'There is no winter in Miami, the temperature does not fall below 20 degrees all year round.Cuban bars and music can be found on every corner.For a complete atmosphere, head to the part of the city of Little Havana.We enjoy a unique blend of Latin and American traditions.We rest on the most beautiful beaches.We drink cocktails in Midtown, the part of town where the best bars are located',
      time: new Date('2022-07-15T13:30'),
      recensents: ['Tijana','Zdravko','Kris', 'Nadja','Mario'],
      recensions: ['Great!', 'Beautiful','Like it', 'Good time.', 'Woow.'],
      grade: [9,10,7,9,10],
      status:'active',
      },
    
      {id: 19, 
      destination: 'Florida',
      picture_path: '../../assets/images/florida.png',
      travel_type: 'plane',
      duration: 7,
      distance: 8900,
      price: 4500.00,
      description: 'Florida is a state in the southeastern United States, often referred to as the Sunshine State.The capital is Tallahassee.Floridas abbreviation is FL, and its trademark is the bald eagle-fisherman.The climate and the large number of sandy beaches have made Florida an attractive holiday destination for visitors from all over the world.And various amusement parks, such as Disneyland, Universal Studios and others near Orlando are a big magnet for many tourists.',
      time: new Date('2022-07-25T17:40'),
      recensents: ['Petar','Patricia','John', 'Darko','Nadja'],
      recensions: ['Wonderful experience', 'Beautiful beach','Wonderful', 'Enchanting', 'Too hot'],
      grade: [9,10,10,9,7],
      status:'active',
      },
      
      {id: 20, 
      destination: 'Venesia',
      picture_path: '../../assets/images/venecija.png',
      travel_type: 'bus',
      duration: 7,
      distance: 767,
      price: 900.00,
      description: 'Venice is a city, port and famous tourist destination in northeastern Italy, on the Adriatic Sea.Venice is the administrative center of the province of Veneto and the district of the same name in Venice.In the Middle Ages, Venice was the most important city in the world and the largest market town in Europe between its West and East.The city is also known as the long-time capital of the most famous Venetian Republic.',
      time: new Date('2022-08-05T19:00'),
      recensents: ['Persa','Milos','Jovana', 'Darinka','Nada'],
      recensions: ['Like it', 'City ​​on the water','Wonderful', 'I do not like', 'Nicely'],
      grade: [9,10,10,9,7],
      status:'active',
      },
    
      {id: 21, 
      destination: 'Vienna',
      picture_path: '../../assets/images/bec.png',
      travel_type: 'bus',
      duration: 5,
      distance: 615,
      price: 200.00,
      description: 'Vienna, the imperial city and one of the oldest metropolises in Europe, was the seat of the emperor of the Holy Roman Empire, the capital of the Austrian Empire and the Austro-Hungarian monarchy when it reached its peak at the end of the 19th century.It is a favorite destination of millions of tourists from all over the world, mostly thanks to numerous cultural and historical monuments, palaces and a diverse cultural offer.Vienna is also the music capital of the world where the most famous composers lived and worked: Josef Haydn, Wolfgang Amadeus Mozart, Ludwig van Beethoven, Franz Schubert, Franz Liszt, Johannes Brahms, Johann Strauss.Among the many attractions, a special place is occupied by the Vienna Opera, Schönbrunn Castle, the Hofburg Cathedral. Stefana, Baroque palace Belvedere Albertina, amusement park "Prater", Quarter of the museum, Charles Square, a large number of galleries and museums.',
      time: new Date('2022-05-18T22:20'),
      recensents: ['Tina','Jovan','Mario', 'Nina','Marina'],
      recensions: ['Great.','Beautiful city','Solid.', 'Nothing special.','Fantastic'],
      grade: [7,10,5,2,9],
      status:'active',
      },
      
      {id: 22, 
      destination: 'Madrid',
      picture_path: '../../assets/images/madrid.png',
      travel_type: 'plane',
      duration: 10,
      distance: 2500,
      price: 1200.00,
      description: 'Madrid is the capital of the Kingdom of Spain and is located in the heart of the Iberian Peninsula. By traveling to Madrid, you will satisfy the desire to enjoy works of modern architecture and skyscrapers, but also the cultural heritage of ancient times, as evidenced by museums, magnificent buildings, churches, palaces and parks.Traveling to Madrid, you will have the opportunity to visit Toledo.If you decide to travel to Madrid, we recommend going shopping or visiting one of the museums (Museo del Prado, Museo Nacional Centro de Arte Reina Sofía, Museo Thyssen – Bornemisza ...)',
      time: new Date('2022-04-28T15:20'),
      recensents: ['John','Smith','Marta', 'Nina','Bill'],
      recensions: ['Wonderful!','Like that.','Interesting.', 'Very interesting.','Exciting.'],
      grade: [9,10,7,9,9],
      status:'active',
      },
      
      {id: 23, 
      destination: 'Jahorina',
      picture_path: '../../assets/images/jahorina.png',
      travel_type: 'bus',
      duration: 7,
      distance: 304,
      price: 500.00,
      description: 'Jahorina belongs to the high mountains of the Dinaric system. Jahorina mountain where you will be greeted by well-prepared ski slopes. These trails and vertical transport are managed by the Jahorina Olympic Center, which will offer you the opportunity to rent adequate ski equipment in our rental shops near the trails.Jahorina is a mountain that boasts a very specific and mild mountain climate, as a result of mixing continental and Mediterranean air. current.Everyone who has ever stayed on Jahorina will tell you that the climatic conditions are significantly different compared to other mountains in the region. ',
      time: new Date('2022-03-05T09:30'),
      recensents: ['Petar','Patricia','John', 'Darko','Nadja'],
      recensions: ['Beautiful mountain', 'Good time.', 'Expensive.','Nicely', 'Cold'],
      grade: [10,9,9,8,6],
      status:'active',
      },
      
      {id: 24, 
      destination: 'Egipat',
      picture_path: '../../assets/images/egipat.png',
      travel_type: 'plane',
      duration: 10,
      distance: 8900,
      price: 4500.00,
      description: ' It is located in the northeastern part of Africa and part of Asia (Sinai) in the Mediterranean and the Red Sea, between Libya, Israel and the Gaza Strip. An old saying: "Egypt is the gift of the Nile" Hurghada is the pearl of the Egyptian coast, located on the Red Sea, which tourists call the "Seven Colored Sea" for many reasons.Newly built hotels that take your breath away with their beauty, combined with the local way of life give a true picture of Egypt.The Red Sea on which the city is located is a real lure for tourists who are professional and amateur diving.The ideal position of the city offers you the possibility of various excursions.',
      time: new Date('2022-09-15T05:50'),
      recensents: ['Bill','Niki','Jovana', 'Kristina','Robin'],
      recensions: ['I like it.', 'Hell of heat', 'Enchanting pyramids', 'Good', 'Beautiful'],
      grade: [10,7,10,9,8],
      status:'active',
      },
      
      {id: 25, 
      destination: 'Brazil',
      picture_path: '../../assets/images/brazil.png',
      travel_type: 'plane',
      duration: 7,
      distance: 9900,
      price: 5000.00,
      description: 'Brazil is officially the Federal Republic of Brazil, a country in South America.It is the largest and most populous country in Latin and South America.Also, Brazil is the largest Portuguese-speaking country in the world. The capital is Brazil and the official language is Portuguese.',
      time: new Date('2022-05-13T21:00'),
      recensents: ['Marko','Milica','John', 'Dr. Smith','Nikolas'],
      recensions: ['Wonderful!','Like that.','Interesting.', 'Very interesting.','Exciting.'],
      grade: [9, 7, 8, 9, 7],
      status:'active',
      }

  ];
  
  constructor() { }
  

  getTravels(): Array<TripsModel>{
    var trips: Array<TripsModel> = [];
   
    TripsServiceService.travels.forEach((travel:TripsModel) => {
      trips.push(travel)
    });
    return trips;
  }

  /** Vraca objekat TripsModel prema id-u -> koristio sam u : 1) Trips/AddtoCard/Matdialog*/
  getCurrentTravelObject(id: number): TripsModel{

    var currentTravel: any;
    currentTravel = TripsServiceService.travels.find((travel:any) => {

      if(travel.id === id){
        return travel;
      }

    });
    return currentTravel;
  }

  /** Vraca objekte koji se matchuju prema kriterijumu pretrage iz Fast filtera -> Fast filter , I filters*/
  getTravelsByParametar(parametar: any):Array<TripsModel>{
    
    var fastFilteredTrips: Array<TripsModel> = [];

    TripsServiceService.travels.map((travel:TripsModel) => {

      if(travel.destination.toString().toLowerCase().includes(parametar)){
        fastFilteredTrips.push(travel);
      }else if(travel.distance.toString().toLowerCase() === parametar){
        fastFilteredTrips.push(travel);
      }else if(travel.duration.toString().toLowerCase() === parametar){
        fastFilteredTrips.push(travel);
      }else if(travel.grade.toString().toLowerCase() === parametar){
        fastFilteredTrips.push(travel);
      }else if(travel.price.toString().toLowerCase() === parametar){
        fastFilteredTrips.push(travel);
      }else if(travel.status === parametar){
        fastFilteredTrips.push(travel);
      }else if(travel.time.toString().toLowerCase() === parametar){
        fastFilteredTrips.push(travel);
      }
      
    });
    console.log(fastFilteredTrips);
    return fastFilteredTrips;
  }

  getTravelsByParametars(date: any, destination: string, price: any, travel_type: string):Array<TripsModel>{
    
    var fastFilteredTrips: Array<TripsModel> = [];

    TripsServiceService.travels.map((travel:TripsModel) => {

      if(travel.time.toString().toLowerCase().includes(date)){
        if(travel.destination.toString().toLowerCase().includes(destination)){
          if(travel.destination.toString().toLowerCase().includes(price)){
            
            if(travel.destination.toString().toLowerCase().includes(travel_type)){
              fastFilteredTrips.push(travel);
            }
          }
        }
      }
      
    });
    console.log(fastFilteredTrips);
    return fastFilteredTrips;
  }

  currentTravel=TripsServiceService.travels[0];

}
