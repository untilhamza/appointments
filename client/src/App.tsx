import React from "react";

import { Layout, Skeleton } from "antd";

import Navbar from "./components/Navbar";
import Appointment from "./components/Appointment";

import "bootstrap/dist/css/bootstrap.min.css";
const { Footer, Content } = Layout;

const App = () => (
  <div className="App">
    <Layout>
      <Navbar />
      <Content>
        {/* <Skeleton /> */}
        <Appointment />
      </Content>
      <Footer>
        <div>Designed by hsanshine </div>
      </Footer>
    </Layout>
  </div>
);

export default App;
