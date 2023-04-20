import { Route, Routes } from 'react-router'
import { AppRoutes } from './AppRoutes'

export const AppRouter = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/*" element={ <AppRoutes /> } />
    </Routes>
  )
}
