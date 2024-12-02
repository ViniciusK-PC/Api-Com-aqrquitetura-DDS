import { Router } from "express";
import { CustomerController } from "./CustomerController.js";
const router = Router();
const customerController = new CustomerController();
router.post("/customer", customerController.register);
router.delete("/customer/:id", customerController.remove);
router.get("/customer", customerController.list);
router.get("/customer/:id/id", customerController.getById);
router.get("/customer/:email/email", customerController.getByEmail);
export default router;

//# sourceMappingURL=CustomerRoutes.js.map