# Description

This project was created for study the following contents: 
### `Typescript` 
### `Micro Front-end` 
### `React-hook-form`
### `Context Api` 

## Available Scripts

In the project directory, start with the following command:

### `npm run dev` (To run both projects at once)

Runs the app in the development mode.\
Opens both projects, the To do in  [http://localhost:8080](http://localhost:8080).\
And the main container project in [http://localhost:3000](http://localhost:3000).

## Or you can run each project separately using:
### `start:main-container` (For the main container project)
### `start:todo-list` (For the to do list project)


The page will reload if you make edits.\
You will also see any lint errors in the console.

### "Simplifyed Step by Step" to micro-front ends with typescript
1. Create both projects with `npx create-react-app my-app --template typescript`
2. Develop your application
3. Install webpack `npm install --save-dev webpack webpack-cli html-webpack-plugin webpack-dev-server babel-loader`
4. Install css-loader ans ts-loader (for webpack) `npm install css-loader ts-loader`
5. Create the webpack.config.js file
(View the project files as example for the following steps)
6. In the container app webpack file add moduleFederation, use `[name]` as the current container name, and `[remotes]` to the "secondary" projects that will be exposed 
7. In the `[remotes]` use the following pattern { `[remote-name-to-use-in-main-project]`: `[remote-name]@http://localhost:[remote-port]/[remote-file-name]` } 
8. In the "Secondary" projects copy the same webpack.config.js file
9. Define the `[name]` for the remove and the `[file-name]` to use in the container remote url
10. In the "secondary" project instead of use the `[remote]` prop, use the `[expose]` prop
11. Use the following pattern to expose the project component {`[path-to-use-in-parent]`: `[current-project-path]` }
12. In the container project crate a declarations.d.ts file in the src folder and inform each of the exposed components
13. Import the component in the container project
14. Done

### Thanks for visiting!


