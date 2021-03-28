import { e } from './dom.js';

export function getComments(post) {
    let dynamicDiv = document.getElementById("dynamicDiv");

    dynamicDiv.innerHTML = "";

    const topicContent = e('div', { class: 'topic-content'} );
    dynamicDiv.appendChild(topicContent);

    const postDiv = e('div', { class: 'theme-title' });

    postDiv.innerHTML = `
        <div class="theme-name-wrapper">
            <div class="theme-name">
                <h2>${post.title}</h2>
                <p>Date: <time>${post.timestamp}</time></p>
            </div>
            <div class="subscribers">
                <p>Subscribers: <span>${getRandomNum(1, 200)}</span></p>
                <!-- <button class="subscribe">Subscribe</button>
                <button class="unsubscribe">Unsubscribe</button> -->
            </div>
        </div>`;

    topicContent.appendChild(postDiv);

    //create comments container then fill it with comments
    let commentsContainerDiv = e('div', {});
    topicContent.appendChild(commentsContainerDiv);

    renderComments();

    let submitCommentDiv = e('div', { class: 'answer-comment' });

    submitCommentDiv.innerHTML = `
        <p><span>${post.author}</span> comment:</p>
        <div class="answer">
            <form>
                <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                <div>
                    <label for="username">Username <span class="red">*</span></label>
                    <input type="text" name="username" id="username">
                </div>
                <button>Post</button>
            </form>
        </div>`;

    topicContent.appendChild(submitCommentDiv);

    let postCommentBtn = submitCommentDiv.querySelector('button');
    let postCommentForm = submitCommentDiv.querySelector('form');

    postCommentBtn.addEventListener("click", (e) => {
        e.preventDefault();

        let commentData = new FormData(postCommentForm);
        postComment(commentData);
    });

    async function postComment(comment) {
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let currTimestamp = date + ' ' + time;

        let content = comment.get("postText");
        let author = comment.get("username");

        let newComment = {
            author,
            currTimestamp,
            content,
            postId: post._id
        }

        if (author.length === 0 || content.length === 0) {
            return alert("Both fields are mandatory!");
        }

        postCommentForm.reset();

        try {
            const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newComment)
            });

            const comments = await response.json();

            renderComments(comments);

        } catch(error) {
            console.log(error.message);
            throw new Error(error.message);
        }
    }

    async function renderComments() {
        // get all comments
        try {
            const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
                method: 'GET',
                redirect: 'follow'
            });

            const result = await response.json();

            filterComments(result);

        } catch(error) {
            console.log(error.message);
            throw new Error(error.message);
        }
    }

    function getRandomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function filterComments(data) {
        commentsContainerDiv.innerHTML = "";

        const comments = Object.values(data);

        let relevant = comments.filter(c => c.postId === post._id);

        relevant.forEach(c => {
            let commentDiv = e('div', { class: 'comment' });

            commentDiv.innerHTML = `
                <header class="header">
                    <p><span>${c.author}</span> posted on <time>${c.currTimestamp}</time></p>
                </header>
                <div class="comment-main">
                    <div class="userdetails">
                        <img src="./static/profile.png" alt="avatar">
                    </div>
                    <div class="post-content">
                        <p>${c.content}</p>
                    </div>
                </div>
                <div class="footer">
                    <p><span>${getRandomNum(1, 100)}</span> likes</p>
                </div>`;

            commentsContainerDiv.appendChild(commentDiv);
        });
    }
}