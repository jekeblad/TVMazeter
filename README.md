## To run the site localy
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in the interactive watch mode.\

## Comments about the solution

### Styling
All styling is done using css/scss and common html elements - If larger forms should be used, then maybe a library would be a better fit.
The UI design has been made to fit both computers and handhelds with some media queries for styles targetting small screens. 

### Data communication and management
All data communication is done using React Query mainly for simpler caching, but also for abstracting away some error and state management.
Data is cached by search term for 10 minutes to lessen the load of the API server.
The react query itself has been abstracted away using hooks to simplify the use and to implement logic for detecting slow connections to the server. If a call takes more than 3 seconds, 
a message will be displayed. 
All data models used for the api calls have been generated using the responses from TV Maze. There could potentially be some issues with mandatory properties, but so far, all properties in use seem to be included.

### Favourites
Favourites are stored in the local storage since it should be kept alive between sessions. Since it doesnt contain any sensitive data, this should not be an issue.

### Error handling
The error management is at a quite rudimentary stage at the moment, since there are no explicit instructions on this. 
React Query has its own error management and any errors will show hardcoded error messages. There are also a common error management on the App level, displaying a common error message no matter the type. 
This should probably be improved given more time and in a production grade solution, logging the errors server side e.g. to Application Insights or similar.

### Testing
This is also on quite a rudimentary level testing the search functionality, navigating to the details page and navigating to a specific show details page. 
They are more of a integration test than a unit test, since i prioritized testing the overall function.

### Other comments
I could not find any endpoint that allowed to fetch more than 10 items when searching. If there are then i must have missed them. This means that paging and infinite scrolling didnt seem that important.
This could however probably be implemented using a backend that mined all the show data, but implementing that would have significantly increased the scope of the assignment. 