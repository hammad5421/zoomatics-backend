const fs = require("fs");
const path = require("path");

module.exports = (imagePath, res) => {
    fs.readFile(imagePath, (err, image) => {
        if (err) {
            console.error(err);
            return res.status(404).json({ message: "Image not found" });
        }

        const stats = fs.statSync(imagePath);
        const fileSize = stats.size;

        res.setHeader("Content-Type", "image/jpeg");
        res.setHeader("Content-Length", fileSize);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.send(image);
    });
};
