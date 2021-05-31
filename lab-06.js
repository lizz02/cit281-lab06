class Book {
    constructor(title, author, pubDate, isbn) {
      this.title = title;
      this.author = author;
      this.pubDate = pubDate;
      this.isbn = isbn;
    }
  }
  

class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }
    get count() {
      return this._books.length;
    }
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "", isbn = "" } = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate, isbn};
        this._books.push(newBook);
      }
    }
    listBooks() {
      for (const book of this._books) {
        const {title, author, pubDate, isbn} = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, isbn: ${isbn}`)
      }
    }
    deleteBook(isbn){
        let indexToRemove = null;
        
        for (let index = 0; index < this._books.length; index++) {
            const books = this._books[index];
            
            if(books.isbn == isbn){
                console.log(index)
                this._books.splice(index, 1);
                
            }
        }
        

    }

  }

  let library = new Library("Knight Library");

   // Create a book
const book2 = new Book("Bridge to the Turnabout", "Dahlia Hawthorne", "2/7/2019");
const book3 = new Book("Rise From the Ashes", "Lana Skye", "1/12/2016");
const book4 = new Book("DL-6", "Misty Fey", "12/28/2001");
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

// Create books
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "0735211299");
const theHillWeClimb = new Book("The Hill We Climb", "David Baldacci", "03/30/2021", "059346527X");


// Add books to library and output library count and books
library.addBook(atomicHabits);
library.addBook(theHillWeClimb);
console.log(`Book count: ${library.count}`);
library.listBooks();

// Delete a book and output library books
console.log("* Library after delete *");
library.deleteBook("059346527X");
library.listBooks();

