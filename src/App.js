import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { useState } from 'react'
import Home from './pages/Product/Home'
import AboutUs from './pages/AboutUs'
import Register from './pages/Product/Register'
import Login from './pages/Product/Login'
import Logout from './pages/Product/Logout'
import Profile from './pages/Product/Profile'
import Cart from './pages/Product/Cart'
import OrderApp from './pages/order/OrderApp'
import OrderFinal from './pages/OrderFinal'
import OrderForm from './pages/OrderForm'
import OrderMember from './pages/OrderMember'
import ProductDetail from './pages/ProductDetail'
import ProductCollect from './pages/ProductCollect'
import MemberPage from './pages/MemberPage'
// import NotFoundPage from './pages/NotFoundPage'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import ScrollToTop from './components/ScrollToTop'
import MultiLevelMatchBreadCrumb from './components/MultiLevelMatchBreadCrumb'
import { AuthProvider } from './utils/useAuth'

import ProductPages from './pages/Product/ProductPages'
// 切換頁面捲動至最上方

// 匯入 Cart 要用的 ContextProvider
import { CartProvider } from './utils/useCart'
import { SecondCartProvider } from './utils/useSecondCart'
import OrderDetail from './pages/OrderDetail'

// 也可以直接載入cart範例
// 下面程式碼需改為. `<CartProvider initialCartItems={cartData}>`
// import cartData from './data/cart.json'

function App() {
  return (
    <SecondCartProvider localStorageKey="secondCart">
      <CartProvider>
        <AuthProvider>
          <BrowserRouter>
            <MyNavbar />
            <MainContent>
              <MultiLevelMatchBreadCrumb />
              <ScrollToTop>
                <Routes>
                  <Route path="*" element={<Home />} />
                  <Route path="about" element={<AboutUs />} />
                  <Route path="login" element={<Login />} />
                  <Route path="logout" element={<Logout />} />
                  <Route path="product-pages" element={<ProductPages />} />
                  <Route path="collect" element={<ProductCollect />} />
                  <Route path="detail" element={<ProductDetail />} />
                  <Route path="memberpage" element={<MemberPage />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="register" element={<Register />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="order" element={<OrderApp />} />
                  {/* <Route path="home" element={<NotFoundPage />} /> */}
                  <Route path="orderfinal" element={<OrderFinal />} />
                  <Route path="orderform" element={<OrderForm />} />
                  <Route path="ordermember" element={<OrderMember />} />
                  <Route path="orderdetail" element={<OrderDetail />} />
                </Routes>
              </ScrollToTop>
            </MainContent>
            <MyFooter />
          </BrowserRouter>
        </AuthProvider>
      </CartProvider>
    </SecondCartProvider>
  )
}

export default App
