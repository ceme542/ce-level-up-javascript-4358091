class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }
  
  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

// Write your code here
/* Technical Book
  Edition
  getEdition
    The current version of this book is
*/

class TechnicalBook extends Book {
  #edition;
  constructor(title, author, ISBN, numCopies, edition) {
    super(title, author, ISBN, numCopies);
    // this.title = title;
    // this.author = author;
    // this.ISBN = ISBN;
    // this.numCopies = numCopies;
    this.#edition = edition;
  }

  getEdition() {
    return `The current version of this book is ${this.#edition}`;
  }

  get edition() {
    return this.getEdition();
  }
}

tbook = new TechnicalBook("Organic Chemistry", "Hal White", "fpejwp", 3, "v.2023");
console.log(tbook)
console.log(tbook.edition)