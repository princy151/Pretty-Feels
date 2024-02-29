import React from 'react';
import './css/login.css';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/elegant-icons.css';
import './css/jquery-ui.min.css';
import './css/magnific-popup.css';
import './css/owl.carousel.min.css';
import './css/slicknav.min.css';
import './css/style.css';

const Shop: React.FC = () => {


    return (
        <>
            <div className="offcanvas-menu-overlay" />
            <div className="offcanvas-menu-wrapper">
                <div className="offcanvas__close">+</div>
                <ul className="offcanvas__widget">
                    <li>
                        <span className="icon_search search-switch" />
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon_heart_alt" />
                            <div className="tip">2</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon_bag_alt" />
                            <div className="tip">2</div>
                        </a>
                    </li>
                </ul>
                <div className="offcanvas__logo">
                    <a href="./index.html">
                        <img src="img/logo.png" alt="" />
                    </a>
                </div>
                <div id="mobile-menu-wrap" />
                <div className="offcanvas__auth">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
            </div>
            {/* Offcanvas Menu End */}
            {/* Header Section Begin */}
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-2">
                            <div className="header__logo">
                                <a href="./index.html">
                                    <img src="img/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <nav className="header__menu">
                                <ul>
                                    <li>
                                        <a href="/home">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">Women’s</a>
                                    </li>
                                    <li>
                                        <a href="#">Men’s</a>
                                    </li>
                                    <li className="active">
                                        <a href="/shop">Shop</a>
                                    </li>
                                    <li>
                                        <a href="#">Pages</a>
                                        <ul className="dropdown">
                                            <li>
                                                <a href="./product-details.html">Product Details</a>
                                            </li>
                                            <li>
                                                <a href="./shop-cart.html">Shop Cart</a>
                                            </li>
                                            <li>
                                                <a href="./checkout.html">Checkout</a>
                                            </li>
                                            <li>
                                                <a href="./blog-details.html">Blog Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="./blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="./contact.html">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__right">
                                <div className="header__right__auth">
                                    <a href="#">Login</a>
                                    <a href="#">Register</a>
                                </div>
                                <ul className="header__right__widget">
                                    <li>
                                        <span className="icon_search search-switch" />
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon_heart_alt" />
                                            <div className="tip">2</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon_bag_alt" />
                                            <div className="tip">2</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open">
                        <i className="fa fa-bars" />
                    </div>
                </div>
            </header>
            {/* Header Section End */}
            {/* Breadcrumb Begin */}
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="/home">
                                    <i className="fa fa-home" /> Home
                                </a>
                                <span>Shop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}
            {/* Shop Section Begin */}
            <section className="shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="shop__sidebar">
                                <div className="sidebar__categories">
                                    <div className="section-title">
                                        <h4>Categories</h4>
                                    </div>
                                    <div className="categories__accordion">
                                        <div className="accordion" id="accordionExample">
                                            <div className="card">
                                                <div className="card-heading active">
                                                    <a data-toggle="collapse" data-target="#collapseOne">
                                                        Women
                                                    </a>
                                                </div>
                                                <div
                                                    id="collapseOne"
                                                    className="collapse show"
                                                    data-parent="#accordionExample"
                                                >
                                                    <div className="card-body">
                                                        <ul>
                                                            <li>
                                                                <a href="#">Coats</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jackets</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Dresses</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">T-shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jeans</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseTwo">
                                                        Men
                                                    </a>
                                                </div>
                                                <div
                                                    id="collapseTwo"
                                                    className="collapse"
                                                    data-parent="#accordionExample"
                                                >
                                                    <div className="card-body">
                                                        <ul>
                                                            <li>
                                                                <a href="#">Coats</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jackets</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Dresses</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">T-shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jeans</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseThree">
                                                        Kids
                                                    </a>
                                                </div>
                                                <div
                                                    id="collapseThree"
                                                    className="collapse"
                                                    data-parent="#accordionExample"
                                                >
                                                    <div className="card-body">
                                                        <ul>
                                                            <li>
                                                                <a href="#">Coats</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jackets</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Dresses</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">T-shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jeans</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseFour">
                                                        Accessories
                                                    </a>
                                                </div>
                                                <div
                                                    id="collapseFour"
                                                    className="collapse"
                                                    data-parent="#accordionExample"
                                                >
                                                    <div className="card-body">
                                                        <ul>
                                                            <li>
                                                                <a href="#">Coats</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jackets</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Dresses</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">T-shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jeans</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseFive">
                                                        Cosmetic
                                                    </a>
                                                </div>
                                                <div
                                                    id="collapseFive"
                                                    className="collapse"
                                                    data-parent="#accordionExample"
                                                >
                                                    <div className="card-body">
                                                        <ul>
                                                            <li>
                                                                <a href="#">Coats</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jackets</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Dresses</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">T-shirts</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jeans</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar__filter">
                                    <div className="section-title">
                                        <h4>Shop by price</h4>
                                    </div>
                                    <div className="filter-range-wrap">
                                        <div
                                            className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                            data-min={33}
                                            data-max={99}
                                        />
                                        <div className="range-slider">
                                            <div className="price-input">
                                                <p>Price:</p>
                                                <input type="text" id="minamount" />
                                                <input type="text" id="maxamount" />
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#">Filter</a>
                                </div>
                                <div className="sidebar__sizes">
                                    <div className="section-title">
                                        <h4>Shop by size</h4>
                                    </div>
                                    <div className="size__list">
                                        <label htmlFor="xxs">
                                            xxs
                                            <input type="checkbox" id="xxs" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="xs">
                                            xs
                                            <input type="checkbox" id="xs" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="xss">
                                            xs-s
                                            <input type="checkbox" id="xss" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="s">
                                            s
                                            <input type="checkbox" id="s" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="m">
                                            m
                                            <input type="checkbox" id="m" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="ml">
                                            m-l
                                            <input type="checkbox" id="ml" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="l">
                                            l
                                            <input type="checkbox" id="l" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="xl">
                                            xl
                                            <input type="checkbox" id="xl" />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                </div>
                                <div className="sidebar__color">
                                    <div className="section-title">
                                        <h4>Shop by size</h4>
                                    </div>
                                    <div className="size__list color__list">
                                        <label htmlFor="black">
                                            Blacks
                                            <input type="checkbox" id="black" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="whites">
                                            Whites
                                            <input type="checkbox" id="whites" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="reds">
                                            Reds
                                            <input type="checkbox" id="reds" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="greys">
                                            Greys
                                            <input type="checkbox" id="greys" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="blues">
                                            Blues
                                            <input type="checkbox" id="blues" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="beige">
                                            Beige Tones
                                            <input type="checkbox" id="beige" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="greens">
                                            Greens
                                            <input type="checkbox" id="greens" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="yellows">
                                            Yellows
                                            <input type="checkbox" id="yellows" />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            data-setbg="img/shop/shop-1.jpg"
                                        >
                                            <div className="label new">New</div>
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-1.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_heart_alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_bag_alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                                <a href="#">Furry hooded parka</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            data-setbg="img/shop/shop-2.jpg"
                                        >
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-2.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_heart_alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_bag_alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                                <a href="#">Flowy striped skirt</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 49.0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            data-setbg="img/shop/shop-3.jpg"
                                        >
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-3.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_heart_alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_bag_alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                                <a href="#">Croc-effect bag</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            data-setbg="img/shop/shop-4.jpg"
                                        >
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-4.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_heart_alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_bag_alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                                <a href="#">Dark wash Xavi jeans</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item sale">
                                        <div
                                            className="product__item__pic set-bg"
                                            data-setbg="img/shop/shop-5.jpg"
                                        >
                                            <div className="label">Sale</div>
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-5.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_heart_alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_bag_alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                                <a href="#">Ankle-cuff sandals</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">
                                                $ 49.0 <span>$ 59.0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            data-setbg="img/shop/shop-6.jpg"
                                        >
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-6.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_heart_alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_bag_alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                                <a href="#">Contrasting sunglasses</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            data-setbg="img/shop/shop-7.jpg"
                                        >
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-7.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_heart_alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_bag_alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                                <a href="#">Circular pendant earrings</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item">
                                        <div
                                            className="product__item__pic set-bg"
                                            data-setbg="img/shop/shop-8.jpg"
                                        >
                                            <div className="label stockout stockblue">Out Of Stock</div>
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-8.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_heart_alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_bag_alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                                <a href="#">Cotton T-Shirt</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">$ 59.0</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="product__item sale">
                                        <div
                                            className="product__item__pic set-bg"
                                            data-setbg="img/shop/shop-9.jpg"
                                        >
                                            <div className="label">Sale</div>
                                            <ul className="product__hover">
                                                <li>
                                                    <a href="img/shop/shop-9.jpg" className="image-popup">
                                                        <span className="arrow_expand" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_heart_alt" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="icon_bag_alt" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6>
                                                <a href="#">Water resistant zips backpack</a>
                                            </h6>
                                            <div className="rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                            </div>
                                            <div className="product__price">
                                                $ 49.0 <span>$ 59.0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 text-center">
                                    <div className="pagination__option">
                                        <a href="#">1</a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <a href="#">
                                            <i className="fa fa-angle-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Section End */}
            {/* Instagram Begin */}
            <div className="instagram">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                data-setbg="img/instagram/insta-1.jpg"
                            >
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                data-setbg="img/instagram/insta-2.jpg"
                            >
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                data-setbg="img/instagram/insta-3.jpg"
                            >
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                data-setbg="img/instagram/insta-4.jpg"
                            >
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                data-setbg="img/instagram/insta-5.jpg"
                            >
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div
                                className="instagram__item set-bg"
                                data-setbg="img/instagram/insta-6.jpg"
                            >
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Instagram End */}
            {/* Footer Section Begin */}
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-7">
                            <div className="footer__about">
                                <div className="footer__logo">
                                    <a href="./index.html">
                                        <img src="img/logo.png" alt="" />
                                    </a>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt cilisis.
                                </p>
                                <div className="footer__payment">
                                    <a href="#">
                                        <img src="img/payment/payment-1.png" alt="" />
                                    </a>
                                    <a href="#">
                                        <img src="img/payment/payment-2.png" alt="" />
                                    </a>
                                    <a href="#">
                                        <img src="img/payment/payment-3.png" alt="" />
                                    </a>
                                    <a href="#">
                                        <img src="img/payment/payment-4.png" alt="" />
                                    </a>
                                    <a href="#">
                                        <img src="img/payment/payment-5.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-5">
                            <div className="footer__widget">
                                <h6>Quick links</h6>
                                <ul>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Blogs</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                    <li>
                                        <a href="#">FAQ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4">
                            <div className="footer__widget">
                                <h6>Account</h6>
                                <ul>
                                    <li>
                                        <a href="#">My Account</a>
                                    </li>
                                    <li>
                                        <a href="#">Orders Tracking</a>
                                    </li>
                                    <li>
                                        <a href="#">Checkout</a>
                                    </li>
                                    <li>
                                        <a href="#">Wishlist</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-8">
                            <div className="footer__newslatter">
                                <h6>NEWSLETTER</h6>
                                <form action="#">
                                    <input type="text" placeholder="Email" />
                                    <button type="submit" className="site-btn">
                                        Subscribe
                                    </button>
                                </form>
                                <div className="footer__social">
                                    <a href="#">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-youtube-play" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-instagram" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-pinterest" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            <div className="footer__copyright__text">
                                <p>
                                    Copyright © All rights reserved | This template is made with{" "}
                                    <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                                    <a href="https://colorlib.com" target="_blank">
                                        Colorlib
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
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

export default Shop;
