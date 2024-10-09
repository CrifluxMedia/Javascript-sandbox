const nums = [7, 8, 2, 4];
// complex data structure
//[object, ]
const movies = [
  { id: 1, title: "Die Hard", director: "Bruce Willis", rating: 3.4 },
  { id: 2, title: "Mission Impossible", director: "Tom Cruise", rating: 4.5 },
  { id: 3, title: "Little miss forest", director: "John Doe", rating: 4.1 },
];

//
movies.map((movie) => {
  console.log(movie.title.toUpperCase(), movie.rating);
});
//4.0 and above
const topRatedMovies = movies.filter((movie) => {
  return movie.rating >= 4;
});

console.log(topRatedMovies);

// miss
const searchedMovies = movies.filter((movie) => movie.title.includes("miss"));
console.log(searchedMovies);
//MISS -> miss '      MISS     '
const searchMovies = (searchTerm) => {
  const converted = searchTerm.trim().toLowerCase();
  const moviesSearched = movies.filter((movie) =>
    movie.title.toLowerCase().includes(converted)
  );
   return moviesSearched;
};
console.log(searchMovies('miss'));


// get movies directed by tom cruise
const moviesByTom = movies.filter((movie) => movie.director.toLowerCase() === 'Tom cruise'.toLowerCase());
console.log(moviesByTom);


// get the movie that has an id of 3

const movieWithId3 = movies.find ((movie) => movie.id === 3 );
console.log(movieWithId3);

//get movies that are rated less than 4
const lessRatedMovies = movies.filter((movie) => movie.rating <4);

const events = [
  {
    id: 1,
    title: "Movie In the Park",
    category: "Party",
    date: "Aug 6th, 2024",
    price: 0,
    location: "Lagos",
  },
  {
    id: 2,
    title: "Burna Live In Concert",
    category: "Party",
    date: "Dec 23rd, 2024",
    price: 25000,
    location: "Lagos",
  },
  {
    id: 3,
    title: "Read With Kuku",
    category: "Education",
    date: "Sept 6th, 2024",
    price: 5000,
    location: "Online",
  },
  {
    id: 4,
    title: "Japa on a Budget",
    category: "Education",
    date: "Nov 6th, 2024",
    price: 10000,
    location: "Abuja",
  },
  {
    id: 5,
    title: "Mainland Block Party",
    category: "Party",
    date: "Dec 6th, 2024",
    price: 12000,
    location: "Lagos",
  },
];
//get the total number of event
console.log(events.length);

//get event happening in Lagos
const eventHappeningInLagos = events.filter((event) => event.location === 'Lagos');
console.log(eventHappeningInLagos);

const eventOf15kOrLess = events.filter((event) => event.price <= '15000');
console.log(eventOf15kOrLess);
//get parties
const eventParty = events.filter((event) => event.category === 'Party');
console.log(eventParty);


//Local compare compare strings together
//arrange the events alphabetically using their title a to z
const arranged = events.sort((a,b) => a.title.localeCompare(b.title));
console.log(arranged);

//get a random event from the events list

const RandomEvent = Math.trunc(Math.random() * events.length);
console.log(RandomEvent);
