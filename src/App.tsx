import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import {
  JoinPage,
  LoginPage,
  MainPage,
  MyLikeItemPage,
  MyPage,
  ProductDetailPage, 
  ProductRegisterPage,
  SellerPage, 
} from './pages';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/join" component={JoinPage} />
        <Route path="/sellerInfo" component={SellerPage} /> 
        <Route path="/products" component={ProductDetailPage} />
        <Route path="/productRegister" component={ProductRegisterPage} />
        <Route path="/myPage" component={MyPage} />
        <Route path="/myLikeItem" component={MyLikeItemPage} /> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
