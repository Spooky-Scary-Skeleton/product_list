import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ProductDetail from "./components/routes/ProductDetail";
import ProductList from "./components/routes/ProductList";

const App: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/detail/:productId" element={<ProductDetail />} />
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </div>
  );
};

export default App;
