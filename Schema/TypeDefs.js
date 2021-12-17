const { gql } = require("apollo-server-express");

const typeDefs = gql`
  
  type Employee {
    first_name: String!
    last_name: String!
    birth_day: Date!
    gender: Gender!
    employee_id: ID!
    new_hire: Boolean!
  }

  enum Gender {
    Male
    Female
  }
  scalar Date

  # Queries
  type Query {
    getAllEmployees: [Employee!]!
    getEmpID(ids: [Int]): [Employee]!
  },
  #Mutation
  type Mutation {
    createEmployee(first_name: String!, last_name:String!, birth_day: Date!, gender: Gender!, employee_id: ID!, new_hire:Boolean!): Employee!
    updateEmployee(first_name: String!, last_name:String!, birth_day: Date!, gender: Gender!, emp_id: ID!, new_hire:Boolean!): Employee
    deleteEmployee(emp_id: ID): [Employee]
  }
`;

module.exports = { typeDefs }
