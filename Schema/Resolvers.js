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
        getEmpID(parent, args, context, info) {
          const { ids } = args;
          if (ids == 0)
          {
            return employees;
          }
          var result = [];
          var arrayLength = ids.length;
          for (var i = 0; i < arrayLength; i++) {
            for (let item of employees) {
              if (item.employee_id === ids[i]) {
                result.push(item);
            }
          }
          }
        return result;
        },
    },
};

module.exports = { customScalarResolver }
module.exports = { resolvers };