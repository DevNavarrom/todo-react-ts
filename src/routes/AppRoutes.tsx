import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { App, Login } from '../pages'

export const AppRoutes = (): React.ReactElement => {
  return (
    <Routes>
      <Route path='todos' element={<App />} />
      <Route path='login' element={<Login />} />

      <Route path="/*" element={ <Navigate to="/todos" /> } />
    </Routes>
  )
}
