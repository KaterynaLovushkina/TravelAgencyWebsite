
import norway_1 from "./model_img/norvay/norway-1.webp"
import scandinavia_1 from "./model_img/scandinavia/scandinavia-1.webp"
import scotland_1 from "./model_img/scotland/scotland-1.webp"


const Trips = [
    {
        id: 1,
        nameTrip: "NORWAY FJORDS AND NORTHEN LIGHTS",
        typeTrip: "Hiking & Trekking",
        countries: ["Norway"],
        cities: ["Oslo","Tromso","Honningsvag", "Kirkenes"],
        days_number: 8,
        first_info: "The one that sets sail for the awe-inspiring Aurora Borealis",
        description: "Experience Arctic adventures in a beautiful country steeped in rich culture. " +
            "Expect fresh air, fairytale forests, fresh seafood, jaw-dropping fjords and enough natural beauty to take your breath away. " +
            "Fly north from the chilled Norwegian capital all the way to the Arctic Circle to discover ancient Sami culture and adrenaline-rich activities." +
            " Then set sail aboard a Norwegian cruise and marvel as you float gently past mountains, valleys, glaciers and dramatic coastal landscapes in " +
            "search of the Northern Lights. What could be more magical?",
        accommodation:  ["4 nights in Hotels", "2 nights in Overnight Cruise"],
        meals: ["7 Breakfasts,", "1 Dinners"],
        transport: ["Flight" ,"Cruise"],
        rating: 4.2,
        price: 2285,
        available_days: { "12.11.2022" : "20.11.2022",  "10.12.2022" :"18.12.2022"},
        trip_start: "Oslo",
        trip_end: "Oslo",
        photos: [norway_1]


    },
    {
        id: 2,
        nameTrip: "HOLIDAY IN SCANDINAVIA",
        typeTrip: "Hiking & Trekking",
        countries: ["Norway","Dennmark"],
        cities: ["Copenhagen", "Oslo", "Voss", "Geiranger", "Lillehammer", "Stockholm"],
        days_number: 12,
        first_info: "The one that goes in-depth in stunning Scandinavia in under 2 weeks",
        description: "From colourful Copenhagen to sophisticated Stockholm, this trip gives you 12 days of pure " +
            "Scandinavian magic. Expect fresh air, fairytale forests, fresh seafood, hot saunas, " +
            "jaw-dropping fjords and enough natural beauty and cultural heritage to take your breath away." +
            " Get the pulse racing in Voss, gawp at the Geiranger Fjord and meet some Alaskan Huskies in " +
            "Dalarna - and that's just for starters.",
        accommodation: ["10 nights in Hostels"," 1 night in Special Stay"],
        meals:  ["11 Breakfasts,", "4 Dinners"],
        transport: ["Coach"],
        rating: 4.7,
        price: 2199,
        available_days: { "16.05.2023" : "28.05.2023",  "30.05.23" :"11.06.2022","13.06.2023" : "25.06.2023" , "27.06.2023" : "09.07.2023"},
        trip_start: "Copenhagen",
        trip_end: "Stockholm",
        photos: [scandinavia_1]

    },
    {
        id: 3,
        nameTrip: "SCOTLAND DREAM WEEK",
        typeTrip: "Hiking & Trekking",
        countries: ["Scotland"],
        cities: ["Edinburgh", "Glasgow", "West Highlands"],
        days_number: 6,
        first_info: "The one that keeps your spirits high in The Highlands, with all things quintessentially Scottish",
        description:  " Not afraid of frocking up in a kilt and jumping on the bagpipes? Perhaps you've got " +
            "some Scottish blood! And lucky you if you do. Home to mystical castles, glorious highlands and enough " +
            "whisky to booze the Loch Ness Monster, you'll be head over heels with all things Scottish by the time " +
            "your week of adventure here is up.",
        accommodation: ["5 nights in Hotels"],
        meals: ["5 Breakfasts,", "1 Dinners"],
        transport: ["Coach"],
        rating: 4.7,
        price: 1305,
        available_days: { "24.10.2022" : "30.10.2022",  "21.11.2022" :"30.11.2022"},
        trip_start: "Edinburgh",
        trip_end: "Glasgow",
        photos: [scotland_1]
    },
    {
        id: 4,
        nameTrip: "CROATIA ISLAND SAIL",
        typeTrip: "Cruise",
        countries: ["Croatia"],
        cities: ["Split", "Hvar", "Korčula","Dubrovnik", "Trstenik", " Makarska"],
        days_number: 8,
        first_info: "The one that sees you cruise the Dalmatian Coast & discover Hvar, Split and Dubrovnik aboard a sail boat",
        description:  " Sparkling seas, white sands, historical hotspots, Croatia is the Mediterranean jewel" +
            " that has it all. And there's no better way to experience this paradise" +
            " than by island hopping your way from beach to beautiful bay. From the ancient" +
            " hamlets of Hvar island and the Venetian architecture of Korcula to Dubrovnik’s iconic Old Town, " +
            "we'll cruise along the Adriatic on our very own traditional sail boat, soaking up all those rays while" +
            " we drift lazily under the cloudless skies. Bliss.",
        accommodation: ["5 nights in Hotels"],
        meals: ["7 Breakfasts,","5 Lunches", "2 Dinners"],
        transport: ["Cruise"],
        rating: 4.1,
        price: 1659,
        available_days: { "20.05.2023" : "29.05.2023",  "27.05.2023" : "04.06.2023", "31.05.2023" : "08.06.2023" , "07.06.2023" : "14.06.2023", "10.06.2023" : "17.06.2023"},
        trip_start: "Split",
        trip_end: "Split",
        photos: [scotland_1]
    },
    {
        id: 5,
        nameTrip: "GREEK ISLAND HOPPING",
        typeTrip: "Explorer",
        countries: ["Greek"],
        cities: ["Athens", "Mykonos", "Paros", "Santorini", "Ios"],
        days_number: 11,
        first_info: "The one that gives you the ultimate Greek Island experience exploring Mykonos, Paros, Santorini and Ios",
        description:  "You'll be living your best Greek island life on this sun, sea & culture-rich trip in Mykonos," +
            " Paros, Santorini, Ios & Athens. Stopping in at each of Greece's most popular islands, the perfect" +
            " spot for buzzing party nights and lazy sun-soaked days, you'll have plenty of time to explore " +
            "charming villages, local shops, volcanoes, natural coves & sun-soaked beaches, with plenty of" +
            " time for sunbathing, swimming & nightlife as well as a bit of ancient history in between.",
        accommodation: ["8 nights in Hotels", "2 nights in Hostel"],
        meals: ["10 Breakfasts,", "4 Dinners"],
        transport: ["Ferry"],
        rating: 4.7,
        price: 2455,
        available_days: { "14.05.2023" : "25.05.2023",  "16.05.2023" : "27.05.2023", "18.05.2023" : "29.05.2023" , "03.06.2023" : "14.06.2023"},
        trip_start: "Athens",
        trip_end: "Athens",
        photos: [scotland_1]
    },
    {
        id: 6,
        nameTrip: "DELHI TO KATHMANDU QUEST",
        typeTrip: "Explorer",
        countries: ["India", "Nepal"],
        cities: ["Delhi", "Agra", "Lucknow","Varanasi", "Kathmandu"],
        days_number: 10,
        first_info: "The one that takes you to India & Nepal’s most spiritual locations, plus the Taj Mahal & wildlife parks",
        description:  "This trip takes you from the colourful chaos of Delhi to Nepal's bustling capital, but it's what" +
            " you'll see and do along the way that will stick in the memory the most. You'll witness the Taj Mahal, " +
            "meet elephants at a rescue centre, explore the mystical bazaars of Lucknow, watch a sunrise light up" +
            " the sacred sites of Varanasi and spot Bengal tigers and one-horned rhinos in Chitwan National " +
            "Park before you even get to Kathmandu. Packed with adventure, spirituality, natural beauty and " +
            "delicious food, this trip showcases the very best of India & Nepal.",
        accommodation: ["9 nights in Hotels"],
        meals: ["9 Breakfasts,","2 Lunches", "2 Dinners"],
        transport: ["Coach","Flight"],
        rating: 4.0,
        price: 2012,
        available_days: { "18.11.2022" : "28.11.2022",  "16.12.2022" :"26.12.2022"},
        trip_start: "Delhi",
        trip_end: "Glasgow",
        photos: [scotland_1]
    },
    {
        id: 7,
        nameTrip: "CAIRNS EXPLORER",
        typeTrip: "Explorer",
        countries: ["Australia"],
        cities: ["Cairns"],
        days_number: 4,
        first_info: "The one that explores the tropical haven of Cairns and takes you to the Great Barrier Reef",
        description:  "Always said you'd visit the Great Barrier Reef 'one day'? Well we think that day has arrived. " +
            "This 4 day adventure brings you the home of this wonder of the natural world, Cairns, the rainforest" +
            " city that's unlike anywhere else in the world. You'll get to take a catamaran out to the reef for all of the" +
            " snorkelling or diving your heart desires, but that's not all there is to this trip. Along the way you'll get to explore" +
            " the Daintree Rainforest and meet the local Aboriginal people," +
            " eat delicious local food in handpicked restaurants and even try your hand at bungy jumping or skydiving.",
        accommodation: ["3 nights in Hotels"],
        meals: ["3 Breakfasts,","1 Lunch", "1 Dinners"],
        transport: ["Coach"],
        rating: 3.5,
        price: 1235,
        available_days: { "01.11.2022" : "05.11.2022"},
        trip_start: "Cairns",
        trip_end: "Cairns",
        photos: [scotland_1]
    },
    {
        id: 8,
        nameTrip: "AMSTERDAM FOR CHRISTMAS",
        typeTrip: "Christmas Holiday",
        countries: ["Belgium", "UK", "Netherlands"],
        cities: ["Amsterdam", "Dover", "Calais" ],
        days_number: 4,
        first_info: "The one that shows you the magic of Christmas in Europe, complete with frozen canals",
        description:  "Canals lit by fairy-lights and a sparkly town square are sure to make you feel warm " +
            "and fuzzy inside. This is just the start of Christmas in Amsterdam. Make tracks out of " +
            "London and enjoy the festivities and winter wonderland that is a traditional European Christmas",
        accommodation: ["3 nights in Hotels"],
        meals: ["3 Breakfasts,","1 Lunch", "1 Dinners"],
        transport: ["Coach"],
        rating: 3.7,
        price: 935,
        available_days: { "30.11.2022" : "03.12.2022"},
        trip_start: "London",
        trip_end: "London",
        photos: [scotland_1]
    }
]
export default  Trips;