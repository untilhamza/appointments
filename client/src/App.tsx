import React from "react";

import { Layout, Skeleton } from "antd";

import Navbar from "./components/Navbar";
import BookingForm from "./components/BookingForm";
import BookingTable from "./components/BookingTable";

import "bootstrap/dist/css/bootstrap.min.css";
const { Footer, Content } = Layout;

const App = () => (
  <div className="App">
    <Layout>
      <Navbar />
      <Content>
        {/* <Skeleton /> */}
        <BookingForm />
        <BookingTable />
      </Content>
      <Footer>
        <div>Designed by hsanshine </div>
      </Footer>
    </Layout>
  </div>
);

export default App;
