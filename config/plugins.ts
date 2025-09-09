export default () => ({
  graphql: {
    enabled: true,
    config: {
      defaultLimit: 25,
      maxLimit: 100,
      apolloServer: {
        introspection: true,
        playground: true,
      },
      // Ensure proper population of relationships
      populateDepth: 5,
      // Enable federation if needed
      federation: false,
    },
  },
});
