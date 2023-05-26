const Admin = require("../model/Admin");

const createAdmin = async (req, res) => {
  try {
    const { email, name, password, phoneNumber } = req.body;
    const admin = new Admin({ email, name, password, phoneNumber });
    await admin.save();
    res.json({ message: "Admin created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create admin" });
  }
};

module.exports = {
  createAdmin,
};
