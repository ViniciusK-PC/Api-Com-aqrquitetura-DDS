import { GetCustomerByEmail, GetCustomerById, GetCustomers, RegisterCustomer, RemoveById } from "../../application/services/CustomerServices.js";
import { CustomerRepository } from "../../infra/repositories/CustomerRepository.js";
const customerRepository = new CustomerRepository();
const getCustomer = new GetCustomers(customerRepository);
const getCustomerById = new GetCustomerById(customerRepository);
const getCustomerByEmail = new GetCustomerByEmail(customerRepository);
const registerCustomer = new RegisterCustomer(customerRepository);
const removeById = new RemoveById(customerRepository);
export class CustomerController {
    async register(req, res) {
        try {
            const customer = await registerCustomer.execute(req.body);
            res.status(201).json(customer);
        } catch (error) {
            res.status(400).json({
                message: error
            });
        }
    }
    async remove(req, res) {
        try {
            await removeById.execute(req.params);
            res.sendStatus(204);
        } catch (error) {
            res.status(400).json({
                message: error
            });
        }
    }
    async list(req, res) {
        try {
            const customers = await getCustomer.execute();
            res.status(200).json(customers);
        } catch (error) {
            res.status(400).json({
                message: error
            });
        }
    }
    async getById(req, res) {
        const { id } = req.params;
        try {
            const customers = await getCustomerById.execute(id);
            res.status(200).json(customers);
        } catch (error) {
            res.status(400).json({
                message: error
            });
        }
    }
    async getByEmail(req, res) {
        const { email } = req.body;
        try {
            const customers = await getCustomerByEmail.execute(email);
            res.status(201).json(customers);
        } catch (error) {
            res.status(400).json({
                message: error
            });
        }
    }
}

//# sourceMappingURL=CustomerController.js.map