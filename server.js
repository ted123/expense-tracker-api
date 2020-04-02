const express     = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema'); 


const app = express();

app.use('/graphql', graphqlHTTP({
    schema
}));

app.listen(4000, () => console.log('now listening for requests at port 4000'));