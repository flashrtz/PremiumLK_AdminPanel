import React, { Component, Fragment } from "react";
import { HashRouter, Switch, Route, withRouter } from "react-router-dom";
import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";
import Index from "./pages/Index/index1";
import "bootstrap/dist/css/bootstrap.min.css";
import "sweetalert2/src/sweetalert2.scss";

import $ from "jquery";

import "./App.css";
import "./Vendor.js";

import Maintenance from "./pages/utilities/maintenance";

import { getProducts } from "./actions";
import { connect } from "react-redux";

import Scrolltop from "./layout/back-to-top";

//admin
import Login from "./pages/admin/auth/login";

import AddProduct from "./pages/admin/addproduct";
import ViewOrders from "./pages/admin/vieworders";
import EditOrder from "./pages/admin/editorder";
import ViewSales from "./pages/admin/viewsales";


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  UNSAFE_componentWillMount() {
    this.props.getProducts();
  }
  getUrl(pathname) {
    let pathArray = pathname.split("/");
    return `/${pathArray[1]}` === "/coming-soon"
      ? true
      : `/${pathArray[1]}` === "/maintenance"
      ? true
      : `/${pathArray[1]}` === "/page-not-found"
      ? true /*: `/${pathArray[1]}` === '/admin-login' ? true*/
      : `/${pathArray[1]}` === "/admin-addproducts"
      ? true
      : `/${pathArray[1]}` === "/admin-vieworders"
      ? true
      : `/${pathArray[1]}` === "/admin-editorder"
      ? true
      : `/${pathArray[1]}` === "/admin-viewsales"
      ? true
      : false;
  }
  setHeader(pathname) {
    let pathArray = pathname.split("/");
    return `/${pathArray[1]}` === "/index2"
      ? true
      : `/${pathArray[1]}` === "/index3"
      ? true
      : `/${pathArray[1]}` === "/index4"
      ? true
      : `/${pathArray[1]}` === "/index5"
      ? true
      : `/${pathArray[1]}` === "/index9"
      ? true
      : false;
  }
  render() {
    const { location } = this.props;
    var token = sessionStorage.getItem("token");
    return (
      <Fragment>
        {token != undefined && this.getUrl(location.pathname) ? (
          <Switch>
            <Route path="/maintenance" component={Maintenance} />
            {/* Admin */}
            <Route path="/admin-addproducts" component={AddProduct} />
            {/* <Route path="/" component={Login} /> */}
            <Route path="/admin-vieworders" component={ViewOrders} />
            <Route path="/admin-editorder" component={EditOrder} />
            <Route path="/admin-viewsales" component={ViewSales} />

          </Switch>
        ) : (
          <div className="page-wrapper">
            <Switch>{<Route path="/" component={Login} />}</Switch>
            <Scrolltop />
          </div>
        )}
      </Fragment>
    );
  }
}

const AppMapStateToProps = (state) => {
  return {
    products: state.data.products,
  };
};

const AppMapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch(getProducts());
    },
  };
};

export default connect(
  AppMapStateToProps,
  AppMapDispatchToProps
)(withRouter(App));
