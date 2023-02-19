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
        bookbtn.innerHTML=`${book.read}`;
        bookbtn.classList.add("nnewbook","yesno");
        let bookcard = document.createElement("div");
        bookcard.classList.add("card");
        let bookcardh = document.createElement("h1");
        bookcardh.innerText=`${book.title}`;
        let bookcarddesc = document.createElement("p");
        bookcarddesc.innerText=`${book.author} \n ${book.pages}`;

        if(book.read === "read"){
            bookbtn.style.background = "#50C878";
        }
        else{
            bookbtn.style.background = "#ED2939";
        }

        bookcont.appendChild(bookcard);
        bookcard.appendChild(bookcardh);
        bookcard.appendChild(bookcarddesc);
        bookcard.appendChild(bookbtn);
    })
}


theh1ob = addBookToLibrary("The Albion","DR.T",300,"read");
theh2ob = addBookToLibrary("The Art ","JOHN David",500,"not read");
theho3b = addBookToLibrary("The Knowing and the Unknown","Steve Jobson",355,"not read");
theho4b = addBookToLibrary("The Little Big","LIL Iceicle",670,"read");

shwbook();
console.log(myLibrary);