import { EmployeeList } from "./employees/EmployeeList.js"
import { getDepartments } from "./departments/DepartmentProvider.js"
import { getComputers } from "./computers/ComputerProvider.js"
import { getEmployees } from "./employees/EmployeeProvider.js"

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(EmployeeList)
    