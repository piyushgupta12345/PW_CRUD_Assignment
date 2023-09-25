const express = require("express");
const router = express.Router();

// import controllers
const {createUser} = require("../controllers/createUser")
const {getUser} = require("../controllers/getUser")
// const {signUp} = require("../controllers/signUp");


// define routes
router.post('/create', createUser);
router.get('/get/:user', getUser);
// router.post("/signUp", signUp);

// export router
module.exports = router;