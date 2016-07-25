# instagram-viewer

A small NodeJS app that fetches data from an Instagram account and dynamically renders the view.

## Usage

1. Go to http://instagram.pixelunion.net/ and generate a token.
2. ```cd``` into and create a .env file with the Instagram token from Step 1:  
  ``` touch .env ```  
  ``` echo TOKEN=[YOU_INSTAGRAM_TOKEN] > .env ```  
  NOTE: ```.env``` is already included to the ```.gitignore``` file so it won't be committed to the repository
3. Install the Node packages: ```npm install```
4. Start the server: ```node server.js```.  
  The default port is ```5000```
