import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { UserIdProvider } from './contexts/UserContext'
import AboutPage from './pages/AboutPage'
import AdminLoginPage from './pages/AdminLoginPage'
import ContactPage from './pages/ContactPage'
import EditPostPage from './pages/EditPostPage'
import ExpertisePage from './pages/ExpertisePage'
import PostDetailPage from './pages/PostDetailPage'
import PostsPage from './pages/PostsPage'
import reportWebVitals from './reportWebVitals'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <UserIdProvider>
    <Router>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/expertise" element={<ExpertisePage />} />

        <Route path="/posts">
          <Route index element={<PostsPage />} />
          <Route path=":id" element={<PostDetailPage />} />
        </Route>

        <Route path="/editpostpage">
          <Route index element={<EditPostPage />} />
          <Route path=":id" element={<EditPostPage />} />
        </Route>

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />

        <Route path="*" element={<AboutPage />} />
      </Routes>
    </Router>
  </UserIdProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
