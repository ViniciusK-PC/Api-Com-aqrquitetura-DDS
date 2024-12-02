import { eq } from "drizzle-orm";
import { Customer } from "../../domain/entities/Customer";
import { ICustomerRepository } from "../../domain/repositories/ICustomerRepository";
import { database as db } from "../db/drizzle"
import { tb_customers } from "../db/schema";

export class CustomerRepository implements ICustomerRepository {
  async save(customer: Customer): Promise<Customer> {
    await db.insert(tb_customers).values(customer)

    return customer;
  }

  async removeById(id: string): Promise<string> {
    await db.delete(tb_customers).where(eq(tb_customers.id, id))

    return id
  }

  async findAll(): Promise<Customer[]> {
    const customers = await db.select().from(tb_customers);
    return customers; 
  }

  async findById(id: string): Promise<Customer | undefined> {
    const customer = await db.query.tb_customers.findFirst({where: eq(tb_customers.id, id)})
    return customer
  }

  async findByEmail(email: string): Promise<Customer | undefined> {
    const customer = await db.query.tb_customers.findFirst({where: eq(tb_customers.email, email)})
    return customer
  }
}