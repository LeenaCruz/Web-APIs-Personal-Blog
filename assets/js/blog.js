// Create blog post divs elements
// append blog post cards to pgae 
// retrieve object from localStorage
// Populat cards
// Populate  Footer portfolio info
const footerEl = document.querySelector('footer');
const blogPosts = document.querySelector('blockPosts');
const backButton = document.querySelector('button');





const postsArray = JSON.parse(localStorage.getItem('postsArray')) || [];

//const allPosts = localStorage.getItem('postsArray');

// console.log(allPosts);
console.log(postsArray);

backButton.addEventListener('click', function (event){
    event.preventDefault();
    location.href = "./index.html";
});



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