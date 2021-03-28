class Story { // 100/100
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }

        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }

    like(username) {
        const currentUser = this._likes.find(user => user === username);

        if (currentUser) {
            throw new Error(`You can't like the same story twice!`);
        }

        if (username === this.creator) {
            throw new Error(`You can't like your own story!`);
        }

        this._likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        const current = this._likes.find(c => c === username);

        if (!current) {
            throw new Error(`You can't dislike this story`);
        }

        let index = this._likes.indexOf(username);

        this._likes.splice(index, 1);

        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        const currentComment = this._comments.find(c => c.id === id);

        if (!id || !currentComment) {
            this._comments.push({ id: this._comments.length + 1, username, content, replies: [] });

            return `${username} commented on ${this.title}`;
        } else {
            let replyId = `${id}.${currentComment.replies.length + 1}`;

            currentComment.replies.push({ id: replyId, username, content });

            return `You replied successfully`;
        }
    }

    toString(sortingType) {
        let sorting = {
            'asc': (a, b) => a.id - b.id,
            'desc': (a, b) => b.id - a.id,
            'username': (a, b) => a.username.localeCompare(b.username)
        }

        let result = [`Title: ${this.title}`, `Creator: ${this.creator}`, `Likes: ${this._likes.length}`, `Comments:`];

        this._comments.sort(sorting[sortingType]).forEach(c => {
            result.push(`-- ${c.id}. ${c.username}: ${c.content}`);

            c.replies.sort(sorting[sortingType]).forEach(r => {
                result.push(`--- ${r.id}. ${r.username}: ${r.content}`);
            })
        });

        return result.join('\n');
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
// John likes this story!
// My Story has 0 likes
// Ammy commented on My Story
// You replied successfully
//
// Title: My Story
// Creator: Anny
// Likes: 0
// Comments:
// -- 2. Ammy: New Content
// -- 3. Jessy: Nice :)
// -- 1. Sammy: Some Content
// --- 1.2. SAmmy: Reply@
// --- 1.1. Zane: Reply
console.log();
art.like("Zane");
console.log(art.toString('desc'));
// Title: My Story
// Creator: Anny
// Likes: 1
// Comments:
// -- 3. Jessy: Nice :)
// -- 2. Ammy: New Content
// -- 1. Sammy: Some Content
// --- 1.2. SAmmy: Reply@
// --- 1.1. Zane: Reply
