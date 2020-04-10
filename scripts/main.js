import { getEmployees } from "./employees/EmployeeProvider.js"
import { getDepartments } from "./departments/DepartmentProvider.js"
import { getComputers } from "./computers/ComputerProvider.js"
import { getCustomers } from "./customers/CustomerProvider.js"
import { getEmployeeCustomers } from "./employeeCustomer/EmployeeCustomerProvider.js"
import { EmployeeList } from "./employees/EmployeeList.js"

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getCustomers)
    .then(getEmployeeCustomers)
    .then(EmployeeList)
    