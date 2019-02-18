This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

First of all you need to enable JavaScript to run this app :).

## Install all dependencies
NPM install or you can use YARN pakage manager instead of NPM

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `engines`

I used Node 8.9.4 and NPM 6.7.0 and I recommend using this version or higher.

### `Redux dev tools`

install redux dev tools in your browser or delete this line of code in the application.
./store => line 20 => window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

### `PROXY`

proxy has been set in pakage.json but if it not works delete that and change the following lines:

.src/actions/filmActions 
=> line 11     axios.get("/films/")   to   axios.get("https://swapi.co/api/films/")
=> line 21     axios.get(path)        to   axios.get(`https://swapi.co/api${path}`)
or you can use this link and do all steps that are there https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development#configuring-the-proxy-manually




