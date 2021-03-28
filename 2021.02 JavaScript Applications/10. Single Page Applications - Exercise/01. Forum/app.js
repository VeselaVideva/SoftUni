import { submitPost, visualisePost }    from "./post.js";
import { getComments }                  from "./comment.js";

function attachEvents() {
    const homeLink = document.getElementById('homeLink');
    const dynamicDiv = document.getElementById("dynamicDiv");
    const homePage = document.getElementById('homePage'); // get home page container

    homeLink.addEventListener("click", showHome);

    function showHome() {
        dynamicDiv.innerHTML = "";
        dynamicDiv.appendChild(homePage); // append to dynamicDiv
    }

    showHome(); // show home page container on first load

    const resetBtn = document.getElementById('reset');
    const postBtn = document.getElementById('post');

    const topicForm = document.getElementById("postTopicForm");
    //const topicsContainer = document.getElementById("topicsContainer");

    resetBtn.addEventListener("click", (e) => {
        e.preventDefault();
        reset();
    });

    postBtn.addEventListener("click", (e) => {
        e.preventDefault();

        let postData = new FormData(topicForm);
        submitPost(postData);
        reset();
    });

    function reset() {
        document.getElementById("topicName").value = '';
        document.getElementById("username").value = '';
        document.getElementById("postText").value = '';
    }

}

attachEvents();