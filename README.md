# Welcome to React Wahio by Christian Oporto

> The documentation of this project is still in process, any questions please contact me by this same means.

<br/>

This `React application` is created with Typescript and Hooks, and replaces Redux, Redux-saga, and Redux-persist using only React Context. It also uses Styled-components and supports i18n internationalization with message extractor.

# Features

# To work with internationalization messages

React Wahio works with a structure of components and pages to add the messages, please create a messsages.ts file and define the messages that your component or your page will use, as shown in the following example: [src/pages/Home/messages.ts](src/pages/Home/messages.ts) <br/>

Once the messages are defined, you can configure the list of languages and the main language in the extract-intl script located in package.json, so that ReactWahio generates the language files automatically, you just have to execute the following script: 

```sh
$ npm run extract-intl
```

after this the files in `src/i18n/translations`  will be updated.

# Use Store Middlewares instead of  redux-saga

to make rest requests or of any type you can work with the structure defined in `src/store/middlewares`

# Use styled-components instead of css files
For each component or page create a styled.ts file and define its styles. Use the best bits of ES6 and CSS to style your apps without stress. Learn more in: 
[styled-components.com](https://styled-components.com/)

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br /> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br /> See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
