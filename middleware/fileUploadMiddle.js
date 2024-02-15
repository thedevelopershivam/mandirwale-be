const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs").promises; // Using fs.promises for async file operations
const AppError = require("../util/function/appError");

const imageMimeTypes = ["image/jpg", "image/jpeg", "image/png", "image/gif", "image/webp", "image/svg", "image/bmp", "image/tiff", "image/tif", "image/heif", "image/heic"];

const imageFilter = (req, file, cb) => {
    if (imageMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new AppError('Invalid file type. Only image files are allowed.', 400), false);
    }
};

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: imageFilter,
    limits: {
        files: 5,
    },
});

const destinationFolder = path.join(__dirname, "../assets/images/temples/actual");
const processImageFolder = path.join(__dirname, "../assets/images/temples/process");

const processImages = async (req, res, next) => {

    console.clear()
    console.log(req)

    if (!req.files || req.files.length === 0) {
        return next();
    }

    req.processedImages = [];

    // Create the destination folder if it doesn't exist
    await fs.mkdir(destinationFolder, { recursive: true });

    // Process and save each file with sharp
    await Promise.all(
        req.files.map(async (file) => {
            const processedImageBuffer = await sharp(file.buffer)
                .resize({ width: 400, height: 400, fit: 'inside' }) // Adjust resize options as needed
                .toBuffer();

            const originalImagePath = path.join(destinationFolder, `${Date.now()}${Math.floor(1000 + Math.random() * 9000)}-${file.originalname}`);
            const processedImagePath = path.join(processImageFolder, `processed_${Date.now()}${Math.floor(1000 + Math.random() * 9000)}-${file.originalname}`);

            // Save the original image
            await fs.writeFile(originalImagePath, file.buffer);

            // Save the processed image
            await fs.writeFile(processedImagePath, processedImageBuffer);

            req.processedImages.push({
                originalname: file.originalname,
                mimetype: file.mimetype,
                originalImagePath,
                processedImagePath,
            });
        })
    );

    next();

};

module.exports = { upload, processImages };
