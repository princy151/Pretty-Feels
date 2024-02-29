import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    ShopOutlined,
    DropboxOutlined,
    SolutionOutlined,
    PlusOutlined,
    EditOutlined,
} from '@ant-design/icons';
import './admindashboard.css';
import OrderTracking from './ordertracking';
import ProductAddForm from './productaddtable';
import OrderUpdate from './orderupdate';
import ProductUpdate from './productlisttable';
import UpdatePro from "./editproducttable.tsx";
import logo from "./img/logo.png";

const { Header, Content, Sider } = Layout;



const AdminDashboard: React.FC = () => {
    const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);


    const handleMenuClick = (key: string) => {
        setActiveMenuItem(key);
    };


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
        <Layout style={{ minHeight: '100vh' }}>
            <Sider breakpoint="lg" collapsedWidth="0">
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    /*@ts-ignore*/
                    onClick={(e) => handleMenuClick(e.key as string)}
                >
                    <Menu.SubMenu key="3" icon={<ShopOutlined />} title="Products">
                        <Menu.Item key="3.1" icon={<PlusOutlined />}>
                            Add Product
                        </Menu.Item>
                        <Menu.Item key="3.2" icon={<EditOutlined />}>
                           Delete Product
                        </Menu.Item>
                        <Menu.Item key="3.3" icon={<EditOutlined />}>
                            Update Product
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="4" icon={<DropboxOutlined />} title="Orders">
                        <Menu.Item key="4.1" icon={<SolutionOutlined />}>
                            Track Order
                        </Menu.Item>
                        <Menu.Item key="4.2" icon={<EditOutlined />}>
                            Update Order
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background" />
                <Content style={{ margin: '16px' }}>
                    <div className="site-layout-background">

                        {activeMenuItem === '3.1' && <ProductAddForm /> }
                        {activeMenuItem === '3.2' && <ProductUpdate /> }
                        {activeMenuItem === '3.3' && <UpdatePro /> }
                        {activeMenuItem === '4.1' && <OrderTracking orders={[]} />}
                        {activeMenuItem === '4.2' && <OrderUpdate order={null} onUpdateOrder={function (): void {
                            throw new Error('Function not implemented.');
                        }} />}
                    </div>
                </Content>
            </Layout>
        </Layout>
        </>
    );
};

export default AdminDashboard;
