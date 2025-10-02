// src/store/accountsSlice.ts
import { createSlice } from '@reduxjs/toolkit';

export interface Account {
  id: string;
  name: string;
  balance: number; // in cents
}

const initialState: Account[] = [
  { id: 'usd', name: 'USD Account', balance: 2437580 },
  { id: 'eur', name: 'EUR Account', balance: 1215020 },
  { id: 'fx',  name: 'FX Wallet',  balance: 500000  },
];

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    // you can add actions here later (e.g. deposit, withdraw)
  },
});

export default accountsSlice.reducer;
