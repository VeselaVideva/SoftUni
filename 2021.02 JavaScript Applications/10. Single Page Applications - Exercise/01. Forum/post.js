import { e }            from './dom.js';
import { getComments }  from './comment.js';

export async function submitPost(postData) {
    let title = postData.get("topicName");
    let author = postData.get("username");
    let content = postData.get("postText");

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let timestamp = date + ' ' + time;

    if (title.length === 0 || author.length === 0 || content.length === 0) {
        return alert("All fields are mandatory!");
    }

    let postObj = {
        title,
        author,
        content,
        timestamp
    }

    try {
        const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postObj)
        });

        const post = await response.json();

        visualisePost(post);

    } catch(error) {
        console.log(error.message);
        throw new Error(error.message);
    }
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export function visualisePost(post) {
    const newTopicDiv = e('div', { class: 'topic-container', id: `${post._id}` })

    const topicWrapper = e('div', { class: 'topic-name-wrapper' } );
    newTopicDiv.appendChild(topicWrapper);

    const topicName = e('div', { class: 'topic-name' });
    topicWrapper.appendChild(topicName);

    const aTitle = e('a', { class: 'normal', href: '#' });
    topicName.appendChild(aTitle);

    const titleH2 = e('h2', {}, `${post.title}`)
    aTitle.appendChild(titleH2);

    const columns = e('div', { class: 'columns' });
    topicName.appendChild(columns);

    const simpleDiv = e('div', {});
    columns.appendChild(simpleDiv);

    const p = e('p', {}, `Date: `);
    simpleDiv.appendChild(p);

    const dateP = e('span', {}, `${post.timestamp}`);
    p.appendChild(dateP);

    const nickName = e('div', { class: 'nick-name' });
    simpleDiv.appendChild(nickName);

    const usernameP = e('p', {}, `Username: `);
    nickName.appendChild(usernameP);

    const spanAuthor = e('span', {}, `${post.author}`);
    usernameP.appendChild(spanAuthor);

    const subscribers = e('div', { class: 'subscribers' });
    columns.appendChild(subscribers);

    const subP = e('p', {}, `Subscribers: `);
    subscribers.appendChild(subP);

    const spanSubs = e('span', {}, `${getRandomNum(1, 200)}`);
    subP.appendChild(spanSubs);

    // event listener on the post title
    const directToComments = newTopicDiv.querySelector('a');

    directToComments.addEventListener("click", (e) => {
        e.preventDefault();
        getComments(post);
    });

    document.getElementById("topicsContainer").appendChild(newTopicDiv);
}