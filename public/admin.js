
// Your Code Here
// let response = await fetch('/updateBook', {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         'id': 3,
//         'title': 'The Legends of Arathrae'
//     }),    
// });
// let updatedBook = await response.json();
// console.log(updatedBook)

const { response } = require("express");

async function post() {

let list = await fetch ('/listBooks', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
});

let bookList = await list.json();
bookList.array.forEach(element => {
    let linebreak  = document.createElement('div')
    // div.innerHTML = 
    document.body.appendChild(div)
});
}

post()


// TODO:
// retrieve books
// display books
//     input field per book with a save button per

// input accepts number input, updates quantity info via PATCH


// pseudo code:
// listBooks, forEach function to create input fields/Submit buttons

// input fields are PATCH

