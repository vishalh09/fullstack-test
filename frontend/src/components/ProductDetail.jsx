import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../features/products/productsSlice';
import { addToCart } from '../features/cart/cartSlice';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [dispatch, id]);

    const handleAddToCart = () => {
        dispatch(addToCart({ productId: product._id, quantity: 1 }));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!product) return <p>Product not found</p>;

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.imageUrl} alt={product.name} />
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;
