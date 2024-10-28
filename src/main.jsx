import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './Pages/Home'
import Workout from './Pages/Workout/Workout'
import Diet from './Pages/Diet/Diet'
import Login from './components/Login'
import Resources from './Pages/Resources/Resources'
import PdfViewer from './Pages/Resources/PdfViewer'
import DietPdf from './Pages/Resources/DietPdf'
import WorkoutPdf from './Pages/Resources/WorkoutPdf'


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<App/>}>
        <Route path='' element={<Home/>}/>
        <Route path='Workout' element={<Workout/>}/>
        <Route path='Diet' element={<Diet/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Resources' element={<Resources/>}/>
        <Route path="pdf/Deit.pdf" element={<DietPdf />} />
        <Route path="pdf/WorkOut.pdf" element={<WorkoutPdf />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
