const express = require('express');
const { getCart, addToCart, removeFromCart } = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, getCart);
router.post('/', protect, addToCart);
router.delete('/:id', protect, removeFromCart);

module.exports = router;
