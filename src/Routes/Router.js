import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Login from '../Admin/Login'
import Register from '../Admin/Register'
import Password from '../Admin/Password'
import Chart from '../Admin/Chart'
import Table from '../Admin/Table'
import Index from '../Admin/Index'
import StaticLayout from '../Admin/StaticLayout'
import SideNav from '../Admin/SideNav'
import Home from '../Admin/Home'

const Router = () => {
  return (
    <div>
         <BrowserRouter>
            {/* {window.location.pathname !== "/error" ? <Navbar /> : null} */}
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/index" element={<Index/>} />
                    <Route path="/staticlayout" element={<StaticLayout/>} />
                    <Route path="/sidenav" element={<SideNav/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/password" element={<Password/>} />
                    <Route path="/chart" element={<Chart/>} />
                    <Route path="/table" element={<Table/>} />
                </Routes>
                {/* {window.location.pathname !== "/error" && <Footer />} */}
            </BrowserRouter>
    </div>
  )
}

export default Router