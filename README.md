# twitter_search
A simple web page like twitter streaming the tweets

# Tech Stack

    - React.js - UI component library
    - NodeJs (Express) - REST API
    - SocketIO - Communicate to the client from server if any new data to be updated by server to the clinet
    - Styled Components - to style components
    - Redux.js - State Management

#Folder Structure

`Followed the Atomic pattern structure`

```Client Side
    - Components - Contains Reusable simple components which will be used while rendering the layout
        - Atom
        - Molecule
        - Organism
    - Container
        - store (contains all the store data and All the Rest API will be made here and data will be provided as container to the children components as contet data)
        - context (the communication with the store and layout happens here)
    - layout - contains all the page level components with reusable components from component and container folder
```

# Installing dependencies

    Use either ``` npm i ``` or ```yarn``` to install all the dependecenies.

# Running the Application

    ` npm run publish ` to build Component Library as bundle
    ` npm start ` to start the server

# Hosted Link

https://twitterfeedsearch.herokuapp.com/
