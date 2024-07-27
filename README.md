# URL Shortener

A simple URL Shortener using Node.js, Express.js, and MongoDB.

## Requirements

- Node.js
- MongoDB

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/url-shortener.git
    cd url-shortener
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file with the following content:

    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost/urlShortener
    ```

4. Start the server:

    ```bash
    npm start
    ```

    The app will run at `http://localhost:3000`.

## Usage

1. Open your browser and navigate to `http://localhost:3000`.

2. Enter a long URL to shorten it.

3. Use the generated short URL to be redirected to the original URL.

## Endpoints

- `GET /`: Renders the homepage with a list of shortened URLs.
- `POST /shortUrls`: Accepts a long URL and creates a shortened URL.
- `GET /:shortUrl`: Redirects to the original URL based on the shortened URL.

## License

MIT
