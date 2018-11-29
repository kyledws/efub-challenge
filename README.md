# Take Home Coding Challenge
## EF Ultimate Break Customer Panel

**Quick Start**: Run `npm run first-start` at the project root to view this application

## Summary

This application is my solution for the EF Ultimate Break Take Home Coding Challenge. What follows is a break down of my methodology and thought process when solutioning for the prompt.

## Methodology
### Overview

1. Review prompt for the request
2. Clarify requirements and constraints with business stakeholder
3. Scope ideal solution for request
4. Create mockups of components
5. Develop unstyled view and business logic for components
6. Style components
7. Flesh out documentation

#### 1. Review prompt for the request
I began by reviewing the request prompt provided by the business stakeholder. The prompt can be found in *EFUltimateBreakTakehome.docx* at the root of this project. Assuming that the purpose of the prompt was to evaluate my technical skills, I came up with the following questions to clarify requirements and technical constraints:

1. What is the time constraint?
    * How long should I spend crafting a solution?
    * When would you like me to turn in my solution?
2. Is there a visual style guide or brand language I should adhere to?
    * For instance, should I follow the general theme of https://www.efultimatebreak.com/
    * Or, should I use a scaffolding like material design light https://getmdl.io/?
3. Which browser/experiences should I support for MVP?
    * Just one browser, or all modern browsers?
    * How far back should I support IE?
    * Are there any accessibility requirements such as minimum font size or color contrast?
    * Should MVP be responsive? If so, which experience would have the move traffic: desktop, tablet, mobile?
4. The documentation says I should use React as the library for rendering the view. Are the any other technical constraints?
    * Should I follow a particular coding style guide? Such as Airbnb's style guide https://github.com/airbnb/javascript or standard js https://standardjs.com/
    * Should I use a certain preprocessor for CSS?
    * Should I target a specific version of Javascript? ES5, ES6, ES2016+ etc.
5. To what extent should I write unit tests for my solution?
    * Am I targeting 100% code coverage, or no testing at all?
6. What is the end deliverable? A zip file of my workspace/solution?

#### 2. Clarify requirements and constraints with business stakeholder

The general answer for the questions in part 1 was to there are no constraints save the following:
* The only required browser is Google Chrome
* Email the project in a zip file when complete

#### 3. Scope ideal solution for request

After reviewing the responses to my clarifying questions, I defined scope as follows loosely in priority order:
1. COMPLETE - Render the user data onto a table-like component *Explicit prompt requirement*
    * Add sorting for the table data *Developer enhancement*
    * Add filtering for the table data *Developer enhancement*
2. COMPLETE - Add ability to view a single piece of user data in a card-like component *Soft prompt requirement*
3. COMPLETE - Add localization for generic items *Developer enhancement - The theoritical use case for application is a data portal for EF Ulitmate Break employees. Given that EF is an international company I assumed robust portal would require localization. Adding this enhancement would also provide a means to show of my experience with localization.*
4. EXCLUDE DUE TO TIME CONSTRAINT - Add authorization to conceal private data. *Developer enhancement - The prompt required that the application show users' passwords. It is generally poor security practice to provide unfettered access to access to users' passwords as this would allow for leaking of personal information and impersonation of a user. To adhere as closely as possible to the practice while still answering the promps, I thought to hide passwords behind an authorization prompt*
5. EXCLUDED DUE TO TIME CONSTRAINT - Add authentication *Developer enchancement - Similar to requirement 4, I assumed users of this theoretical portal would require various levels of access to customer data because of privacy/data concerns. Similarly, accounts could have default localization given requirement 3.*
6. COMPLETE - Add light styling to components *Developer enchancement - Rendering unstyled text in the application would meet the explicity prompt requirement but it wouldn't show off my knowledge of and ability to design and code designs. Depending on the amount of time remaining when I got to this requirement, I would do one of the following in priority order. (1) Develop a custom design using Sass, (2) Develop Sass based on an existing design system such as https://material.io/design/,  (3) Use existing components of an existing design system (https://github.com/material-components/material-components-web) with Sass to compliment, (4) Option 3 but with styled-components (https://www.styled-components.com/), (5), Option 3 but with inline-styles. I ended up going with option 5 due to time constraints. Styling was the last code requirement I implemented so I cut some corners as the due date approached. I was able to make the application responsive though!*
7. EXCLUDED DUE TO TIME CONSTRAINT - Add unit tests focusing on core functionality and aiming for 100% coverage provided remaining time available *Developer enhancement - Given more time than this prompt allowed, I would have started with tests following test-driven development (methodology) but I chose to code test-last instead of test-first because I assumed showing my ability to implement complex features such as sorting, filtering, and localization would prove more useful in this coding challenge than the extent of my QA and testing experience.*
8. COMPLETE - Add a README.md explaining my methodology and thought processes *Developer enhancement*
9. COMPLETE - Add comments/documentation to code to explain thought processes *Developer enhancement*

#### 4. Create mockups of components
Using photoshop, I created mock ups / wireframes of the components I would build. See *Components.png* and *Components.psd* at the root of this project. The components designed assume that time allowed for requirements 4 and 5 from part 3. Ultimately those features were cut due to time constraints so related components/functionality shown in the mock up were not implemented in the final product.

#### 5. 6. 7. - See comments in section 3

---

See the README.md generated by create-react-app below

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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
