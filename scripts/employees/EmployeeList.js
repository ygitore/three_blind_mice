import { useEmployees } from "./EmployeeProvider.js";
import { Employee } from "./Employee.js";
import { useComputers } from "../computers/ComputerProvider.js";
import { useDepartments } from "../departments/DepartmentProvider.js";
import { useEmployeeCustomers } from "../employeeCustomer/EmployeeCustomerProvider.js";
import { useCustomers } from "../customers/CustomerProvider.js";

const contentTarget = document.querySelector(".employeesContainer")

const render = employeesToRender => {

    const computers = useComputers()
    const departments = useDepartments()
    const employeeCustomer = useEmployeeCustomers()
    const customers = useCustomers()

    contentTarget.innerHTML = employeesToRender.map(
        (employeeObject) => {
            // Find the related computer for the current employee       
            const employeeComputer = computers.find(
                (computer) => {
                    return computer.id === employeeObject.computerId
                }
                )
                // Find the related department for the current employee
                const employeeDepartment = departments.find(
                    (department) => {
                        return department.id === employeeObject.departmentId
                    }
                    )
                // Get all customer relationships for the current employee
                const empCustomerRelation = employeeCustomer.filter(
                    empCust => {
                        return empCust.employeeId === employeeObject.id
                    }
                )
            
            // For each relationship, convert to corresponding customer object
            const customerObject = empCustomerRelation.map(
                thisCustomerRelation => {
                    const customer = customers.find(
                        thisCustomerObject => {
                            return thisCustomerObject.id === thisCustomerRelation.customerId
                        }
                    )
                    return customer
                }
            )
                    
            return Employee(
                employeeObject, 
                employeeComputer, 
                employeeDepartment, 
                customerObject
            )
        }
    ).join("")
}

export const EmployeeList = () => {
    const employees = useEmployees()
    render(employees)
}