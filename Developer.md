# Developer Documentation

## Running locally

1. Make sure you've got the following pre-requisites installed on your machine:

    - node version 10+
    - yarn

2. In the root folder of this project, run `yarn install` to install project depenencies and then `yarn dev` to start the website.

3. Visit http://localhost:3000 in your browser to see the website running locally. The `yarn dev` command runs a file watcher so the website will automatically update as you change the code.

## Deployment

1. Run `now` in the root directory of this repository. This will deploy the webapp to a unique URL such as https://configurator-e9phcvj82.now.sh

2. Once it completes, run `now alias`. This will point the domain https://sam-configurator.now.sh/ to the latest deployed version of the webapp (i.e. it will point to the URL you deployed to in step 1).

3. Visit https://sam-configurator.now.sh/ to check it's all working correctly.
