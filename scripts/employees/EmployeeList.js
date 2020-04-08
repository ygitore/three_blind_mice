import { useEmployees } from "./EmployeeProvider.js";
import { Employee } from "./Employee.js";
import { useComputers } from "../computers/ComputerProvider.js";
import { useDepartments } from "../departments/DepartmentProvider.js";

const contentTarget = document.querySelector(".employeesContainer")

const render = employeesToRender => {
    const computers = useComputers()
    const departments = useDepartments()
    contentTarget.innerHTML = employeesToRender.map(
        (employeeObject) => {
            // Find the related computer for the current employee
            
            const employeeComputer = computers.find(
                (computer) => {
                    return computer.id === employeeObject.computerId
                }
            )
            const employeeDepartment = departments.find(
                (department) => {
                    return department.id === employeeObject.departmentId
                }
            )
            return Employee(employeeObject, employeeComputer, employeeDepartment)
        }
    ).join("")
}

export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}