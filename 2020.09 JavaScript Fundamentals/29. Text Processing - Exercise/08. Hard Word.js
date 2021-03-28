function hardWord(input = []) {
    let text = input.shift().split(' ');
    input = input.shift();

    for (let i = 0; i < text.length; i++) {
        let word = text[i];

        if (word[0] === '_') {
            let length = word.length;
            let lastChar = word[length - 1];
            let isNeeded = false;
            if (lastChar !== '_') {
                length -= 1;
                isNeeded = true;
            }
            text.splice(i, 1, input.filter(x => x.length === length).join(''));
            if (isNeeded) {
                text[i] += lastChar;
            }
        }
    }
    console.log(text.join(' '));
}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
         ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);
// Hi, grandma! I'm so glad to write to you. During the winter vacation, so amazing things happened. My dad bought me a sled. Mom started a new job as a pharmacist. My brother's ankle is sprained, and now it bothers me even more. Every night Mom cooks pie on your recipe because it is the most delicious. I hope this year Santa will bring me a robot.