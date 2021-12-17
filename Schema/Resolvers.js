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
      updateEmployee( root, args, context)
      {
        const emp = employees.find(o => o.employee_id == args.emp_id);
        if (!emp) {
          throw new Error(`Couldn't find employee with id ${args.emp_id}`);
        }
        if (args.first_name !== undefined) {
          emp.first_name = args.first_name; 
        }
        if (args.last_name !== undefined) {
          emp.last_name = args.last_name; 
        }
        if (args.gender !== undefined) {
          emp.gender = args.gender; 
        }
        if (args.birth_day !== undefined) {
          emp.birth_day = args.birth_day; 
        }
        if (args.new_hire !== undefined) {
          emp.new_hire = args.new_hire; 
        }
      return emp;
      },
      deleteEmployee(parent, args, context, info)
      {
        if (employees.hasOwnProperty(args.emp_id))
        {
        const emp = employees.filter(a => a.employee_id != args.emp_id)
        console.log(emp);
        return emp;
        }
        else {
          throw new Error(`Couldn't find employee with id ${args.emp_id}`);
        }
      },
    },
};

module.exports = { customScalarResolver }
module.exports = { resolvers };