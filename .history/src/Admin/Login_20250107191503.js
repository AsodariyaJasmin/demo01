import React, { useState } from "react";
import { useNavigate, } from "react-router-dom";

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
        setError({
            ...error,
            [name]: "",
        });
    };

    const handleClick = () => {
        let newError = {};
        if (!loginData?.email) {
            newError.email = "Email is required";
        }
        if (!loginData?.password) {
            newError.password = "Password is required";
        }
        setError(newError);

        if (Object.keys(newError).length > 0) 
        return;
        navigate('/index')
    };

    return (
        <div className="bg-primary d-flex align-items-center justify-content-center vh-100">
            <div className="card shadow-lg border-0 rounded-lg" style={{ width: "400px" }}>
                <div className="card-header text-center">
                    <h3 className="font-weight-light my-4">Login</h3>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-floating mb-3">
                            <input
                                className="form-control"
                                id="inputEmail"
                                name="email"
                                value={loginData?.email}
                                onChange={handleChange}
                                type="email"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="inputEmail">Email Address</label>
                            {error.email && <p className="text-danger">{error.email}</p>}
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                className="form-control"
                                id="inputPassword"
                                name="password"
                                value={loginData?.password}
                                onChange={handleChange}
                                type="password"
                                placeholder="Password"
                            />
                            <label htmlFor="inputPassword">Password</label>
                            {error.password && <p className="text-danger">{error.password}</p>}
                        </div>
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                id="inputRememberPassword"
                                type="checkbox"
                            />
                            <label className="form-check-label" htmlFor="inputRememberPassword">
                                Remember Password
                            </label>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                            <a className="small text-decoration-none" href="/password">
                                Forgot Password?
                            </a>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleClick}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                <div className="card-footer text-center py-3">
                    <div className="small">
                        <a href="/register">Need an account? Sign up!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
