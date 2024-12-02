import { randomUUID } from "crypto";
import { CustomerRepository } from "../../infra/repositories/CustomerRepository";
import bcrypt from "bcrypt"

export class GetCustomers { 
  constructor(private customerRepository: CustomerRepository) { }

  async execute() {
    return this.customerRepository.findAll()
  }
}

export class GetCustomerById {
  constructor(private customerRepository: CustomerRepository) {}

  async execute(id:string) {
    return this.customerRepository.findById(id)
  }
}

export class GetCustomerByEmail {
  constructor(private customerRepository: CustomerRepository) {}

  async execute(email:string) {
    return this.customerRepository.findByEmail(email)
  }
}

export class RemoveById {
  constructor(private customerRepository: CustomerRepository) {}

  async execute(data) {
    const { id } = data

    await this.customerRepository.removeById(id)
  }
}

export class RegisterCustomer {
  constructor(private customerRepository: CustomerRepository) {}
  async execute(data) {
    const { name, email, password } = data
    
    const existingCustomer = await this.customerRepository.findByEmail(email)
    if (existingCustomer) {
      throw new Error("Customer already exists")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const customer = await this.customerRepository.save({id: randomUUID(), name, email, password: hashedPassword, createdAt : new Date(), updatedAt: new Date() })

    return customer
  }
}