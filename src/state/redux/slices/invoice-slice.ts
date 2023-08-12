import {createSlice,
  type PayloadAction,
  createAsyncThunk,} from '@reduxjs/toolkit';

import { type Invoice } from '../../../models/invoice';

const initialState: { invoices: Invoice[] } = {
  invoices: [],
};

export const invoiceSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    addInvoice: (state, action: PayloadAction<Invoice>) => {
      state.invoices.push(action.payload);
    },

    editInvoice: (state, action: PayloadAction<Invoice>) => {
      const index = state.invoices.findIndex(
        (invoice) => invoice.id === action.payload.id,
      );

      if (index !== -1) {
        state.invoices[index] = action.payload;
      }
    },

    // pass `id` as payload
    deleteInvoiceById: (state, action: PayloadAction<string>) => {
      const index = state.invoices.findIndex(
        (invoice) => invoice.id === action.payload,
      );

      if (index !== -1) {
        state.invoices.splice(index, 1);
      }
    },
  },
});
