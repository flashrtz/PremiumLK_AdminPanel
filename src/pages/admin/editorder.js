import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
// import ImageUploader from 'react-images-upload';
// import datatables from "react-jquery-datatables";
// import 'react-table/react-table.css';
import { SideNav, Chevron, Icon } from "react-side-nav";
import "../../../node_modules/react-side-nav/dist/themes.css";
import Swal from "sweetalert2";
import LOGO from '../../assets/images/PLk.jpg';


import moment from "moment";
import {
  CommonGet,
  CommonPost,
  CommonDeleteById,
  CommonGetById,
  CommonUpdateById,
} from "../../config";
import $ from "jquery";
import DataTable from "datatables";

const menuItems = [
  {
    id: 1,
    label: "Manage Products",
    icon: "fas fa-battery-half",
    link: "/admin-addproducts",
    items: [
      { id: 11, label: "Item 1.1", icon: "fas fa-car", link: "/item11" },
      { id: 12, label: "Item 1.2", icon: "fas fa-bullhorn", link: "/item12" },
    ],
  },
  {
    id: 2,
    label: "View Orders",
    icon: "fas fa-battery-half",
    link: "/admin-vieworders",
  },
  {
    id: 3,
    label: "View Sales",
    icon: "fas fa-battery-half",
    link: "/admin-viewsales"
  },
  {
    id: 4,
    label: "Log Out",    
    icon: "fas fa-battery-half",
    link: "/admin-login",
  },
];
const NavLink = (props) => (
  <a href={props.to} {...props}>
    <i className={`fa ${props.icon}`} />
    {props.label}
  </a>
);

class editorder extends Component {
  state = {
    pictures: [],
    price: "",
    productName: "",
    paymentId:"",
    categoryId: -1,
    inStock: true,
    isModalOpen: false,
    isSelectAll: false,
    orderId:"",
    orderList: [],
    order: [],
    shippingAddress: [],
  };

  constructor(props) {
    super(props);

    this.onDrop = this.onDrop.bind(this);
  }

  componentWillMount() {
    let orderId = sessionStorage.getItem("order");
    CommonGetById("orders", orderId)
      .then((res) => res.json())
      .then((json) => {
        console.log("GG" + json);
        this.setState({
          order: json,
          shippingAddress: json.shippingAddress,
          orderId:orderId
        });
      })
      .then(() => {
        this.jqueryScripts();
      });
  }

