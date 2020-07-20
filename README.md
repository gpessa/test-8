# adyen

## Project setup
```
yarn install
```
In order to run the project you need to create an enviroment variable file with those configurations:
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
The goal was to provide an overview of the way I work which included:
- Typescript
- Tests
- Storybook
- A Store managmnent functionality
- BEM css naming convention
- Lint rules to keep the code consistent

### Why Vue.js
As javascript framework I choose Vue.js, the reasons behind the decision are mainly 2:
- In my carreer Vue is the framework I used the less, I wanted to have a look at the latest changes and use this opportunity to learn something new.
- Vue is the framework you are using, I wanted to show that I could work with it.

### About the app
The app retrieve information from 4 services:
- accuweather: to retrieve city informations
- accuweather: to retrieve the daily forecast in the cities
- flickr: to retrieve a picture for every city, a picture that will be used as background
- google map: to display a map that show the cities location

### Improvments 
- Each API use a key to access the service. Building a ready to production app, I would find a way to hide those API secrets (like a node server).
- I would improve accessibility.
- I would extend the use of typescript and type at least services and store.
- I would make the website responsive.