import express from "express";
import {
  addContactController,
  deleteContactController,
  getContactByIdController,
  getContactController,
  updateContactController,
} from "../Controllers/ContactControllers.js";

const ContactRoutes = express.Router();

ContactRoutes.get("/", getContactController);
ContactRoutes.post("/add", addContactController);
ContactRoutes.put("/update/:id", updateContactController);
ContactRoutes.delete("/delete/:id", deleteContactController);
ContactRoutes.get("/:id",getContactByIdController)

export default ContactRoutes;
