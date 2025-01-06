import mongoose from "mongoose";

const ContactSchema = mongoose.Schema(
  {
    userName: { type: String },
    phoneNumber: { type: String },
    email: { type: String },
    dateOfBirth: { type: Date },
    designation: { type: String },
  },
  { timestamps: true }
);

const Contact = mongoose.model("contact", ContactSchema);

export default Contact;
