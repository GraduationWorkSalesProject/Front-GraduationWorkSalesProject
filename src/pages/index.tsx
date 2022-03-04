import { lazy } from 'react';

const JoinPage = lazy(() => import('./JoinPage'));
const LoginPage = lazy(() => import('./LoginPage'));
const MainPage = lazy(() => import('./MainPage'));
const ProductRegisterPage = lazy(() => import('./ProductRegisterPage'));
const ProductDetailPage = lazy(() => import('./ProductDetailPage'));
const SellerPage = lazy(() => import('./SellerPage'));
const MyPage = lazy(() => import('./MyPage'));
const MyLikeItemPage = lazy(() => import('./MyLikeItemPage'));
const ChattingPage = lazy(() => import('./ChattingPage'));
const ProductSearchPage = lazy(() => import('./ProductSearchPage'));

export {
  JoinPage,
  LoginPage,
  MainPage,
  ProductRegisterPage,
  ProductDetailPage,
  SellerPage,
  MyPage,
  MyLikeItemPage,
  ChattingPage,
  ProductSearchPage,
};
