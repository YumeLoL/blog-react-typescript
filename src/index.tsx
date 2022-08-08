import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ExpertisePage from './pages/ExpertisePage'
import PostsPage from './pages/PostsPage'
import reportWebVitals from './reportWebVitals'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/expertise" element={<ExpertisePage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
