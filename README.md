This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Would you rather

This project was made following instructions of the Udacity's course React Nanodegree Program.

Need to be honest with you, I don't give so much attention to the CSS so I tried to be focus on the functionalities and understant as much as I can about React and Redux.

## Structure

Bellow there is some comments about the application structure, some obvious things like what action _question_ does, triggers the actions for questions, so it was not described here ( =D ).  

    .
    ├── ...
    ├── src                   # Where the intelligence lives
    |   ├── action            # All the actions responsible to trigger the updates
    |   ├── component         # Customized components 
    |   ├── middleware        # Middlewares for the app, the logger stays in here
    |   ├── store             # Where the store lives
    |   └── utils             # Place to put shared files
    |       └── _Data.js      # Where Udacity's initial code stays
    ├── App.js                # Where all the routes was made, and the links for the components
    ├── index.js              # The place where I put the provider
    └── ...
  
## First steps

All you need to do is run the command bellow to install all dependencies

### `npm install`

And then this other command to get things running
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
