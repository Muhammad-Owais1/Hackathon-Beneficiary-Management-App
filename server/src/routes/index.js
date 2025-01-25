import { Router } from "express";
import adminRoutes from "../modules/admin/routes.js";
// import receptionistRoutes from "../modules/receptionist/routes.js";
// import seekerRoutes from "../modules/seeker/routes.js";
// import staffRoutes from "../modules/staff/routes.js";

const router = Router();

router.use("/admin", adminRoutes);
// router.use("/receptionist", receptionistRoutes);
// router.use("/seeker", seekerRoutes);
// router.use("/staff", staffRoutes);

export default router;
