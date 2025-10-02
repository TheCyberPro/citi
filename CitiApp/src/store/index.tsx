import React, { PropsWithChildren } from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useSelector, TypedUseSelectorHook } from 'react-redux'
import accountsReducer, { Account } from './accountsSlice'

export const store = configureStore({
  reducer: { accounts: accountsReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// strongly typed useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// slice selector
export const selectAccounts = (state: RootState) => state.accounts

// convenience hook for accounts
export function useAccounts() {
  return useAppSelector(selectAccounts)
}

export function StoreProvider({ children }: PropsWithChildren<{}>) {
  return <Provider store={store}>{children}</Provider>
}
