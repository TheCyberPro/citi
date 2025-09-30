import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
} from 'react'

type Account = {
  id: string
  name: string
  balance: number
}

type Store = {
  accounts: Account[]
  addAccount: (a: Account) => void
}

const initialStore: Store = {
  accounts: [],
  addAccount: () => {},
}

const StoreContext = createContext<Store>(initialStore)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [accounts, setAccounts] = useState<Account[]>([])

  function addAccount(a: Account) {
    setAccounts((prev) => [...prev, a])
  }

  return (
    <StoreContext.Provider value={{ accounts, addAccount }}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  return useContext(StoreContext)
}
