// Write your code here
// Movie object
// 5 
  // Title
  // Director
  // Genre
  // Release Year
  // Rating
// Movie prototype should have function
  // which logs the following overview for each film
  // "<movie>, a <genre> film directed by <director>
  // was released in <releaseYear>. It received a rating
  // of <rating>."
// Use either class or function syntax

class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }
  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`
  }
}


const movie = new Movie("Best Movie", "Best Director", "Horror", 
    2020, "5/5");
console.log(movie);
console.log(movie.getOverview());
