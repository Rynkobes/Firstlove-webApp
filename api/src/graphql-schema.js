import { neo4jgraphql } from "neo4j-graphql-js";
import fs from 'fs';
import path from 'path';

export const typeDefs = 
  fs.readFileSync(process.env.GRAPHQL_SCHEMA || path.join(__dirname, "schema.graphql"))
    .toString('utf-8');

export const resolvers = {
  Query: {
    // usersBySubstring: neo4jgraphql,
   // persons: neo4jgraphql,
    allEmployees: neo4jgraphql,
    bacentaLeaders: neo4jgraphql,
    churchByAttendance: neo4jgraphql,
    churchByIncome: neo4jgraphql,
    leadersByAge: neo4jgraphql,
    leadersByMaritalStatus: neo4jgraphql 
  }
};
