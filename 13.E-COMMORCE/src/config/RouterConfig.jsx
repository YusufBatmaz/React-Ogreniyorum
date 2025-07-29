import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import ProductDetails from '../components/ProductDetails'

export default function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      {/* other routes */}
    </Routes>
  );
}