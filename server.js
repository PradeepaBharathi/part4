
const express = require("express");
const multer = require("multer");

const path = require("path");

const app = express();
const port = 3000;


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(express.static("public"));

app.post("/upload", upload.single("file"), (req, res) => {

  const filePath = path.join(__dirname, "uploads", req.file.filename);
  console.log("Uploaded file:", filePath);

  res.send("File uploaded successfully");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
