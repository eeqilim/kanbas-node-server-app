import express from 'express'
import Hello from "./Hello.js"
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
app.use(express.json());
Lab5(app);
Hello(app)
app.listen(process.env.PORT || 4000);