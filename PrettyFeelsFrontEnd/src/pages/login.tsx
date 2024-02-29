import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/login.css';

const LoginForm: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        phoneNumber: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            let response;
            if (isLogin) {
                response = await axios.post('http://localhost:8080/user/validateLogin', {
                    username: formData.email,
                    password: formData.password
                });
            } else {
                response = await axios.post('http://localhost:8080/user/save', {
                    username: formData.email,
                    email: formData.email,
                    mobileNo: formData.phoneNumber,
                    password: formData.password
                });
            }
            console.log(response.data);
            navigate("/");
            alert('Success!');

        } catch (error: any) {
            setErrorMessage(error.response.data);

        }
    };

    return (
        <div className={"login-body"}>
            <div className="form-structor">
                <form onSubmit={handleSubmit}>
                    <div className={isLogin ? 'login' : 'login slide-up'}>
                        <div className="center">
                            <h2 className="form-title" id="login" onClick={toggleForm}><span>or</span>Log in</h2>
                            <div className="form-holder">
                                <input type="email" className="input" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="input"
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <label className="show-password">
                                    <input
                                        type="checkbox"
                                        checked={showPassword}
                                        onChange={togglePasswordVisibility}
                                    />
                                    Show Password
                                </label>
                            </div>
                            <button type="submit" className="submit-btn">{isLogin ? 'Log in' : 'Sign up'}</button>
                        </div>
                    </div>
                    <div className={isLogin ? 'signup slide-up' : 'signup'}>
                        <h2 className="form-title" id="signup" onClick={toggleForm}><span>or</span>Sign up</h2>
                        <div className="form-holder">
                            <input type="text" className="input" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
                            <input type="tel" className="input" placeholder="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                            <input type="email" className="input" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                            <input
                                type={showPassword ? "text" : "password"}
                                className="input"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <label className="show-password">
                                <input
                                    type="checkbox"
                                    checked={showPassword}
                                    onChange={togglePasswordVisibility}
                                />
                                Show Password
                            </label>
                        </div>
                        <button type="submit" className="submit-btn">Sign up</button>
                    </div>
                </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
        </div>
    );
};

export default LoginForm;
