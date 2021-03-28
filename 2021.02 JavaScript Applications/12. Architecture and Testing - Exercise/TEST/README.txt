Please follow these steps for successful testing:

=> Open TEST folder as a project in your IDE (WebStorm or VS Code).

=> Open 1st terminal and run 'npm install' to get all dependencies (mocha, chai, playwright-chromium, http-server).

=> In the 1st terminal, enter in 'server' folder with command 'cd server' and run: node server.js
   SoftUni practice server will start on port 3030

=> Open 2nd terminal, enter in the folder with the task you want to test with command 'cd 01.NameOfTask' and run: 
   - 'http-server' if you are using WebStorm
   - 'npm start' if you are using VS Code
   The server will start a headless browser available on http://localhost:8080/

=> Go to this address and you should see the 'index.html' page of the task.

=> Open 3rd terminal, enter in the folder with the task you want to test with command 'cd 01.NameOfTask' and run: 'mocha test'
   This command works in WebStorm, for VS Code, please use your own command.
   You should see the passing tests.

   * For task 03.SoftTerest you should enter the 'tests' folder with command 'cd tests' and run the tests with command:
   'npm test e2e.test.js'