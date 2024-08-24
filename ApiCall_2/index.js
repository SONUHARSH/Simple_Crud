
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 8302;

app.use(express.json());

let movies = [
    {
        id: "1",
        title: "Inception",
        director: "Christopher Nolan",
        relese_date: "2023-08-15"
    },
    {
        id: "2",
        title: "The irsen",
        director: "Christopher",
        relese_date: "2023-08-7"
    },
];

//get movies list in the form of json
app.get("/movie", (req, res) => {
        res.json(movies);
});

//serch movies by id 
app.get('/movie/:id', (req, res) =>{
        const id = req.params.id

        for(let movie of movies){
                if(movie.id === id) {
                        res.json(movie)
                        return
                }
        }

        res.status(404).send("movie is not found")
});

app.post('/movie', (req, res) => {
        const { title, director, release_date } = req.body;
    
        if (!title || !director || !release_date) {
            return res.status(400).json({ message: 'Please provide title, director, and release_date' });
        }
    
        const newMovie = {
            id: uuidv4(),
            title,
            director,
            release_date
        };
    
        movies.push(newMovie);
    
        res.status(201).json(newMovie);
    });
    
    // Update a movie
app.put('/movie/:id', (req, res) => {
        const id = req.params.id;
        const { title, director, release_date } = req.body;
    
        const movieToUpdate = movies.find(movie => movie.id === id);
    
        if (!movieToUpdate) {
            return res.status(404).send('Movie not found');
        }
    
        movieToUpdate.title = title || movieToUpdate.title;
        movieToUpdate.director = director || movieToUpdate.director;
        movieToUpdate.release_date = release_date || movieToUpdate.release_date;
    
        res.json(movieToUpdate);
    });

//remove movies from the list
app.delete("/client/:id", (req, res) => {
        const id = req.params.id;
    
        clients = clients.filter((client) => {
            if (client.id !== id) {
                return true;
            }
            return false;
        });
        res.send("client is deleted");
    });
    


//set the server to listen at port
app.listen(port, () => console.log(`server running on port ${port}`));  







