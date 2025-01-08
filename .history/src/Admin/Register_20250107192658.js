import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [signupData, setLoginData] = useState({
        firstname:"",
        lastname:"",
        email: "",
        password: "",
        confirmpassword:""
    });
    const [error, setError] = useState({
         firstname:"",
        lastname:"",
        email: "",
        password: "",
        confirmpassword:""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...signupData,
            [name]: value,
        });
        setError({
            ...error,
            [name]: "",
        });
    };

    const handleClick = () => {
        let newError = {};
        if (!signupData?.email) {
            newError.email = "Email is required";
        }
        if (!signupData?.password) {
            newError.password = "Password is required";
        }
        if (!signupData?.firstname) {
            newError.firstname = "FirstName is required";
        }
        if (!signupData?.lastname) {
            newError.lastname = "LastName is required";
        }
        if (!signupData?.confirmpassword) {
            newError.confirmpassword = "LastName is required";
        }
        setError(newError);

        if (Object.keys(newError).length > 0)
            return;
        navigate('/login')
    };
    return (
        <div>
            <html lang="en">
                <head>
                    <meta charset="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="description" content="" />
                    <meta name="author" content="" />
                    <title>Register - SB Admin</title>
                    <link href="css/styles.css" rel="stylesheet" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js" crossorigin="anonymous"></script>
                </head>
                <body class="bg-primary">
                    <div id="layoutAuthentication">
                        <div id="layoutAuthentication_content">
                            <main>
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-7">
                                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                                <div class="card-header"><h3 class="text-center font-weight-light my-4">Create Account</h3></div>
                                                <div class="card-body">
                                                    <form>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control"   onChange={handleChange} value={signupData?.firstname} name='firstname' id="inputFirstName" type="text" placeholder="Enter your first name" />
                                                                    <label for="inputFirstName">First name</label>
                                                                    {error.firstname && <p className="text-danger">{error.firstname}</p>}
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating">
                                                                    <input class="form-control" name='lastname'  onChange={handleChange} value={signupData?.lastname}  id="inputLastName" type="text" placeholder="Enter your last name" />
                                                                    <label for="inputLastName">Last name</label>
                                                                    {error.lastname && <p className="text-danger">{error.lastname}</p>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-floating mb-3">
                                                            <input class="form-control" name='email'   onChange={handleChange} value={signupData?.email}  id="inputEmail" type="email" placeholder="name@example.com" />
                                                            {error.email && <p className="text-danger">{error.email}</p>}
                                                            <label for="inputEmail">Email address</label>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" name='password'  onChange={handleChange} value={signupData?.password}  id="inputPassword" type="password" placeholder="Create a password" />
                                                                    <label for="inputPassword">Password</label>
                                                                    {error.password && <p className="text-danger">{error.password}</p>}
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-floating mb-3 mb-md-0">
                                                                    <input class="form-control" name='confirmpassword'  onChange={handleChange} value={signupData?.confirmpassword}  id="inputPasswordConfirm" type="password" placeholder="Confirm password" />
                                                                    <label for="inputPasswordConfirm">Confirm Password</label>
                                                                    {error.confirmpassword && <p className="text-danger">{error.confirmpassword}</p>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="mt-4 mb-0">
                                                            <div class="d-grid"><a class="btn btn-primary btn-block" onClick={handleClick}>Create Account</a></div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="card-footer text-center py-3">
                                                    <div class="small"><a href="/login">Have an account? Go to login</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                        <div id="layoutAuthentication_footer">
                            <footer class="py-4 bg-light mt-auto">
                                <div class="container-fluid px-4">
                                    <div class="d-flex align-items-center justify-content-between small">
                                        <div class="text-muted">Copyright &copy; Your Website 2021</div>
                                        <div>
                                            <a href="#">Privacy Policy</a>
                                            &middot;
                                            <a href="#">Terms &amp; Conditions</a>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </div>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
                    <script src="js/scripts.js"></script>
                </body>
            </html>

        </div>
    )
}

export default Register