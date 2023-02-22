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
    shwbook();
}

function shwbook(){
        bookcont.innerHTML = "";
        myLibrary.forEach(book =>{
            let bookbtn = document.createElement("button");
            let bookDelbtn = document.createElement("button");
            let bookcard = document.createElement("div");
            let bookcardh = document.createElement("h1");
            let bookcarddesc = document.createElement("p");

            bookDelbtn.innerHTML="Delete";

            bookbtn.innerHTML=`${book.read}`;
            bookbtn.classList.add("nnewbook","yesno");
            bookcard.classList.add("card");
            bookcard.dataset.index = myLibrary.indexOf(book);
            bookcardh.innerText=`${book.title}`;
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
            bookcard.appendChild(bookDelbtn);
    })
}

function delbook(e){
    let i  = e.target.parentNode.dataset.index;
    myLibrary.splice(i,1);
    shwbook();
}
function chngread(e){
    let i = e.target.parentNode.dataset.index;
    let Selbook = myLibrary.at(i)
    Selbook.read === "read" ? Selbook.read = "not read" :Selbook.read="read"
    shwbook();
    
}
function handleinput(e){
    if (e.target.innerHTML === "read" || e.target.innerHTML === "not read"){
        chngread(e);
    }else if(e.target.innerHTML === "Delete"){
        delbook(e);
    }else{

    }
}

addBookToLibrary("The Albion","DR.T",300,"read");
addBookToLibrary("The maxi","DR.N",300,"read");

bookcont.addEventListener("click",handleinput);