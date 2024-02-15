// controllers
const categoryController = require("../../controllers/admin/categoryController");
const { fileUpload } = require("../../controllers/admin/fileUploadController");
const subCategoryController = require("../../controllers/admin/subCategoryController");

const countryController = require("../../controllers/admin/countryController");
const stateController = require("../../controllers/admin/stateController");


// express
const express = require("express");

// file upload middlware
const { upload, processImages } = require("../../middleware/fileUploadMiddle");
const createGodController = require("../../controllers/admin/addGodController");

const router = express.Router();


router.route("/create-category").post(upload.array('files', 1), processImages, categoryController.createCategory);

router.route("/create-sub-category").post(subCategoryController.createSubCategory);

router.route("/create-country").post(countryController.createCountry);
router.route("/create-state").post(stateController.createState);

router.route("/create-god").post(upload.array('files', 5), processImages, createGodController.createGod);

router.route("/file-upload").post(upload.array('files', 5), processImages, fileUpload);

module.exports = router;