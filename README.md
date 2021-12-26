This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Live URL

[https://epic-swirles-b78716.netlify.app/](https://epic-swirles-b78716.netlify.app/)

## Available Scripts

For frontend part, in the project directory, you can run:
### `npm start`

For server part, in the `server` directory, you can run:
### `node server.js`

For tests, in the project directory, you can run:
### `npm test`

We have two endpoints;

Open [http://localhost:8080/items](http://localhost:8080/items) for the all product data

Open [http://localhost:8080/companies](http://localhost:8080/companies) for the brand list


Open [http://localhost:3000](http://localhost:3000) to view the project in the browser

### My Approach and Notes
-   I've created project with CRA using react-redux. I have slices for all the reactive components (features) to manage the project state.
-   I've used styled components and tried to have more generic structure with reusable components; e.g. Title, Button, Flexbox, Content, Checbox components


-   I was going to have pagination on from the backend side but since tag list is dependent to product list, I had to get all the data and do the filter on the frontend side. In my opinion, we should be able to have a separate tag list with all the data.

