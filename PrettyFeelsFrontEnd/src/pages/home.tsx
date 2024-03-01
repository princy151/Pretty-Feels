import React, {useEffect, useState} from 'react';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/elegant-icons.css';
import './css/jquery-ui.min.css';
import './css/magnific-popup.css';
import './css/owl.carousel.min.css';
import './css/slicknav.min.css';
import './css/style.css';
import logo from './img/logo.png';
import {useNavigate} from "react-router-dom";

interface Product {
    id: number;
    productName: string;
    price: number;
    category: string;
    imageUrl: string;
}

interface ProductCardProps {
    product: Product;
    onViewClick: (data: { productId: number; quantity: number }) => void;
}

// @ts-ignore
const ProductCard: React.FC<ProductCardProps> = ({ product, onViewClick }) => {

    const navigate = useNavigate();

    // @ts-ignore
    const handleBuyClick = async (product) => {
        try {
            console.log(product)
            // Navigate to the review page with the updated product list
            navigate(`/review/${product.productId}`);
        } catch (error) {
            console.error('Error handling buy click:', error);
        }
    };


    return (
        <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.productName} className="product-image" />
            <p className="product-name">{product.productName}</p>
            <p className="product-price">Price: Rs.{product.price}</p>
            <p className="product-category">Category: {product.category}</p>
            <button className="view-button" onClick={() => handleBuyClick(product)}>View</button>
        </div>
    );
};


const HomePage: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
    const navigate = useNavigate();



    useEffect(() => {
        fetch('http://localhost:8080/item/getAll')
            .then((response) => response.json())
            .then((data: Product[]) => {
                console.log(data);  // Log the data to the console
                setProducts(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    const handleViewClick = (data: { productId: number; quantity: number }) => {
        const selectedProduct = products.find((product) => product.id === data.productId);

        if (selectedProduct) {
            setSelectedProductId(data.productId);
            navigate(`/review/${data.productId}`);
        }
    };

    useEffect(() => {
        // Navigate to the review page when selectedProductId changes
        if (selectedProductId !== null) {
            navigate(`/review/${selectedProductId}`);
        }
    }, [selectedProductId]);



    return (
        <>

            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-2">
                            <div className="header__logo">
                                <a href="/home">
                                    <img src={logo} width={50} height={50} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active">
                                        <a href="/home">Home</a>
                                    </li>
                                    <li>
                                        <a href="/shop">Shop</a>
                                    </li>
                                    <li>
                                        <a href="/admin">Admin</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__right">
                                <div className="header__right__auth">
                                    <a href="/login">Log out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open">
                        <i className="fa fa-bars" />
                    </div>
                </div>
            </header>

            <section className="categories">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div
                                className="categories__item categories__large__item set-bg">
                                <div className="categories__text">
                                    <h1>Women’s fashion</h1>
                                    <a href="/women">Shop now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="column">
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item category_men set-bg">
                                        <div className="categories__text">
                                            <h4>Men’s fashion</h4>
                                            <a href="/men">Shop now</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item category_cosmetic set-bg">
                                        <div className="categories__text">
                                            <h4>Cosmetics</h4>
                                            <a href="/cos">Shop now</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Categories Section End */}
            {/* Product Section Begin */}


            <div className="pro-dis" style={{display: 'flex', flexWrap: 'wrap', width: '100%', color: 'black'}}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onViewClick={handleViewClick} />
                ))}
            </div>

            {/* Product Section End */}


            {/* Services Section Begin */}
            <section className="services spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-car" />
                                <h6>Free Shipping</h6>
                                <p>For all oder over $99</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-money" />
                                <h6>Money Back Guarantee</h6>
                                <p>If good have Problems</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-support" />
                                <h6>Online Support 24/7</h6>
                                <p>Dedicated support</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-headphones" />
                                <h6>Payment Secure</h6>
                                <p>100% secure payment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services Section End */}

            {/* Footer Section Begin */}
            <footer className="footer">
                <div className="container">
                    <div className="row">

                    </div>
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="footer__copyright__text">
                                <p>
                                    Copyright © All rights reserved
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer Section End */}
            {/* Search Begin */}
            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch">+</div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>
        </>



    );
};

export default HomePage;
