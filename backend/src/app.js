import express from "express";
import cors from "cors";

import health from "./routes/healthRoutes.js";
import products from "./routes/productRoutes.js";
import orders from "./routes/orderRoutes.js";
import users from "./routes/userRoutes.js";
import orderitems from "./routes/orderitemsRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/health", health);
app.use("/product", products);
app.use("/orders", orders);
app.use("/users", users);
app.use("/orderItems", orderitems);

export default app;