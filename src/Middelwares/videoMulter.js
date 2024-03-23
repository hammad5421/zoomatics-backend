const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "public/Videos");
    },
    filename: (req, file, callback) => {
        callback(
            null,
            "recording_" + Date.now() + path.extname(file.originalname)
        );
    },
});

const upload = multer({
    storage: storage,
});

const recordingMiddleware = (req, res, next) => {
    upload.single("recording")(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json({ message: "Recording upload error" });
        } else if (err) {
            console.error(err);
            return res.status(500).json({ message: "Unknown error" });
        }
        next();
    });
};

module.exports = recordingMiddleware;
