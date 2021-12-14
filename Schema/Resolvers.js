const { employees } = require("../EmployeeData");

const { GraphQLDateTime } = require("graphql-iso-date");

const customScalarResolver = {
    Date: GraphQLDateTime
  };

const resolvers = {
    Gender: {
        Male: "M",
        Female: "F",
      },
    Query: {
        getAllEmployees() {
            return employees;
        },
    },
};

module.exports = { customScalarResolver }
module.exports = { resolvers };