import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexLayout from "../layout/Index";


export default function Router() {

  return (
    <BrowserRouter>

      <Routes>

          <Route element={<IndexLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />

          </Route>
      </Routes>
    </BrowserRouter>
  )
}