  jqueryScripts = () => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  };

  resetOrder = () => {
    let orderId = sessionStorage.getItem("order");
    CommonGetById("orders", orderId)
      .then((res) => res.json())
      .then((json) => {
        console.log("GG" + json);
        this.setState({
          order: json,
          shippingAddress: json.shippingAddress,
        });
      });
    // .then(() => {
    //   this.jqueryScripts();
    // });
  };

  onDrop(e) {
    this.setState({
      pictures: this.state.pictures.concat(e),
    });

    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoader.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoader = (readerEvt) => {
    let binaryString = readerEvt.target.result;
    this.setState({
      base64string: btoa(binaryString),
    });
  };

  addProduct = () => {
    console.log("PIC:" + JSON.stringify(this.state.pictures));

    // 	let formdata ={

    // 	      name: this.state.productName,
    // 		  description: this.state.description,
    // 		  price:this.state.price,
    // 		  itemImage:this.state.pictures,
    // 		  inStock: this.state.inStock,
    // 		  category: this.state.categoryId,
    // 		  isActive: true

    // 	}
    // alert(JSON.stringify(formdata));
  };

  modalOpen = (id) => {
    window.alert(id);
    CommonGetById("orders", id)
      .then((res) => res.json())
      .then((json) => {
        console.log("GG" + json);
        this.setState({
          order: json,
        });
      })
      .then(() => {
        this.setState({
          isModalOpen: true,
        });
      });
  };
  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  //change ship status
  isShipped = (e) => {
    Swal.fire({
      title: "",
      text: "Are you sure you want to make this change?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.value) {
        let orders = this.state.order;
        this.setState((prevState) => ({
          order: {
            // object that we want to update
            ...prevState.order, // keep all other key-value pairs
            isDelivered: !prevState.order.isDelivered, // update the value of specific key
          },
        }));
      }
    });
  };

  isPaid = (e) => {
    Swal.fire({
      title: "",
      text: "Are you sure you want to make this change?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.value) {
        let orders = this.state.order;
        this.setState((prevState) => ({
          order: {
            // object that we want to update
            ...prevState.order, // keep all other key-value pairs
            isPaid: !prevState.order.isPaid, // update the value of specific key
          },
        }));
      }
    });
  };

  rendarModal(ordewr) {
    let order = this.state.order;
    let contetnts = order.orderItems;
    let contetntsShip = this.state.shippingAddress;

    let orderContent =
      contetnts === undefined
        ? null
        : contetnts.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
                <td className="text-right">{item.price * item.qty}</td>
              </tr>
            );
          });

    //Progress
    let shippingStatus = order.isDelivered ? "Yes" : "No";
    let payStatus = order.isPaid ? "Yes" : "No";
    return (
      <div>
        {/* <div className="popup">
          <div className="popup_inner"> */}
        <label>
          <strong>ORDER DETAILS</strong>
        </label>

        {/* <div class="table-responsive" style={{ overflow: "hidden"},{paddingLeft : "20%"}}> */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Id</td>
              <td>{order._id}</td>
            </tr>
            <tr>
              <td>User Id</td>
              <td>{order.user}</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>{moment(order.createdAt).format("DD-MM-YYYY")}</td>
            </tr>
            <tr>
              <td>Ordered Products</td>
              <td>
                <th>Product</th>
                <th>Quantity</th>
                <th>Net Price</th>
                <th>Total Price</th>
                {orderContent}
                <tfoot>
                  <tr>
                    <td>Tax</td>
                    <td colspan="2"></td>
                    <td className="text-right">{order.taxPrice}</td>
                  </tr>
                  <tr>
                    <td>Shipping Fee</td>
                    <td colspan="2"></td>
                    <td className="text-right">{order.shippingPrice}</td>
                  </tr>
                  <tr>
                    <td>Total Amount</td>
                    <td colspan="2"></td>
                    <td className="text-right">{order.totalPrice}</td>
                  </tr>
                </tfoot>
              </td>
            </tr>
            <tr>
              <td>Shipping Address</td>
              <td>
                <th>Full Name</th>
                <th>Address</th>
                <th>City</th>
                <th>Country</th>
                <th>Postal Code</th>
                <tr>
                  <td>{contetntsShip.fullName}</td>
                  <td>{contetntsShip.address}</td>
                  <td>{contetntsShip.city}</td>
                  <td>{contetntsShip.country}</td>
                  <td>{contetntsShip.postalCode}</td>
                </tr>
              </td>
              {/* {shipContent} */}
            </tr>
            <tr>
              <td>Payment Method</td>
              <td>{order.paymentMethod}</td>
            </tr>
            <tr>
              <td>Payment</td>
              <td hidden={order.isPaid}>
                <p>
                  Mark as Paid
                  <input
                    type="checkbox"
                    id="ispaid"
                    onChange={(e) => this.isPaid(e)}
                    value={order.isPaid}
                    checked={order.isPaid}
                  />
                </p>
              </td>
              <td hidden={!order.isPaid}>
              <p>Paid</p>
              </td>
             
            </tr>
            <tr>
            <td hidden={order.isPaid}>Payment Id</td>
            <td hidden={order.isPaid}>
              <input
                    type="text"
                    id="ispaidId"
                    onChange={(e) => this.setState({paymentId:e.target.value})}
                    value={this.state.paymentId}
                  />
              </td>
              </tr>
            <tr>
              <td>Shipment</td>
              <td hidden={order.isDelivered}>
                <p>
                  Mark as Shipped
                  <input
                    type="checkbox"
                    id="inlineCheckbox1"
                    onChange={(e) => this.isShipped(e)}
                    value={order.isDelivered}
                    checked={order.isDelivered}
                  />
                </p>
              </td>
              <td hidden={!order.isDelivered}>
                <p>Shipped</p>
              </td>
            </tr>
            {/* {tableContent} */}
          </tbody>
        </Table>
      </div>
    );
  }
 
  renderDisplay = (contetnts) => {
    let tableContent =
      contetnts === undefined
        ? null
        : contetnts.map((item) => {
            //Progress
            let shippingStatus = item.isDelivered ? "Yes" : "No";
            let payStatus = item.isPaid ? "Yes" : "No";
            return (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{moment(item.createdAt).format("DD-MM-YYYY")}</td>
                <td>{item.totalPrice}</td>
                <td>
                  {" "}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.modalOpen(item._id)}
                  >
                    View
                  </button>
                </td>
                <td>{payStatus}</td>
                <td>{shippingStatus}</td>

                {/* <td>{item.isPaid}</td>
              <td>{item.isPaid}</td> */}
                {/* <td><a title="Edit " onClick={(event) => this.formItemEditHandler(item._id)} ><i className="i class="i class="fa fa-list-alt fa-2x fore-color-cyan icon-blue"></i> </a></td>
                   <td><a title="Delete " onClick={(event) => this.formItemDeleteHandler(item._id)} ><i className="fa fa-trash fa-2x fore-color-cyan icon-blue"></i> </a></td> */}
              </tr>
            );
          });

    return (
      //   <div class="table-responsive" style={{ overflow: "hidden"},{paddingLeft : "20%"}}>
      <div>
        <Table striped bordered hover id="example">
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Order Date</th>
              <th>Total Price</th>
              <th>Order Details</th>
              <th>Paid</th>
              <th>Shipped</th>
              {/* <th>Completed</th>
              <th>
                Select All{" "}
                <input
                  id="selectallid"
                  type="checkbox"
                  checked={this.state.isSelectAll}
                  onChange={(e) => this.selectAllReconciliationHandler()}
                />
              </th> */}
            </tr>
          </thead>
          <tbody>{tableContent}</tbody>
        </Table>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  };

  stockChange = () => {
    this.setState({
      inStock: true,
    });
  };

  categoryChange = (e) => {
    this.setState({
      category: e.target.value,
    });
  };

  onDrop(e) {
    let file = e.target.files[0];

    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        var Base64 = reader.result;
        this.setState({
          base64string: Base64,
        });
      };
    }
  }

  handleReaderLoader = (readerEvt) => {
    let binaryString = readerEvt.target.result;
    this.setState({
      base64string: btoa(binaryString),
    });
  };

  renderPopUpValues = () => {
    let order = this.state.order;
    let contetnts = order.orderItems;
    let orderContent =
      contetnts === undefined
        ? null
        : contetnts.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
                <td className="text-right">{item.price * item.qty}</td>
              </tr>
            );
          });

    //Progress
    let shippingStatus = order.isDelivered ? "Yes" : "No";
    let payStatus = order.isPaid ? "Yes" : "No";
    return (
      <div>
        <div className="popup">
          <div className="popup_inner">
            <label>ORDER DETAILS</label>

            {/* <div class="table-responsive" style={{ overflow: "hidden"},{paddingLeft : "20%"}}> */}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Id</td>
                  <td>{order._id}</td>
                </tr>
                <tr>
                  <td>Date</td>
                  <td>{moment(order.createdAt).format("DD-MM-YYYY")}</td>
                </tr>
                <tr>
                  <td>Ordered Products</td>
                  <td>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Net Price</th>
                    <th>Total Price</th>
                    {orderContent}
                    <tfoot>
                      <tr>
                        <td>Tax</td>
                        <td colspan="2"></td>
                        <td className="text-right">{order.taxPrice}</td>
                      </tr>
                      <tr>
                        <td>Shipping Fee</td>
                        <td colspan="2"></td>
                        <td className="text-right">{order.shippingPrice}</td>
                      </tr>
                      <tr>
                        <td>Total Amount</td>
                        <td colspan="2"></td>
                        <td className="text-right">{order.totalPrice}</td>
                      </tr>
                    </tfoot>
                  </td>
                </tr>
                <tr>
                  <td>Paid</td>
                  <td>{payStatus}</td>
                </tr>
                <tr>
                  <td>Shipped</td>
                  <td>{shippingStatus}</td>
                </tr>
                <tr>
                  <td>Shipped</td>
                  <td>
                    <input
                      type="checkbox"
                      id="inlineCheckbox1"
                      onChange={(e) => this.isShipped(e)}
                      value={order.isDelivered}
                      checked={order.isDelivered}
                    />
                    Shipped
                  </td>
                </tr>

                {/* {tableContent} */}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  };

  printHandler = (event) => {
    var mywindow = window.open("", "PRINT", "height=600,width=1000");
    mywindow.document.write("<html> <body>");
    mywindow.document.write(
      '<link rel="stylesheet" href="../../../../../../bootstrap.min.css" type="text/css" />'
    );
    mywindow.document.write(
      ' <center>  <img src="../../../../../../dfcc-logo.png"/> <h3><strong>Order Details<hr/></strong></h3>  </center>'
    );
    mywindow.document.write('<div class-"container" id="width">');

    mywindow.document.write('<div class-"row">');
    mywindow.document.write('<div class-"col-4">');
    mywindow.document.write(
      "Date: <strong>" +
        moment(this.state.toDate).format("YYYY-MM-DD") +
        "</strong>"
    );
    mywindow.document.write("</div>");
    mywindow.document.write(
      '<div class-"col-4" style="margin-left:90mm;margin-top:-6mm;">'
    );
    mywindow.document.write("</div>");
    mywindow.document.write('<div class="clearfix"></div>');
    mywindow.document.write('<div class-"col-4">');
    mywindow.document.write("<br/><br/></div>");
    mywindow.document.write("</div>");
    mywindow.document.write("</div>");
    mywindow.document.write(document.getElementById("printContent").innerHTML);
    mywindow.document.write("<br/><br/></div>");
    // mywindow.document.write(document.getElementById("printContentsTotalValues").innerHTML);
    mywindow.document.write("</body ></html>");
    setTimeout(function () {
      mywindow.document.close(); // necessary for IE >= 10
      mywindow.focus(); // necessary for IE >= 10*/

      mywindow.print();
      //mywindow.close();
    }, 3000);
  };

