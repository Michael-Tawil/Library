let myLibrary = [];
const bookcont = document.getElementById("bookcont");
const modal = document.querySelector("#modal");
const closemodalbtn = document.querySelector("[data-close-button]");
const ovlay = document.querySelector("#overlay");
const nbookbtn = document.querySelector("[data-newbook-btn]");
const bookget = document.querySelector("#submit-nbook");

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
    if(myLibrary.length > 0){
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
        shwmodal()
    }
}
function getbook (event){
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
    addBookToLibrary(title,author,pages,read);
    }
}
function delbook(e){
    let i  = e.target.parentNode.dataset.index;
    myLibrary.splice(i,1);
    shwbook();
}
function chngread(e){
    let i = e.target.parentNode.dataset.index;
    let Selbook = myLibrary.at(i)
    Selbook.read === "Read" ? Selbook.read = "Not Read" :Selbook.read="Read"
    shwbook();
    
}
function handleinput(e){
    if (e.target.innerHTML === "Read" || e.target.innerHTML === "Not Read"){
        chngread(e);
    }else if(e.target.innerHTML === "Delete"){
        delbook(e);
    }else{}
}
function shwmodal(){
    document.querySelector("form").reset();
    bookcont.innerHTML = "";
    modal.classList.add("active");
    ovlay.classList.add("active");
}

closemodalbtn.addEventListener('click', ()=>{
    modal.classList.remove("active");
    ovlay.classList.remove("active");
    shwbook();
})

/*DUMMY DATA*/
addBookToLibrary("Rich Dad Poor Dad","Robert Kiyosaki","70","Read")
addBookToLibrary("Accounting For Dummies","Michael Taillard","707","Not Read")
addBookToLibrary("Influence, New and Expanded: The Psychology of Persuasion","Robert B. Cialdini","608","Not Read")
/*--------------------*/

nbookbtn.addEventListener('click',shwmodal)
bookcont.addEventListener("click",handleinput);
bookget.addEventListener('click',getbook)
