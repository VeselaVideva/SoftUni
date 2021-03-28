INSTRUCTIONS:

=> Data in server.js is edited, so please start the server from the 'server' folder in this task.

- './images/table.png' is renamed to '/images/table.png'
- './images/sofa.png' is renamed to '/images/sofa.png'
- './images/chair.png' is renamed to '/images/chair.png'


=> Please run 'npm install' in order to get all my dev dependencies.


=> In order to run and manual test my task, please change the port of your localhost:

- I'm using WebStorm, so I work with port 8080
- If you use VS Code and live-server, you should change the port to 5500


=> For 'Create' and 'Edit' pages I'm not using only 'is-valid' and 'is-invalid' classes for field validation.
Instead, I'm using also the html attribute 'required' for all mandatory fields, and I've added styles for showing
if the fields are valid or invalid:

input:valid {
    border-left: 2px solid green;
}

input:invalid {
    border-left: 2px solid red;
}

This makes the validation automatic, please test. I've also implemented additional validation for each field.