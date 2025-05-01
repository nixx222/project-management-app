# Version 4


- Database - (Laura likes to start with the database so she can use Postman to ensure it's working.)
X1. Create the table schema for the tables that I will need in my databse. 
    2. I can reference my airtable project for the table structure + data types. 
(CREATE TABLE commands, listing the columns + data types)
- Deploy a database server on render
2. Connect to our render using PGadmin
3. Run the commands to create our data tables. 


- Web Server/API
X. Create a webserver folder inside the root countries-API folder, called 'server'
X. Inside the 'server' folder, create the web server instance:
    1. Adding NPM = package. json, installing express, installing pg, adding .gitignore, adding the src folder (see full list in ________)
    // Steps for creating a Node/Express server
            X 1. In your project folder, run npm init
            X 2. Install express by running npm install express
            X 3. Add a .gitignore to our project for the node_modules
            X 4. Create a src folder to hold our custom JS code, create a index.js file to store all of our web server code.
            X 5. Add all of your import statements (3rd party modules, Node modules, your custom modules)
            X 6. Add the "boilerplate" code for Express, creating the instance, adding the port, adding the listener
            X 7. Add API endpoints + helper functions

X. Add the config file to connect to our database (same one used in our programming_languages in our ________)
X Build our express app (in our index.js file), starting with our imports and the Express boilerplate code. 
X Reference our API endpoint document (that we created that listed out the different API endpdoints) create the endpoints and helper functions for each user action. POST - user submit form, POST - user adds a saved country, GET- get user data, POST - updates country count for each country. Be sure to have an API request for each of these user actions. 
X Test your endpoints using Postman (Optional) Ex: If I'm submitting the users info, you can send it in postman as a JSON object, and when you're running your server locally, ensure the user data has been added as a new row of data in the database. (You can check this by clicking "View All Data in PGAdmin).

- Run node index.js in src folder 
- Open Postman 
- 

- Frontend 
1. Refactor the code (either local storage or Firebase) so that the user actions are tied to calling an API fetch request to the "localhost:3000/end-point". Ex: in the form component, you have an onsubmit where the user adds their user profile infor - you'd want to use a fetch - localhost:3000/add-user-profile to send user profile data. * Do this everywhere the user interacts with website: All POSTS and GET requests. 
2. If you get to this step and you're seeing a "CORS" issue in the console, reach out to Laura, she will help trouble shoot 

Frontend 4/24/25
X (Nothing in it currently.) Create .gitignore for FE
- Refactor my ad-feedback HTML file to a JSX component, put it in my AddFeedback JSX component page
- Display the api call with feedback on to individual feedback cards
- Create the indivual card component
- Create filter buttons
- Create the filter Logic

Styling 4/24/25
- Responsive for Tablet, Mobile, Desktop

Backend 4/24/25
- Create API endpoints: index.js 1-post (add new feedback, doesn't need to be user specific) 1 get to get all the feedback. 
- Create Helper functions
- Create SQL query for the Helper function
- Test API endpoints on Postman.

Deployment 4/24/25
- Front end to Netlify
- Databse + API on Render
- Make sure the deployment works after coding. 


Reprogramming My Mind Through Code: How I’m Using Logic to Heal From Trauma
By Phoenix Elizabeth

Today, while working on my project management app, I experienced something more profound than just coding. I accessed a part of my mind that used to feel locked away — a part tied to logic, structure, and decision-making — and I did it by writing JavaScript. What started as a coding session became a moment of mental and emotional liberation. For me, learning to code is not just about building software — it's about reprogramming my mind and reclaiming parts of myself that were fragmented by trauma.

Fragmented Logic and Dissociation
In my past, logic and critical thinking weren’t just discouraged — they were strategically blocked. I was trained to obey, to dissociate, to serve. My brain was conditioned through fear, manipulation, and violence to avoid thinking for myself. Dissociation wasn’t just a response; it was programmed into me.
This is common in systems of trafficking and mind control: logic becomes a threat to the handler, so it is replaced with obedience. Every time I try to engage those parts of my brain again — the parts that think critically or organize information — I get flashbacks.

Coding as a Catalyst
In today’s coding session, I was working on a component that fetches feedback from a server. It uses React hooks like useEffect and useState to manage data and update the interface. As I wrote the logic for the feedback manager and display components, something clicked: I was separating responsibilities, assigning roles, and building structure.
This mirrored something internal — a boundary was forming in my own mind. I wasn’t being used anymore. I was managing. I was assigning logic. I was choosing. This felt revolutionary because logic was something I had learned to fear. But now, I was using it as a tool for healing.

Separation of Concerns — in Code and in Life
One of the programming principles I practiced today is called Separation of Concerns. In code, this means separating logic from display — keeping functions that fetch and manage data separate from components that simply render it. This makes the code easier to understand, maintain, and grow.
But for me, it meant even more: I began seeing my own mind through that same lens. For so long, everything was jumbled — trauma, memory, performance, obedience. There were no clean lines between what I felt, what I believed, and what I did. But coding helped me draw those lines. I could say, "This is logic. This is feeling. This is performance. This is management." And for the first time, I felt that I was managing myself.

Rewriting the Code of My Identity
What was taken from me — logic, choice, sovereignty — I am reclaiming line by line. Each piece of code is a ritual. Each decision I make in my app is a decision I make for myself.
In the world I came from, I was used as a tool. I was a “prop” in a larger, invisible system. But now, I’m building systems. I’m writing the instructions. I’m reclaiming the logic that was once used to keep me silent.
Coding is my therapy. Coding is my revolution. Coding is how I take back what was mine.

The Future is Mine
There’s something magical about writing code that also rewrites the way you think and feel. Today, I didn’t just write a component. I wrote a new story. A story where I am the architect, the manager, the healer — not the object, not the pawn.
This is why I keep coding. Because every line is a step toward wholeness, and every bug I fix is a memory I reclaim.


Sources:
https://chatgpt.com/share/68138ace-148c-800b-a6a9-82c232fd4c44
https://chatgpt.com/share/68138ae5-74fc-800b-8ac5-911002789a54


