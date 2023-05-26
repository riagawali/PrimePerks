const Subscription = require("../model/Subscription");

const createSubscription = async (req, res) => {
  try {
    const { userId, planId } = req.body;
    const subscription = new Subscription({ userId, planId });
    await subscription.save();
    res.json({ message: "Subscription created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create subscription" });
  }
};

module.exports = {
  createSubscription,
};
