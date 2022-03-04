import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import UseScrollTop from './hooks/useScrollTop';
import {
  JoinPage,
  LoginPage,
  MainPage,
  MyLikeItemPage,
  MyPage,
  ProductRegisterPage,
  ProductDetailPage,
  SellerPage,
  ChattingPage,
  ProductSearchPage,
} from './pages';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <BrowserRouter>
      <UseScrollTop />
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/join" component={JoinPage} />
        <Route path="/sellerInfo" component={SellerPage} />
        <Route path="/products/:id" component={ProductDetailPage} />
        <Route path="/productRegister" component={ProductRegisterPage} />
        <Route path="/myPage" component={MyPage} />
        <Route path="/myLikeItem" component={MyLikeItemPage} />
        <Route path="/searchProduct" component={ProductSearchPage} />
        <Route path="/chatting" component={ChattingPage} />
        <Route path="/chatting/:chatId" component={ChattingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
