let myLibrary = [];
const bookcont = document.getElementById("bookcont");
const modal = document.querySelector("#modal");
const closemodalbtn = document.querySelector("[data-close-button]");
const ovlay = document.querySelector("#overlay");
const nbookbtn = document.querySelector("[data-newbook-btn]");
const bookget = document.querySelector("#submit-nbook");

class Book{
constructor(title,author,pages,read)
    {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    }
}
class Library{
    constructor(){
    this.books = []
    }

    shwbook(){
        if(this.books.length > 0){
            bookcont.innerHTML = "";
            this.books.forEach(book =>{
                let bookbtn = document.createElement("button");
                let bookDelbtn = document.createElement("button");
                let bookcard = document.createElement("div");
                let bookcardh = document.createElement("h1");
                let bookcarddesc = document.createElement("p");
    
                bookDelbtn.innerHTML="Delete";
    
                bookbtn.innerHTML=`${book.read}`;
                bookbtn.classList.add("nnewbook","yesno");
                bookcard.classList.add("card");
                bookcard.dataset.index = this.books.indexOf(book);
                bookcardh.textContent=`${book.title}`;
                bookcarddesc.innerText=`${book.author} \n ${book.pages}`;
                bookDelbtn.classList.add("nnewbook");
    
                if(book.read === "Read"){
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
        }else{
            shwmodal();
        }
    }
    addBookToLibrary(newbook) {
        this.books.push(newbook)
        this.shwbook()
    }
    getbook = (event) =>{
        event.preventDefault();
        let title = document.querySelector("#bookt").value;
        let author  = document.querySelector("#booka").value;
        let pages = document.querySelector("#bookp").value;
        let read = document.querySelector("#bookr").value;
    
        if([title,author,pages,read].some(el=>el === "")){
            alert("Please complete the form");
        }else{
    
        modal.classList.remove("active");
        ovlay.classList.remove("active");
        let newbook = new Book(title,author,pages,read);
        this.addBookToLibrary(newbook);
        }
        
    }
    delbook = (e) =>{
        let i  = e.target.parentNode.dataset.index;
        this.books.splice(i,1);
        this.shwbook();
        console.log(this.books)
    }
    chngread = (e) =>{
        let i = e.target.parentNode.dataset.index;
        let Selbook = this.books.at(i)
        Selbook.read === "Read" ? Selbook.read = "Not Read" :Selbook.read="Read"
        this.shwbook();
        
    }

}

const MyLib = new Library();

console.log(MyLib.books)




handleinput = (e) =>{
    if (e.target.innerHTML === "Read" || e.target.innerHTML === "Not Read"){
        MyLib.chngread(e);
    }else if(e.target.innerHTML === "Delete"){
        MyLib.delbook(e);
    }else{}
}
shwmodal = () =>{
    document.querySelector("form").reset();
    bookcont.innerHTML = "";
    modal.classList.add("active");
    ovlay.classList.add("active");
}

closemodalbtn.addEventListener('click', ()=>{
    modal.classList.remove("active");
    ovlay.classList.remove("active");
    MyLib.shwbook();
})

/*DUMMY DATA*/
let newbook1 = new Book("Rich Dad Poor Dad","Robert Kiyosaki","70","Read")
MyLib.addBookToLibrary(newbook1)
let newbook2 = new Book("Accounting For Dummies","Michael Taillard","707","Not Read")
MyLib.addBookToLibrary(newbook2)
let newbook3 = new Book("Influence, New and Expanded: The Psychology of Persuasion","Robert B. Cialdini","608","Not Read")
MyLib.addBookToLibrary(newbook3)
/*--------------------*/

nbookbtn.addEventListener('click',shwmodal)
bookcont.addEventListener("click",handleinput);
bookget.addEventListener('click',MyLib.getbook)
