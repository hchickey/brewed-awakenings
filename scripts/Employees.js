import { getEmployees, getOrders, getProducts } from "./database.js"
import { Orders } from "./Orders.js"

const employees = getEmployees()
const orders = getOrders()
const products = getProducts()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click", (event) => {
        const itemClicked = event.target
    if (itemClicked.id.startsWith("employee")) {
        const [,employeeId] = itemClicked.id.split("--")

        for (const employee of employees) {
            if (employee.id === parseInt(employeeId)) {
                window.alert(`${employee.name} sold ${employeeOrders(employee)} products `)
            }
        }
    }
}
)

const employeeOrders = (employee) => {
    const fulfillOrders = []

    for (const order of orders) {
        if (order.employeeId === employee.id) {
            fulfillOrders.push(order)
        }

    }
    let orderNum = fulfillOrders.length
    return orderNum
}
