// Write your code here
// create Book class
// attributes
  // Title
  // Author
  // ISBN
  // numCopies
// getAvailability() <-- getter function
  // "out of stock" if 0 copies
  // "low stock" if < 10 copies
  // else "in stock"
// sell(numSold) 1 default
// restock(numCopies) 5 default
// use JavaScript's class keyword

class Book {
  #numCopies;
  title;
  ISBN;
  author;
  DEFAULT_RESTOCK_NUM_COPIES = 5;
  DEFAULT_SELL_NUM_COPIES = 1;

  constructor(title, author, ISBN, numCopies) {
    if (numCopies) {
      this.#numCopies = numCopies
    } else {
      this.#numCopies = this.DEFAULT_RESTOCK_NUM_COPIES = 5;
    }
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
  }

  get numCopies() { 
    return this.#numCopies
  }

  get availability() {
    return this.getAvailability()
  }

  // method
  getAvailability() {
    if (this.#numCopies <=0) {
      return "out of stock";
    } else if (this.#numCopies >= 10) {
      return "in stock"
    } else {
      return "low stock"
    }
  }
  restock(numCopies = this.DEFAULT_RESTOCK_NUM_COPIES) {
      this.#numCopies += numCopies;
  }
  sell(numCopies = this.DEFAULT_SELL_NUM_COPIES) {
    this.#numCopies -= numCopies;
  }
  logBookInfo() {
    console.log(`${this.title} has ${this.numCopies} numCopies: ${this.availability}`)
  }
}
const book = new Book("A book", "The Author", "12324555", 6);
book.logBookInfo()
// console.log(`${book.title} has ${book.numCopies} numCopies`);
const book1 = new Book("B book", "The Next Author", "882324555"); 
book1.logBookInfo()
// console.log(`${book1.title} has ${book1.numCopies} numCopies`);
book.sell();
book.logBookInfo()
book1.sell();
book1.logBookInfo()

book.restock();
book.logBookInfo();
book1.sell(4);
book1.logBookInfo();

book1.restock(3);
book1.logBookInfo();