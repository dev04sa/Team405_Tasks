import express from 'express';
const app = express();


//port handling through env file and a backup port provided if the port given in env file is occupied
const port = process.env.PORT || 8000;



//making json data
const projects = {
    "chatApp": {
        "Title": "Secured Line",
        "Description": "A chatting app built using flutter where all the logged in user can chat among each other privately",
        "Link": ""
    },
    "lawyerSearchWebsite": {
        "Title": "Lawyer search website",
        "Description": "A website to help people in small cities get legal help",
        "Link": ""
    },
    "clone": {
        "Title": "Netflix clone",
        "Description": "Clone of a popular streaming website",
        "Link": ""
    },
    "digitalWallet": {
        "Title": "Blockchain wallet",
        "Description": "A digital blockchain wallet made to store ETH",
        "Link": ""
    }

};





// get requests handling
app.get('/', (req, res) => {
    res.send('<h1> This is the default route  </h1>');
});

app.get('/home', (req, res) => {
    res.send(`<h1> Welcome!! It's such a pleasure to have you here. Whether you've just arrived or returned, this space is now brighter because you're part of it.</h1>`);
});

app.get('/about', (req, res) => {
    res.send(`<h1>Text about the author</h1>`);
});

app.get('/contact', (req, res) => {
    res.json({ name: 'Abhijaat krishna', email: 'yoyohoneysingh@gmail.com', tools: 'youtube', mobile: '9876543212', techstack: '[html,css,js,react]' });
})

app.get('/projects', (req, res) => {
    res.json(projects);
})




//port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});