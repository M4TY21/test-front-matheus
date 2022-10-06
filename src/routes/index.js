import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ConfirmPage } from '../pages/ConfirmPage'
import { Payment } from '../pages/Payment'
import { Cart } from '../pages/Cart'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirm" element={<ConfirmPage />} />
      </Routes>
    </BrowserRouter>
  )
}
