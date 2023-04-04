const router = require('express').Router();
const jwtAuth = require('../middleware/jwtAuth');
const { root, login } = require("../controllers/authControllers");

router.post('/login', login);
router.post('/register', register);

module.exports = router;