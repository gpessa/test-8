# adyen

## Project setup
```
yarn install
```
In order to run the project you need to create an environment variable file with those configurations:
```
VUE_APP_ACCUWEATHER_API_KEY="YOUR_ACCUWEATHER_API_KEY"
VUE_APP_FLICKR_API_KEY="YOUR_FLICKR_API_KEY"
VUE_APP_GOOGLE_AMP_KEY="YOUR_GOOGLE_AMP_KEY"
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Run your unit tests
```
yarn test:unit
```

### Goals
The goal is to provide an overview of the way I work which includes:
- Typescript
- Tests
- Storybook
- A store management functionality
- BEM css naming convention
- Lint rules to keep the code consistent

### Why Vue.js
For the javascript framework I chose Vue.js for mainly two reasons:
- In my career Vue is the framework that I have used less frequently and I wanted to use this opportunity to keep myself updated with the latest changes.
- Vue is the framework Adyen is using and so I wanted to show that I am competent in using it.

### About the app
The app retrieves information from 4 services:
- AccuWeather: to retrieve city information
- AccuWeather: to retrieve the daily forecast in each city
- Flickr: to retrieve a picture for every city, a picture that will be used as a background
- Google Maps: to display a map that shows the city's location
and allows the user to easily compare and find out the city with the best weather. 

### Improvments 
- Each API uses a secret key to access the service. If I was to build this for production, I would find a way to hide those API secrets (maybe using a node server).
- I would improve accessibility.
- I would extend the use of typescript at least for services and store.
- I would make the website responsive.
- I would extend tests on the entire platform