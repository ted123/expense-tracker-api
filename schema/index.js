const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const UserType = new GraphQLObjectType({
    'name'  : 'User',
    'fields': () => ({
        'id'   : { 'type': GraphQLString },
        'name' : { 'type': GraphQLString },
        'email': { 'type': GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    'name'  : 'RootQueryType',
    'fields': {
        'user': {
            'type': UserType,
            'args': {
                'id'   : { 'type': GraphQLString },
                'email': { 'type': GraphQLString }
            },
            resolve(parent, args) {

            }
        }
    }
});

module.exports = new GraphQLSchema({
    'query': RootQuery
});