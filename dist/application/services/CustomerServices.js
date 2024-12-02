import { randomUUID } from "crypto";
import bcrypt from "bcrypt";
export class GetCustomers {
    customerRepository;
    constructor(customerRepository){
        this.customerRepository = customerRepository;
    }
    async execute() {
        return this.customerRepository.findAll();
    }
}
export class GetCustomerById {
    customerRepository;
    constructor(customerRepository){
        this.customerRepository = customerRepository;
    }
    async execute(id) {
        return this.customerRepository.findById(id);
    }
}
export class GetCustomerByEmail {
    customerRepository;
    constructor(customerRepository){
        this.customerRepository = customerRepository;
    }
    async execute(email) {
        return this.customerRepository.findByEmail(email);
    }
}
export class RemoveById {
    customerRepository;
    constructor(customerRepository){
        this.customerRepository = customerRepository;
    }
    async execute(data) {
        const { id } = data;
        await this.customerRepository.removeById(id);
    }
}
export class RegisterCustomer {
    customerRepository;
    constructor(customerRepository){
        this.customerRepository = customerRepository;
    }
    async execute(data) {
        const { name, email, password } = data;
        const existingCustomer = await this.customerRepository.findByEmail(email);
        if (existingCustomer) {
            throw new Error("Customer already exists");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const customer = await this.customerRepository.save({
            id: randomUUID(),
            name,
            email,
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        return customer;
    }
}

//# sourceMappingURL=CustomerServices.js.map