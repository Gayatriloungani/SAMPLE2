import React, { useEffect } from 'react';
import counter from "./features/counter/Counter";
import Home from './pages/Home'
import './App.css';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import CartPage from './features/cart/Cart';
import Checkout from './pages/Checkout';
import Protected from './features/auth/components/Protected';
import ProductDetailPage from './pages/ProductDetailPage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import { selectLoggedInUser } from './features/auth/authSlice';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  // {
  //   path: '/admin',
  //   element: (
  //     <ProtectedAdmin>
  //       <AdminHome></AdminHome>
  //     </ProtectedAdmin>
  //   ),
  // },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>,
  },
  {
    path: '/cart',
    element: (
      <Protected>
        <CartPage></CartPage>
      </Protected>
   
    ),
  },
  {
    path: '/checkout',
    element: (
      <Protected>
        <Checkout></Checkout>
      </Protected>
    ),
  },
  {
    path: '/product-detail/:id',
    element: (
      <Protected>
        <ProductDetailPage></ProductDetailPage>
      </Protected>
    ),
  },
  // {
  //   path: '/admin/product-detail/:id',
  //   element: (
  //     <ProtectedAdmin>
  //       <AdminProductDetailPage></AdminProductDetailPage>
  //     </ProtectedAdmin>
  //   ),
  // },
  // {
  //   path: '/admin/product-form',
  //   element: (
  //     <ProtectedAdmin>
  //       <AdminProductFormPage></AdminProductFormPage>
  //     </ProtectedAdmin>
  //   ),
  // },
  // {
  //   path: '/admin/orders',
  //   element: (
  //     <ProtectedAdmin>
  //       <AdminOrdersPage></AdminOrdersPage>
  //     </ProtectedAdmin>
  //   ),
  // },
  // {
  //   path: '/admin/product-form/edit/:id',
  //   element: (
  //     <ProtectedAdmin>
  //       <AdminProductFormPage></AdminProductFormPage>
  //     </ProtectedAdmin>
  //   ),
  // },
  // {
  //   path: '/order-success/:id',
  //   element: (
  //     <Protected>
  //       <OrderSuccessPage></OrderSuccessPage>{' '}
  //     </Protected>
  //   ),
  // },
  // {
  //   path: '/my-orders',
  //   element: (
  //     <Protected>
  //       <UserOrdersPage></UserOrdersPage>{' '}
  //     </Protected>
  //   ),
  // },
  // {
  //   path: '/profile',
  //   element: (
  //     <Protected>
  //       <UserProfilePage></UserProfilePage>{' '}
  //     </Protected>
  //   ),
  // },
  // {
  //   path: '/stripe-checkout/',
  //   element: (
  //     <Protected>
  //       <StripeCheckout></StripeCheckout>
  //     </Protected>
  //   ),
  // },
  // {
  //   path: '/logout',
  //   element: <Logout></Logout>,
  // },
  // {
  //   path: '/forgot-password',
  //   element: <ForgotPasswordPage></ForgotPasswordPage>,
  // },
  // {
  //   path: '/reset-password',
  //   element: <ResetPasswordPage></ResetPasswordPage>,
  // },
  // {
  //   path: '*',
  //   element: <PageNotFound></PageNotFound>,
  // },
]);

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser)
  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
    }
    
  }, [dispatch,user])
  return (
    <div className="App">
      <RouterProvider router = {router} />
        
    </div>
  );
}

export default App;