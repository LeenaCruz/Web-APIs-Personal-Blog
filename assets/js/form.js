
const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitButton = document.getElementById('submitButton');
const postsArray = [];

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
        localStorage.setItem('blogPost', JSON.stringify(blogPost));
       console.log(blogPost);
        
     
      postsArray.push(blogPost);
      console.log(postsArray);
      localStorage.setItem('postsArray',JSON.parse('blogPost'));
     
      location.href = "./blog.html"; // Redirect to blogpost pages * check target blank/new window
      
      }

    //  return postsArray;
    });
