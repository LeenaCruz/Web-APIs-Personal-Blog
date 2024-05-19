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

    do while 
    // Check if all the fields have info
    // if (
    //      usernameInput.value === " "; &&
    //      titleInput.valu === " "; &&
    //      contentInput.value === " ";

    // ) {


    // alert("Please fill all ther form fields");
    //    break;

    // }
    // else {


        const blogPost = {
            username: usernameInput.value,
            title: titleInput.value,
            content: contentInput.value,
        };


        localStorage.setItem('blogPost', JSON.stringify(blogPost));

        console.log(blogPost);
        // Redirect to blogpost pages * check target blank/new window
        location.href = "https://leenacruz.com/";

       // }

    });

