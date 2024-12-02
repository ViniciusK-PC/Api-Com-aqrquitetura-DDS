import { Customer } from "../entities/Customer";

export interface ICustomerRepository {
  save(customer: Customer): Promise<Customer>;
  findAll(): Promise<Customer[]>;
  findById(id: string): Promise<Customer | undefined>;
  findByEmail(email: string): Promise<Customer | undefined>;
  removeById(id: string): Promise<string> 
}