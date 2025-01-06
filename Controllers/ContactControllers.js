import Contact from "../Model/ContactSchema.js";

const addContactController = async (req, res) => {
    try {
        const { userName, phoneNumber, email, designation, dateOfBirth } = req.body;
        if (!userName || !phoneNumber || !email || !designation || !dateOfBirth) {
            return res.status(400).json({ message: "All fields are required" });
        }
        // Basic validation
        if (!userName || !phoneNumber || !email || !designation || !dateOfBirth) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const contact = await  Contact.create({
            userName,
            phoneNumber,
            email,
            designation,
            dateOfBirth,
        });

        const savedContact = await contact.save();
        return res.status(201).json({
            message: "Contact added successfully",
            contact: savedContact
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to add contact" });
    }
};

const updateContactController =async (req, res) => {
    try {
        const {id} = req.params;
        const {userName, phoneNumber, email, designation, dateOfBirth } = req.body;
        const contact = await Contact.findByIdAndUpdate(id)
        if(!contact){
            res.status(404).json({ message: "Contact not found" });
        }
        contact.userName = userName;
        contact.phoneNumber = phoneNumber;
        contact.email = email;
        contact.designation = designation;
        contact.dateOfBirth = dateOfBirth;
        await contact.save();
        res.status(200).json({ message: "Contact updated successfully", contact });
    } catch (error) {
        res.status(500).json({ message: "Failed to update contact" });
    }
};
const deleteContactController = async(req, res) => {
const {id} = req.params;
const contact = await Contact.findByIdAndDelete(id);
if (!contact) {
    res.status(404).json({ message: "Contact not found" });
}
if (contact) {
    res.status(200).json({ message: "Contact deleted successfully", contact });
}


};

const getContactController = async (req, res) => {
    try {
        const contact = await Contact.find();
        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        return res.status(200).json(contact);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred while retrieving the contact" });
    }
};

const getContactByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await Contact.findById(id);
        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        return res.status(200).json(contact);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred while retrieving the contact" });
    }
 };





export {
  getContactController,
  addContactController,
  updateContactController,
  deleteContactController,
  getContactByIdController
};
