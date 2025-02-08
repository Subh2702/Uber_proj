const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
    body('fullname.firstname').isString().notEmpty().withMessage("Firstname is required"),
    body('fullname.lastname').isString().notEmpty().withMessage("Lastname is required"),
    body('email').isEmail().withMessage("Invalid email format"),
    body('password').isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    body('vehicle.color').isString().notEmpty().withMessage("Vehicle color is required"),
    body('vehicle.plateNumber').isString().notEmpty().withMessage("Plate number is required"),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage("Capacity must be at least 1"),
    body('vehicle.vehicleType').isString().notEmpty().withMessage("Vehicle type is required")
], 
   captainController.registerCaptain
);

router.post('/login', [
    body('email').isEmail().withMessage("Invalid email format"),
    body('password').isLength({ min: 6 }).withMessage("Password must be at least 6 characters")
], 
   captainController.loginCaptain
)

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);
module.exports = router;