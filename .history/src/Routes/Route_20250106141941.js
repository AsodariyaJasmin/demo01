import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'

const Route = () => {
  return (
    <div>
         <BrowserRouter>
            {window.location.pathname !== "/error" ? <Navbar /> : null}
                <Routes>
                    <Route path="/columnone" element={<Columnone/>} />
                    <Route path="/columntwo" element={<ColumnTwo/>} />
                    <Route path="/gallery" element={<Gallery/>} />
                    <Route path="/switcher" element={<Switcher/>} />
                    <Route path="/service" element={<Services/>} />
                    <Route path="/blog" element={<Blog/>} />
                </Routes>
                {window.location.pathname !== "/error" && <Footer />}
            </BrowserRouter>
    </div>
  )
}

export default Route