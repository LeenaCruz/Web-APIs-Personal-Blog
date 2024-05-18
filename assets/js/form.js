//Define form submit 
// localStorage
//Prevent Default if needed
// link to blog posts

// Declare variables and define elementsof the form.
//const FormEl = document.
// use queryselector or getElementById?
//const username = document.getElementById('username');

const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitButton = document.getElementById('submitButton');


submitButton.addEventListener('click', function (event) {
event.preventDefault();


const blogPost = {
    username: username.value,
    title: titleInput.value,
    content: contentInput.value,
};

localStorage.setItem('blogPost', JSON.stringify(blogPost));

//console.log(blogPost);
// Redirect to blogpost pages
location.href = "https://leenacruz.com/";

});

