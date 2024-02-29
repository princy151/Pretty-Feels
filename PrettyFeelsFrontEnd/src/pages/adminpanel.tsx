import React, {useState} from 'react';
import './css/adminpanel.css';
import DeletePro from "./deleteproduct.tsx";
import AddPro from "./addproduct.tsx";
import UpdatePro from "./updateproducts.tsx";
// import TopBar from "./components/topbar.tsx";



const Admin: React.FC = () => {

    const [selectedComponent, setSelectedComponent] = useState('add'); // Default is 'Add Product'

    const renderComponent = () => {
        switch (selectedComponent) {
            case 'add':
                return <AddPro />;
            case 'update':
                return <UpdatePro />;
            case 'delete':
                return <DeletePro />;
            default:
                return <AddPro />;
        }
    };
    return (
        <>

            <div className="admin-bg">
                <div className="holder">
                    <div className="button-holder">
                        <button className="admin-button" onClick={() => setSelectedComponent('add')}> Add Product</button>
                        <button className="admin-button" onClick={() => setSelectedComponent('update')}> Update Product</button>
                        <button className="admin-button" onClick={() => setSelectedComponent('delete')}> Delete Product</button>

                    </div>


                    {renderComponent()}


                </div>
            </div>

        </>
    );
};

export default Admin;