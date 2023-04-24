//Book club
// define a BookClub object
function BookClub(name, description, books, members) {
    this.name = name;
    this.description = description;
    this.books = books;
    this.members = members;
  }
  
  // function to create a new book club
  function createBookClub(name, description, books, members) {
    let newClub = new BookClub(name, description, books, members);
    return newClub;
  }
  
  // example usage
  let members = ["Jane", "John", "Bob"];
  let books = ["To Kill a Mockingbird", "1984", "Pride and Prejudice"];
  let myBookClub = createBookClub("Classic Literature Club", "A club for lovers of classic literature", books, members);
  console.log(myBookClub);
  
  //Book recommendations
  // define an array of recommended books
  let recommendedBooks = [];
  
  // function to generate book recommendations based on user's library
  function generateRecommendations(library) {
    // loop through library and add books to recommendedBooks array based on certain criteria
    for (let i = 0; i < library.length; i++) {
      let book = library[i];
      if (book.genre === "Classic" && book.pageCount < 500 && book.read === false) {
        recommendedBooks.push(book.title);
      }
    }
    return recommendedBooks;
  }
  
  // example usage
  let recommendations = generateRecommendations(library);
  console.log(recommendations);
  
  
  //Personalized library.
  // define an array to store the user's library
  let library = [];
  
  // function to add a book to the library
  function addBookToLibrary(title, author, genre, pageCount, read) {
    let book = {
      title: title,
      author: author,
      genre: genre,
      pageCount: pageCount,
      read: read
    };
    library.push(book);
  }
  
  // example usage
  addBookToLibrary("To Kill a Mockingbird", "Harper Lee", "Classic", 281, true);
  addBookToLibrary("1984", "George Orwell", "Dystopian", 328, false);