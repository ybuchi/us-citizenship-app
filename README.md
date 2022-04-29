
#  Naturalize- The Best Way to Study for Your US Naturalization Test

**Table of Contents**

1. Project Summary
2. Application Features
3. Technologies and Frameworks

## 1. Project summary
*Naturalize* is a great resource for anyone looking for a better way to study for the naturalization interview to become a citizen of the United States. Currently, the only resources provided by the USCIS are static resources such as PDFs and text files containing the test questions. 

*Naturalize* takes the test questions and provides users with an interactive way of both studying for the exam and testing their knowledge.

## 2. Application Features

In *Naturalize* version 1.0, there are two "modes" the user can leverage to prepare for their interview: the Study Mode and the Quiz Mode.

***

### Study Mode

The "Study Mode" page of the application includes the full list of 128 questions pulled from the [2020 version of the naturalization exam](https://www.uscis.gov/sites/default/files/document/crc/M_1778.pdf)
. It also contains a few tools (features) to help them organize their studying. These features are listed below.   

#### **1. Question Type Filters**

Users have the option of filtering questions by eight different question types. These types (history, colonial history, 1800s, recent history, civics, symbols and holidays, SC (special consideration), flagged).  

Each of these types, aside from "SC" and "flagged", were taken from the different thematic sections that the original USCIS  document linked above is split into. 

The SC filter references the "Special Considerations" question, or the only questions that applicants over the age of 65 who have lived in the United States for more than 20 years need to study. 

The "flagged" filter references questions that the user has set as "flagged" (see next section below). 

Note that more question types may appear in future versions of this application in order to split question types with many questions (e.g. civics) into smaller categories


#### **2. Question Flag Button**

Users have the option to "flag" a question. This can be used to mark questions they need to study. In addition, they can easily use this button in combination with the the "flagged" filter to surface all of the questions they need to work on.

***

### Quiz Mode

Version 1.0 of this application offers a single Quiz mode that takes a random subset of 20 out of the 128 possible questions and tests the user on only those questions. 

If a user gets 12 questions correct or more, as per the actual naturalization test, they "pass" the Naturalize quiz!

***

## 4. Technologies and Frameworks

### Summary

*Naturalize* uses a React frontend as well as the lightweight JSON Server as a backend. 

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run server`

Runs the DB JSON server on port 3001.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
