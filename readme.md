# Welcome to the Tierra challenge

This challenge is to check that you are able to set up a node project and complete a task. Even if you're unfamiliar with node, I've hopefully provided enough details in the getting started section for you to set everything up. The task is very similar to a real world case in the actual system.

# The task

Go to `index.ts` and you'll see some interfaces and a function clled `getTimePaused`. This function is your task. It takes 3 arguments: a locale, a start date and an end date.

## The Locale Object

The locale contains information pertaining to a specific restaurant.

-   You have its opening times, which are an Array of 7 elements, with index 0 representing Monday and 6 Sunday. Each of these elements have a start time, and an end time, and the times are in local time.
-   You have a timezone string, as defined by the tz database (read more here: https://en.wikipedia.org/wiki/Tz_database).
-   You have a list of pause actions. Each action has an action name, either "pause" or "unpause" and a datetime. Any pause action can only be followed by an unpase action, and vice versa. These actions come in ascending order of datetime. The datetime is in UTC, not local time.

## `start` and `end` arguments

These two strings are datetime strings using the format "YYYY-MM-DDTHH:mm:ss.SSSZ", and they are in UTC time.

The pause and unpause actions in the Locale Object are within a timerange that encompasses these arguments (sometimes equal, sometimes greater). The list of pause actions can start with either pause or unpause.

## The result

The purpose of the function is to take this locale, and ascertain how much time it was paused between the start date and end date. Only time paused during opening hours counts, so if a store is set to close at 23:00 local time, then open again at 12:00 the next day, if it is paused at 22:59 then unpaused the next day at 11:59 then it has only been paused for 1 minute.

To deal with the various date objects and timezones, both `moment` and `moment-timezone` node packages have been included. If you're not familiar with them, feel free to use another package.

The return value of the function is an integer, representing the total time paused in milliseconds.

# Setting up the project

This is a small node project, written in typescript and using Jest for testing. If you're unfamiliar with typescript, don't worry regarding your answer – it can be written in pure javascript. That said, be sure you know how to compile index.ts into javascript. All the necessary node packages to do so have been provided.

## installation

If you have node and npm installed on your computer, you can simply run `npm install` from the project's home directory, or if you have docker use the following:

`docker run -v "$PWD":/usr/src/app -w /usr/src/app node npm install`

This will create the node_modules folder and allow jest to run its tests. You can do so by running

`npm test` or `npm test -- --watch` if you want the test to rerun each time a change is made. To run the test via docker use:

`docker run -v "$PWD":/usr/src/app -w /usr/src/app node npm run test`

But it might be easier to add a Jest module to your text editor of choice

If you want to run the node app, first you will need to transpile the typescript into javascript. If you're running node, you can simply run `tsc --watch`, or if using docker:

`docker run -v "$PWD":/usr/src/app -w /usr/src/app node npm run tsc -- --watch`

Now that the code has been compiled, I've included nodemon and an npm script called "dev". If you have node installed use `npm run dev`, and the alternative with docker is:

`docker run -v "$PWD":/usr/src/app -w /usr/src/app node npm run dev`

# Show me your skills

As well as seeing you resolve the problem, any comments indicating your thought process would be greatly appreciated. Once you've finished, you can simply email the function code to me, but if you've use more packages be sure to also send the package.json file so that I can run your solution.

Good luck and have fun!
