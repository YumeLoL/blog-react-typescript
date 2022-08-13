import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ExpertisePage from './pages/ExpertisePage'
import PostsPage from './pages/PostsPage'
import reportWebVitals from './reportWebVitals'
import PostDetailPage from './pages/PostDetailPage'
import AdminLoginPage from './pages/AdminLoginPage'
import { UserProvider } from './contexts/UserContext'
import EditPostPage from './pages/EditPostPage'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <UserProvider>
    <Router>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/expertise" element={<ExpertisePage />} />

        <Route path="/posts">
          <Route index element={<PostsPage />}></Route>
          <Route path=":id" element={<PostDetailPage />} />
        </Route>
        <Route path="/editpostpage" element={<EditPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />

        <Route
          path="*"
          element={<AboutPage />}
        />
      </Routes>
    </Router>
    
  </UserProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
