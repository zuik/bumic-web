# bumic-web
Repo for the source code of BUMIC's website.

I wanted to update the BUMIC website and rewrite all of it in React and employ best practices in writing a website.

At one point this should replace what we currently have on the front page.

## Development constrain

There are some interesting constrain that we have to meet for this project:

- The server will only serve static file
- The server can't listen on any port (except port 80 where it's serving the static file)
- The server will not run daemons.

Because of this, we need to bundle the React file with the website. 

Thus all the packages here is for development requirements.

## Development setup

Just run `npm install` then `npm start` for the development server.

Other aspect of the website will be added when needed.
