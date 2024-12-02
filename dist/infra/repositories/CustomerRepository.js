import { eq } from "drizzle-orm";
import { database as db } from "../db/drizzle.js";
import { tb_customers } from "../db/schema.js";
export class CustomerRepository {
    async save(customer) {
        await db.insert(tb_customers).values(customer);
        return customer;
    }
    async removeById(id) {
        await db.delete(tb_customers).where(eq(tb_customers.id, id));
        return id;
    }
    async findAll() {
        const customers = await db.select().from(tb_customers);
        return customers;
    }
    async findById(id) {
        const customer = await db.query.tb_customers.findFirst({
            where: eq(tb_customers.id, id)
        });
        return customer;
    }
    async findByEmail(email) {
        const customer = await db.query.tb_customers.findFirst({
            where: eq(tb_customers.email, email)
        });
        return customer;
    }
}

//# sourceMappingURL=CustomerRepository.js.map