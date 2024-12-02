import { GetCustomerByEmail, GetCustomerById, GetCustomers, RegisterCustomer, RemoveById } from "../../application/services/CustomerServices";
import { CustomerRepository } from "../../infra/repositories/CustomerRepository";
import { Request, Response } from "express"

const customerRepository = new CustomerRepository()
const getCustomer = new GetCustomers(customerRepository)
const getCustomerById = new GetCustomerById(customerRepository)
const getCustomerByEmail = new GetCustomerByEmail(customerRepository)
const registerCustomer = new RegisterCustomer(customerRepository)
const removeById = new RemoveById(customerRepository)


export class CustomerController {
  async register(req: Request, res: Response) {
    try {
      const customer = await registerCustomer.execute(req.body)
      res.status(201).json(customer)
    } catch (error) {
      res.status(400).json({message: error})
    }
  }

  async remove(req: Request, res: Response) {
    try {
      await removeById.execute(req.params)
      res.sendStatus(204)

    } catch (error) {
      res.status(400).json({message: error})
    }
  }

  async list(req: Response, res: Response) {
    try {
      const customers = await getCustomer.execute()
      res.status(200).json(customers)
    } catch (error) {
      res.status(400).json({message: error})
    }
  }

  async getById(req : Request, res : Response) {
    const { id } = req.params
    try {
      const customers = await getCustomerById.execute(id)
      res.status(200).json(customers)
    } catch (error) {
      res.status(400).json({message: error})
    }
  }

  async getByEmail(req : Request, res : Response) {
    const { email } = req.body
    try {
      const customers = await getCustomerByEmail.execute(email)
      res.status(201).json(customers)
    } catch (error) {
      res.status(400).json({message: error})
    }
  }
}