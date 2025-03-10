import React, { useState } from 'react'

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        })
        setError({
            ...error,
            [name]: ''
        })
    }

    console.log("error",error);
    
    const handleClick = () => {
        let error = {}
        if (!loginData?.email) {
            error = {
                ...error,
                email: "email is required"
            }

        }
        if (!loginData?.password) {
            error = {
                ...error,
                password: "password is required"
            }

        }
        setError(error)
        if (Object.keys(error).length > 0) {
            return
        }
    }
    return (
        <div>
            <html lang="en">
                <head>
                    <meta charset="utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="description" content="" />
                    <meta name="author" content="" />
                    <title>Login - SB Admin</title>
                    <link href="css/styles.css" rel="stylesheet" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js" crossorigin="anonymous"></script>
                </head>
                <body class="bg-primary">
                    <div id="layoutAuthentication">
                        <div id="layoutAuthentication_content">
                            <main>
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-5">
                                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                                <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                                                <div class="card-body">
                                                    <form>
                                                        <div class="form-floating mb-3">
                                                            <input class="form-control" id="inputEmail" name='email' value={loginData?.email} onChange={handleChange} type="email" placeholder="name@example.com" />
                                                            <label for="inputEmail">Email address</label>
                                                            {<p style={{ color: 'red' }}>{error?.email}</p>}
                                                        </div>
                                                        <div class="form-floating mb-3">
                                                            <input class="form-control" id="inputPassword" name='password' value={loginData?.password} onChange={handleChange} type="password" placeholder="Password" />
                                                            <label for="inputPassword">Password</label>
                                                            {<p style={{ color: 'red' }}>{error?.password}</p>}
                                                        </div>
                                                        <div class="form-check mb-3">
                                                            <input class="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                            <label class="form-check-label" for="inputRememberPassword">Remember Password</label>
                                                        </div>
                                                        <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                            <a class="small" href="/password">Forgot Password?</a>
                                                            <a class="btn btn-primary" onClick={handleClick}>Login</a>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="card-footer text-center py-3">
                                                    <div class="small"><a href="/register">Need an account? Sign up!</a></div>
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

export default Login