//UPDATE THE PRODUCT

editProduct = () => {
  let id = this.state.orderId;
  let order = this.state.order;
  let formdata = {
    payerID: order.user,
    orderID: order._id,
    paymentID: this.state.paymentId,
  };
  console.log(formdata);

  CommonUpdateById("orders", `${id}/pay` ,formdata)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      Swal.fire('', `${json.message}`, 'success')

    });


}






  /******************************************************MAIN RENDER**********************************88 */
  render() {
    let imageURL = this.state.base64string;
    let printContents = this.renderPopUpValues();

    let contetntsDisplay = this.rendarModal(this.state.order);

    return (
      <div className="page-content">
        <div className="row">
          <div className="col-md-3">
          <div className="sidebar">
          <center>
          <img src={LOGO} style={{width:"150px"}}/>
          </center>
         
                {/* <img src={'./src/assets/images/premiumlogo.jpg'}/> */}
                {/* <div>
                      <img src={LOGO} style={{width:"auto"},{height:"50vh"}}/>
                      </div> */}
            <SideNav
              items={menuItems}
              linkComponent={NavLink}
              chevronComponent={Chevron}
              iconComponent={Icon}
            />
             </div>
          </div>
          <div className="col-md-9">
            <section>
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                    <div className="mb-8">
                      {" "}
                      {/* <span className="badge badge-primary p-2">
                    <i className="la la-bold ic-3x rotation" />
                  </span> */}
                      <h2 className="mt-4">
                        <strong>EDIT ORDER</strong>
                      </h2>
                      <p className="lead mb-0 ">Premium</p>{" "}
                      <p className="lead mb-0 ic-2x rotation 180">LK</p>
                    </div>
                  </div>
                </div>
                <div>{contetntsDisplay}</div>
                <div id="printContent" hidden>
                  {printContents}
                </div>

                <div className="row">
                  <div className="col-md-3">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.editProduct}
                    >
                      SUBMIT
                    </button>
                  </div>
                  <div className="col-md-3">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.resetOrder}
                    >
                      RESET
                    </button>
                  </div>
                  {/* <div className="col-md-3" >
                      <button
                        type="button"
                        className="btn btn-primary"
                        //onClick={this.resetHandler}
                      >
                        EDIT ORDER
                      </button> 
                  </div>*/}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default editorder;
