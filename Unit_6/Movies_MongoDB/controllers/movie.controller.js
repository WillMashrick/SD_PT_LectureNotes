const router = require("express").Router();
const Movie = require("../models/movie.model");

// Error Response Function
const errorResponse = (res, error) => {
  return res.status(500).json({
    Error: error.message,
  });
};

//TODO POST
// http://localhost:4000/movies/
router.post("/", async (req, res) => {
  try {
    //1. Pull data from client (body)
    const { title, genre, rating, length, releaseYear } = req.body;
    //2. Create a new object using the Model
    // const movie = new Movie({
    //   title: req.body.title,
    //   genre: req.body.genre,
    //   rating: req.body.rating,
    //   length: req.body.length,
    //   releaseYear: req.body.releaseYear,
    // });
    const movie = new Movie({
      title,
      genre,
      rating,
      length,
      releaseYear,
    });

    //3. Use mongoose method to save to MongoDB
    const newMovie = await movie.save();
    //4. client response
    res.status(200).json({
      movie: newMovie,
      message: `Success! ${newMovie.title} added to the collection!`,
    });
  } catch (err) {
    errorResponse(res, err);
  }
});

//TODO GET One
/* 
   Challenge
        - By ID
        - Response should consider
            - If found
            - If no document found
        
        Hint: Consider login within user.controller.js

*/

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // Find the document (movie JSON obj) within the DB collection
    const movie = await Movie.findOne({ _id: id });
    // console.log(movie);

    // Response message: use a ternary to make a fancy response
    movie
      ? res.status(200).json({
          msg: `${movie.title} was found`,
          movie,
        })
      : res.status(404).json({
          message: "No movie found.",
        });
    // res.status(200).json({
    //   status: `Found movie at id: ${id}`,
    //   movie,
    // });
    // if (!movie) throw new Error("User not found.");
  } catch (err) {
    errorResponse(res, err);
  }
});

//TODO Get All
/* 
   Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        
        
        Hint: parameters within method are optional
*/

router.get("/", async (req, res) => {
  try {
    // This endpoint will only return all movies, no req or params needed
    // Await all documents from the movie collection
    const getAllMovies = await Movie.find();

    getAllMovies
      ? res.status(200).json({
          message: "All movies from movie collection.",
          getAllMovies,
        })
      : res.status(404).json({
          message: `No movies found.`,
        });
  } catch (err) {
    errorResponse(res, err);
  }
});

//TODO Get All by Genre
/* 
   Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        - Consider parameter casing within the endpoint.
            - hint: conditional w/ looping
*/

router.get("/genre/:genre", async (req, res) => {
  try {
    // Grab genre value from parameters
    const { genre } = req.params;
    // let buildWord;

    // Trying to spell genres the same way...
    // Logic below doesn't work for Sci-Fi
    // if (genre) {
    //   for (let i = 0; i < genre.length; i++) {
    //     i === 0
    //       ? (buildWord = genre[i].toUpperCase())
    //       : (buildWord += genre[i].toLowerCase());
    //   }
    // }

    // Finding all movies in DB whose genre matches the params ({ db genre key : req.params.genre })
    const getMovies = await Movie.find({ genre: genre });

    getMovies.length > 0
      ? res.status(200).json({
          getMovies,
        })
      : res.status(404).json({
          message: `No movies found.`,
        });
  } catch (err) {
    errorResponse(res, err);
  }
});

//TODO PATCH One
router.patch("/:id", async (req, res) => {
  try {
    //1. Pull value from parameter
    const { id } = req.params;

    //2. Pull data from the body.
    const info = req.body;

    //3. Use method to locate document based off ID and pass in new information.
    const returnOption = { new: true };

    //* findOneAndUpdate(query, document, options)
    // returnOptions allows us to view the updated document
    const updatedMovie = await Movie.findOneAndUpdate(
      { _id: id },
      info,
      returnOption
    );

    //4. Respond to client.
    res.status(200).json({
      message: `${updatedMovie.title} has been updated successfully!`,
      updatedMovie,
    });
  } catch (err) {
    errorResponse(res, err);
  }
});

//TODO Delete One

router.delete("/:id", async (req, res) => {
  try {
    //1. Capture ID
    const { id } = req.params;
    //2. use delete method to locate and remove based off ID
    const deletedMovie = await Movie.deleteOne({ _id: id });
    //3. Respond to Client, with ternary for a ? if true do this : false do this
    // res.status(200).json({
    //   message: "Movie was successfully deleted!",
    //   deletedMovie,
    // });
    deletedMovie.deletedCount
      ? res.status(200).json({
          message: "Movie deleted from database.",
        })
      : res.status(404).json({
          message: "No movie in the collection was found.",
        });
  } catch (err) {
    errorResponse(res, err);
  }
});

module.exports = router;
