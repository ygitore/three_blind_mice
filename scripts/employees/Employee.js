export const Employee = (employeeObject, computerObject, departmentObject, customerObject) => {
    return `
        <section class="employee">
            <h4>Employee Name: ${employeeObject.firstName} ${employeeObject.lastName}</h4>
            <div>Age: ${employeeObject.age}</div>
            <div>Current computer: ${computerObject.year} ${computerObject.model}</div>
            <div>Department: ${departmentObject.name}</div>
            <div>Assisted: 
                <ul>
                    ${
                        customerObject.map(customer => `<li>${customer.name}</li>`).join("")
                    }
                </ul>
            </div>
        </section>
    `
}