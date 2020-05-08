const asyncHandler = require('../../middleware/async');
const Product = require('../../models/Product');
const ErrorResponse = require('../../utils/errorResponse');

const updateRating = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { rate } = req.body;
    console.log('req.body',req.body);
    
    console.log('rate',rate);
    
    const productToUpdate = await Product.findById(id);

if (!productToUpdate) {
        return next(new ErrorResponse('Product not found', 404));
    }
    productToUpdate.rate.push(+rate);
    productToUpdate.save();
    res.status(200).send('rating updated');
})
module.exports = { updateRating };