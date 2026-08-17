import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { LocaleProvider } from './i18n/LocaleProvider'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'

function RedirectHome() {
  const location = useLocation()
  return <Navigate to={{ pathname: '/', search: location.search, hash: location.hash }} replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <LocaleProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="projects/:id" element={<ProjectPage />} />
            <Route path="*" element={<RedirectHome />} />
          </Route>
        </Routes>
      </LocaleProvider>
    </BrowserRouter>
  )
}
