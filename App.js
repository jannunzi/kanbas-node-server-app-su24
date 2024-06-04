import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";

import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);

Hello(app);
Lab5(app);
app.listen(4000);
