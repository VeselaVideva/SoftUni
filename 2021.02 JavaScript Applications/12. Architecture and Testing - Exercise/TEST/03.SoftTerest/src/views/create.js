import { createIdea } from '../api/data.js';

export function setupCreate(section, navigation) {
    const form = section.querySelector('form');
    form.addEventListener('submit', onSubmit);

    return showCreate;

    async function showCreate() {
        return section;
    }

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(form);

        const idea = {
            title: formData.get('title'),
            description: formData.get('description'),
            img: formData.get('imageURL')
        };

        if (idea.title.length < 6) {
            return alert('Idea title must be at least 6 characters long!');
        }
        if (idea.description.length < 10) {
            return alert('Idea description must be at least 10 characters long!');
        }
        if (idea.img.length < 5) {
            return alert('Image URL must be at least 5 characters long!');
        }

        await createIdea(idea);
        navigation.goTo('dashboard');
    }
}