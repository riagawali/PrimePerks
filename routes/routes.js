const express = require("express");
const router = express.Router();

const AdminController = require("./controllers/Admin.controllers");
const UserController = require("./controllers/User.controllers");
const ProductController = require("./controllers/Product.controllers");
const SubscriptionController = require("./controllers/Subscription.controllers");
const SubscriptionPlanController = require("./controllers/SubscriptionPlan.controllers");

router.post("/api/admins/register", AdminController.register);
router.post("/api/admins/login", AdminController.login);

router.post("/api/users/register", UserController.register);
router.post("/api/users/login", UserController.login);

router.get("/api/products", ProductController.getProducts);
router.post("/api/products", ProductController.createProduct);

router.get("/api/subscriptions", SubscriptionController.getSubscriptions);
router.post("/api/subscriptions", SubscriptionController.createSubscription);

router.get(
  "/api/subscription-plans",
  SubscriptionPlanController.getSubscriptionPlans
);
router.post(
  "/api/subscription-plans",
  SubscriptionPlanController.createSubscriptionPlan
);

module.exports = router;
