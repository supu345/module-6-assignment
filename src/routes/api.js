const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogcontroller");
const blogDetailsController = require("../controllers/blogDetailsController");
const commentController = require("../controllers/commentController");
const messageController = require("../controllers/messageController");
const portfolioController = require("../controllers/portfolioController");
const productController = require("../controllers/productController");
const projectController = require("../controllers/projectController");
const profitController = require("../controllers/profitController");
const serviceController = require("../controllers/serviceController");
const titleController = require("../controllers/titleController");
//blog router
router.get("/blog/create", blogController.create);
router.get("/blog/read", blogController.read);
router.get("/blog/delete", blogController.delete);
router.get("/blog/update", blogController.update);

// Create routes for blogdetailscontroller
router.get("/blogdetails/create", blogDetailsController.create);
router.get("/blogdetails/read", blogDetailsController.read);
router.get("/blogdetails/delete", blogDetailsController.delete);
router.get("/blogdetails/update", blogDetailsController.update);

// Create routes for commentcontroller
router.get("/comment/create", commentController.create);
router.get("/comment/read", commentController.read);
router.get("/comment/delete", commentController.delete);
router.get("/comment/update", commentController.update);

// Create routes for messagecontroller
router.get("/message/create", messageController.create);
router.get("/message/read", messageController.read);
router.get("/message/delete", messageController.delete);
router.get("/message/update", messageController.update);

// Create routes for portfoliocontroller
router.get("/portfolio/create", portfolioController.create);
router.get("/portfolio/read", portfolioController.read);
router.get("/portfolio/delete", portfolioController.delete);
router.get("/portfolio/update", portfolioController.update);

// Create routes for productcontroller
router.get("/product/create", productController.create);
router.get("/product/read", productController.read);
router.get("/product/delete", productController.delete);
router.get("/product/update", productController.update);

// Create routes for profitcontroller
router.get("/profit/create", profitController.create);
router.get("/profit/read", profitController.read);
router.get("/profit/delete", profitController.delete);
router.get("/profit/update", profitController.update);

// Create routes for projectcontroller
router.get("/project/create", projectController.create);
router.get("/project/read", projectController.read);
router.get("/project/delete", projectController.delete);
router.get("/project/update", projectController.update);

// Create routes for servicecontroller
router.get("/service/create", serviceController.create);
router.get("/service/read", serviceController.read);
router.get("/service/delete", serviceController.delete);
router.get("/service/update", serviceController.update);

// Create routes for titlecontroller
router.get("/title/create", titleController.create);
router.get("/title/read", titleController.read);
router.get("/title/delete", titleController.delete);
router.get("/title/update", titleController.update);

module.exports = router;
