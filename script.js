const modal = document.getElementById('modal');
const openButton = document.querySelector('.open-button');
const submitButton = modal.querySelector('#submit-button');
const cardContainer = document.querySelector('.card-container');
const bookCount = document.querySelector('.book-count');
const bookRead = document.querySelector('.book-read');


let myLibrary = [];
let newBook;

class Book {
    constructor (title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    bookInfo = () => {
        return `Title: ${this.title} <br> 
                Author: ${this.author} <br>
                Pages: ${this.pages} <br> 
                Read: ${this.read} <br>`;
    }
}

const getBookFromInput = () => {
    const title = document.getElementById('book-title').value
    const author = document.getElementById('book-author').value
    const pages = document.getElementById('book-pages').value
    const status = document.getElementById('status').value
    newBook = new Book(title, author, pages, status)
    if (title !== '' && author !== '' && pages !== '' && status !== ''){
        return newBook;
    }
  }


function addBookToLibrary(){
    myLibrary.push(getBookFromInput());
    return myLibrary;
}

function displayBook(){
    let cardDiv = document.createElement('div');
    let removeButton = document.createElement('button');
    let formDiv = document.createElement('div');
    cardDiv.classList.add('card');
    removeButton.innerText = 'Delete';
    removeButton.classList.add('delete-button');
    removeButton.addEventListener('click', () => {
        for (i = 0; i < myLibrary.length; i++){
            if (formDiv.getAttribute('id') === myLibrary[i].title){
                myLibrary.splice(myLibrary.indexOf(myLibrary[i]), 1);
            }
        }
        console.log(myLibrary);
        cardContainer.removeChild(cardDiv);
    });
    let books = addBookToLibrary();
    for (i = 0; i <= books.length-1; i++){
        formDiv.innerHTML = books[i].bookInfo();
        formDiv.setAttribute('id', books[i].title);
        cardDiv.appendChild(formDiv);
        cardDiv.appendChild(removeButton);
        cardContainer.appendChild(cardDiv);
    }
}

function displayModal(){
    modal.showModal();
}

openButton.addEventListener('click', displayModal);

submitButton.addEventListener('click', displayBook);