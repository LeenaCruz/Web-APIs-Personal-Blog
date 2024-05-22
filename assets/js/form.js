
const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitButton = document.getElementById('submitButton');


submitButton.addEventListener('click', function (event) {
    event.preventDefault();
 
   if (usernameInput.value === "" ||
    titleInput.value === "" ||
    contentInput.value === ""
    ) {
   alert("Please fill all the form fields");
   } else {
        const blogPost = {
            username: usernameInput.value,
            title: titleInput.value,
            content: contentInput.value,
        };

        
        const postsArray =JSON.parse(localStorage.getItem('postsArray'))|| [] ;
        postsArray.push(blogPost);


      localStorage.setItem('postsArray', JSON.stringify(postsArray));
      
        
      console.log(postsArray);
     
      location.href = "./blog.html"; // Redirect to blogpost pages * check target blank/new window
      
      }


    });
