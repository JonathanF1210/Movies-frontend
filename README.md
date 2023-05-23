# Movie Review Website

This is a movie review website built using React.js and Node.js. It allows users to browse a collection of movies, watch trailers, and read and submit reviews for movies.

## Features

- Browse Movies: The website displays a collection of movies fetched from the server. Users can view movie details such as title, poster, and release date.

- Watch Trailers: Users can click on a movie to watch its trailer. The website provides a route for playing trailers using the YouTube API.

- Submit Reviews: Users can submit reviews for movies. The website includes a form where users can write their reviews and submit them. The reviews are sent to the server and stored in a MongoDB database.

- Display Reviews: The website displays the existing reviews for a selected movie. The reviews are fetched from the server and rendered on the webpage. Users can see the review bodies and read other users' opinions.

## Project Structure

The project structure is as follows:

- `App.js`: The main component that serves as the entry point of the application. It handles routing and manages the state of movies and reviews.

- `components/Layout.js`: A layout component that provides a consistent layout for the website. It includes the header and wraps the main content.

- `components/home/Home.js`: The homepage component that displays a list of movies.

- `components/header/Header.js`: The header component that contains the website title and navigation links.

- `components/trailer/Trailer.js`: The component responsible for playing movie trailers.

- `components/reviews/Reviews.js`: The component that displays movie reviews and provides a form for submitting new reviews.

- `components/hero/Hero.js`: The component that displays a carousel of movies and allows users to view trailers and access reviews. It also includes the Hero.css file for styling.

- `api/axiosConfig.js`: The Axios configuration file that sets up the base URL for making API requests.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- Node.js: A JavaScript runtime for running server-side code.
- MongoDB: A NoSQL database for storing movie reviews.
- Axios: A library for making HTTP requests from the client.
- React Router: A routing library for navigation within the application.