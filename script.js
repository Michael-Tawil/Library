let myLibrary = [];
bookcont = document.getElementById("bookcont");

function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info =function info(){
        return this.title + " By " + this.author + " is "+this.pages+" pages "+this.read;
    }
}

function addBookToLibrary(title,author,pages,read) {
    myLibrary.push(new Book(title,author,pages,read))

}

function shwbook(){
    myLibrary.forEach(book =>{
        let bookbtn = document.createElement("button");
        bookbtn.innerHTML="Read";
        bookbtn.classList.add("nnewbook");
        let bookcard = document.createElement("div");
        bookcard.classList.add("card");
        bookcard.innerHTML = `${book.title}`;
        bookcont.appendChild(bookcard);
        bookcard.appendChild(bookbtn);
    })
}

thehob = addBookToLibrary("The Albion","jjr",30," not read");
thehob = addBookToLibrary("The Art ","jjr",30," not read");
thehob = addBookToLibrary("The Knowing and the Unknown","jjr",30," not read");
thehob = addBookToLibrary("The Little Big","jjr",30," not read");

shwbook();
console.log(myLibrary);