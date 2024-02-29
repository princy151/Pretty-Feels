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

const { Header, Content, Sider } = Layout;



const AdminDashboard: React.FC = () => {
    const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);


    const handleMenuClick = (key: string) => {
        setActiveMenuItem(key);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider breakpoint="lg" collapsedWidth="0">
                <div className="logo">Admin Dashboard</div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={(e) => handleMenuClick(e.key as string)}
                >
                    <Menu.SubMenu key="3" icon={<ShopOutlined />} title="Products">
                        <Menu.Item key="3.1" icon={<PlusOutlined />}>
                            Add Product
                        </Menu.Item>
                        <Menu.Item key="3.2" icon={<EditOutlined />}>
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
                        {activeMenuItem === '4.1' && <OrderTracking orders={[]} />}
                        {activeMenuItem === '4.2' && <OrderUpdate order={null} onUpdateOrder={function (updatedOrder: any): void {
                            throw new Error('Function not implemented.');
                        }} />}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminDashboard;
