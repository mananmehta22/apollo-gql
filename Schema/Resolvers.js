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
    Mutation: {
      createEmployee(parent, args) {
      const newEmployee = args;
      employees.push(newEmployee);
      return newEmployee;
    },
      updateEmployee(_, { first_name, last_name, birth_day, gender, emp_id, new_hire }) { 
        const emp = employees.find(_employee_id => emp_id ); 
        if (!emp) {
          throw new Error(`Couldn't find employee with id ${emp_id}`);
        }
        emp.first_name = first_name; 
        emp.last_name = last_name;
        emp.birth_day = birth_day;
        emp.gender = gender;
        emp.new_hire = new_hire;
        return emp;
}
    }
};

module.exports = { customScalarResolver }
module.exports = { resolvers };