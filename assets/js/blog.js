// Create blog post divs elements
// append blog post cards to pgae 
// retrieve object from localStorage
// Populat cards
// Populate  Footer portfolio info
const body = document.body;
const footerEl = document.querySelector('footer');
//const blogPosts = document.querySelector('blogPosts');
const blogPosts = document.getElementById('blogPosts');
const backButton = document.querySelector('button');

backButton.addEventListener('click', function (event) {
    event.preventDefault();
    // let mode = localStorage.getItem('currentMode');
    location.href = "./index.html";
    // console.log(mode);
});

function init() {
    const postsArray = JSON.parse(localStorage.getItem('postsArray')) || [];

    //const allPosts = localStorage.getItem('postsArray');
    // console.log(allPosts);
    console.log(postsArray);

    for (let index = postsArray.length - 1; index >= 0; index--) {

        const cardEl = document.createElement('div');
        const titleEl = document.createElement('h2');
        const contentEl = document.createElement('p');
        const authorEl = document.createElement('p');

        titleEl.textContent = postsArray[index].title;
        contentEl.textContent = postsArray[index].content;
        authorEl.textContent = postsArray[index].username;

        cardEl.appendChild(titleEl);
        cardEl.appendChild(contentEl);
        cardEl.appendChild(authorEl);
        blogPosts.appendChild(cardEl);

        cardEl.setAttribute('class', 'card')
        // titleEl.setAttribute('class', 'title')
        contentEl.setAttribute('class', 'content')

    }
}


init();








//Retrieve from Local Storage
// postsArray.push(blogObject);

//  console.log(postsArray);


//  const blogObject = JSON.parse(localStorage.getItem('blogPost'));
//  postsArray.push(blogObject);
// console.log(postsArray);


// function init () {
// //localStorage.getItem(postsArray);
// // const blogObject = JSON.parse(localStorage.getItem('blogPost'));
// // postsArray.push(blogObject);

//const newBlogPost = localStorage.getItem(postsArray);
// postsArray.push(newBlogPost);
// localStorage.setItem('postsArray', JSON.stringify(postsArray));
// console.log(postsArray);
// }
// init();

// submitButton.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const blogObject = JSON.parse(localStorage.getItem('blogPost'));
//     postsArray.push(blogObject);

// }
// )








// Footer  h2 Made with love by Leena
//  Portfolio: Blog: Email:
// Crear objecto datosFooter, crear footer element, crear h2, append.