import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, type TypedUseSelectorHook, useSelector } from 'react-redux'
import { rootReducer, type RootState } from './reducers'

export const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = (): any => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
