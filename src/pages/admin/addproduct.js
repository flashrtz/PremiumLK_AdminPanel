import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { CommonGet, CommonPost, CommonDeleteById,CommonUpdateById, CommonGetById } from "../../config";
import { SideNav, Chevron, Icon } from "react-side-nav";

import "../../../node_modules/react-side-nav/dist/themes.css";
import $ from "jquery";
import DataTable from "datatables";
import Swal from "sweetalert2";
import LOGO from '../../assets/images/PLk.jpg';



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

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: [],
      price: "",
      productName: "",
      description: "",
      categoryId: -1,
      instock: "",
      category: "",
      brand: "",
      editProductId: "",
      base64string:
        "https://lh3.googleusercontent.com/proxy/e0eh1T0oEXKbYGCgFPdsNigBDZqlbuNO0yaHTXYP1ASL-CoiEnZOBAw3jdywchu1E8IpEgYusbNKwHZ6UkwjsBxr9KaLpADQdGGf_2y7BG_BFTQuwf21kcNh9sM1",

      editProduct: [],
      productList: [],
      orders: [],

      isEdit: false,
      isDisable: false,
    };
    this.onDrop = this.onDrop.bind(this);
  }

  jqueryScripts = () => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  };

  componentWillMount() {
    CommonGet("products", "")
      .then((res) => res.json())
      .then((json) => {
        console.log("GG" + json);
        this.setState({
          productList: json,
        });
      })
      .then(() => {
        this.jqueryScripts();
      });
  }

  componentDidMount() {
    // this.jqueryScripts();

    window.scrollTo(0, 0);
  }

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

  editProduct = () => {
    let id = this.state.editProductId;
    let formdata = {
      name: this.state.productName,
      description: this.state.description,
      price: this.state.price,
      image: this.state.base64string,
      brand: this.state.brand,
      countInStock: this.state.instock,
      category: this.state.category,
    };

    CommonUpdateById("products", id, formdata)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        Swal.fire({
          position: 'bottom',
          //icon: 'success',
          title: `${json.message}`,
          showConfirmButton: false,
          timer: 1500
        });
      })
      .then(() => {
        CommonGet("products", "")
          .then((res) => res.json())
          .then((json) => {
            console.log("GG" + json);
            this.setState({
              productList: json,
            });
          });
      });
  };

  addProduct = () => {
    let formdata = {
      name: this.state.productName,
      description: this.state.description,
      price: this.state.price,
      image: this.state.base64string,
      brand: this.state.brand,
      countInStock: this.state.instock,
      category: this.state.category,
    };
    CommonPost("products", formdata)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        Swal.fire({
          position: 'bottom',
          //icon: 'success',
          title: `${json.message}`,
          showConfirmButton: false,
          timer: 1500
        })
      })
      .then(()=>{
          CommonGet("products", "")
          .then((res) => res.json())
          .then((json) => {
            console.log("GG" + json);
            this.setState({
              productList: json,
            });
          })
          .then(() => {
            this.jqueryScripts();
          })
     });
        //swal("Product Added Successfully!");
    // alert(JSON.stringify(formdata));
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

  selectHandler = (id) => {
  
    //https://premiumlkbackend.azurewebsites.net/api/products/5fb2c01dccbaf0005a97ba77
    CommonGetById("products",id)
      .then((res) => res.json())
      .then((json) => {
        console.log("GG" + json);
        this.setState({
          editProduct: json,
          isEdit: true,
          isDisable: true,
        });
      })
      .then(() => {
        let editProduct = this.state.editProduct;
        this.setState({
          productName: editProduct.name,
          description: editProduct.description,
          price: editProduct.price,
          category: editProduct.category,
          base64string: editProduct.image,
          instock: editProduct.countInStock,
          brand: editProduct.brand,
          editProductId: editProduct._id,
        });
      });
  };

  //display values to table

  renderDisplayTable = (contetnts) => {
    let tableContent =
      contetnts === undefined
        ? null
        : contetnts.map((item) => {
            let imageURL = item.image;
            return (
              <tr key={item._id}>
                <td>
                  <img src={imageURL} style={{ height: "100px" }}></img>
                </td>
                <td>{item.category}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  {" "}
                  <input
                    id="id2"
                    type="checkbox"
                    defaultChecked //={prList.isActive}
                    // onChange={e => this.selectHandler(prList.id)}
                  />
                </td>
                <td>
                  {" "}
                  <input
                    id="id1"
                    type="checkbox"
                    defaultChecked //={prList.isActive}
                    // onChange={e => this.selectHandler(prList.id)}
                  />
                </td>
                <td>
                  {" "}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={(e) => this.selectHandler(item._id)}
                  >
                    EDIT
                  </button>
                </td>
              </tr>
            );
          });
    return (
      // <Table striped bordered hover id="example">
      <div class="table-responsive">
        {/* <table id="example" class="display dataTable no-footer" cellspacing="0" width="100%"> */}
        <Table striped bordered hover id="example">
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Category</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>In Stock</th>
              <th>Is Active</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableContent}
            {/* <tr>
  <td>GG1</td>
  <td>YY</td>
  <td>GG1</td>
  <td>GG1</td>
</tr>
<tr>
  <td>FF1</td>
  <td>BB</td>
  <td>FF</td>
  <td>CC</td>
</tr> */}
          </tbody>
        </Table>
      </div>
    );
  };

  //reset form

  resetHandler = () => {
    this.setState({
      price: "",
      productName: "",
      description: "",
      categoryId: -1,
      instock: "",
      category: "",
      brand: "",
      editProductId: "",
      base64string:
        "https://lh3.googleusercontent.com/proxy/e0eh1T0oEXKbYGCgFPdsNigBDZqlbuNO0yaHTXYP1ASL-CoiEnZOBAw3jdywchu1E8IpEgYusbNKwHZ6UkwjsBxr9KaLpADQdGGf_2y7BG_BFTQuwf21kcNh9sM1",
      editProduct: [],
      isEdit: false,
      isDisable: false,
    });
  };

  render() {
    let imageURL = this.state.base64string;
    let table = this.renderDisplayTable(this.state.productList);
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
                        <strong>MANAGE PRODUCT</strong>
                      </h2>
                      <p className="lead mb-0 ">Premium</p>{" "}
                      <p className="lead mb-0 ic-2x rotation 180">LK</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <form id="contact-form">
                      <div className="messages" />
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Category"
                              required="required"
                              value={this.state.category}
                              onChange={(e) =>
                                this.setState({ category: e.target.value })
                              }
                              data-error="Firstname is required."
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              id="productName"
                              type="text"
                              name="surname"
                              className="form-control"
                              placeholder="Name"
                              required="required"
                              value={this.state.productName}
                              onChange={(e) =>
                                this.setState({ productName: e.target.value })
                              }
                              data-error="Lastname is required."
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              id="form_email"
                              type="text"
                              name="email"
                              className="form-control"
                              placeholder="Brand"
                              required="required"
                              value={this.state.brand}
                              onChange={(e) =>
                                this.setState({ brand: e.target.value })
                              }
                              data-error="Valid email is required."
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <textarea
                              id="form_experience"
                              name="Experience If any"
                              className="form-control"
                              value={this.state.description}
                              onChange={(e) =>
                                this.setState({ description: e.target.value })
                              }
                              placeholder="Description"
                              rows={4}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <div className="form-group">
                            <input
                              id="form_email"
                              type="number"
                              name="email"
                              className="form-control"
                              placeholder="Qty"
                              required="required"
                              value={this.state.instock}
                              onChange={(e) =>
                                this.setState({ instock: e.target.value })
                              }
                              data-error="Price is required."
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <input
                              id="form_email"
                              type="number"
                              name="email"
                              className="form-control"
                              placeholder="Price"
                              required="required"
                              value={this.state.price}
                              onChange={(e) =>
                                this.setState({ price: e.target.value })
                              }
                              data-error="Price is required."
                            />
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Select an Image</Form.Label>
                            <div class="input-group">
                              <input
                                type="file"
                                id="my-custom-design-upload"
                                class="btn btn-success"
                                onChange={(e) => this.onDrop(e)}
                              />
                            </div>
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <img
                            src={imageURL}
                            width={100}
                            style={{ width: "327px" }}
                          />
                        </div>
                      </div>
                      <br /> <br />
                      <div className="row">
                        <div className="col-md-3" hidden={!this.state.isEdit}>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.editProduct}
                          >
                            UPDATE PRODUCT
                          </button>
                        </div>
                        <div className="col-md-3" hidden={!this.state.isEdit}>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.resetHandler}
                          >
                            RESET
                          </button>
                        </div>
                        <div className="col-md-12 text-center">
                          <button
                            type="button"
                            className="btn btn-primary"
                            hidden={this.state.isDisable}
                            onClick={this.addProduct}
                          >
                            ADD PRODUCT
                          </button>
                        </div>
                      </div>
                      <br />
                      <br />
                      <div>{table}</div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduct;
