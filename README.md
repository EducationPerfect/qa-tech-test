# EP QA Tech test

As part of the technical exam you will need to do mainly two things:
- Solve the automation part
- Provide supporting documentation

## Automation (Cypress)
The `sample_spec.js` file contains a few scenarios already outlined. The first two are already written, you will need to fill in the rest. Each test describes what it is meant to be testing.

We encourage applicants to change whatever they see fit in this project to improve the quality of either the application code or the tests themselves. Feel free to edit the tests setup or even the HTML code in the `index.html` file if you think it provides a better solution.

Here are some instructions that outline how to start the application and how to get the tests running:

### Install NodeJS
Download and install the [latest NodeJS version](https://nodejs.org/en/)

### Install yarn
It is recommended to install Yarn through the npm package manager, which comes bundled with Node.js when you install it on your system.

Once you have npm installed you can run the following both to install and upgrade Yarn:

`npm install --global yarn`
### Install node dependencies
Open the terminal and cd into the project root, then run:

`yarn`

### Start the app
After dependencies are installed you can serve the app locally by running:

`yarn start`

### Run Cypress tests
To open the cypres GUI, open a second terminal and run:

`yarn run cy:open`

Then run the tests by clicking on the desired spec sheet

## Supporting documentation

Please provide any documentation that could support the testing of this project. From test plans that detail what you would test (automation and/or manually) to any observations or improvements that you can think of. We want to know how you approach a project as a QA and what considerations you take in this role.

Please add any file in the `docs` directory of the project. **Note** You don't need to follow the format of the example there, but you are welcome to do so.