import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "./Dashboard";

import { Container, Row, Col } from "react-bootstrap";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container className="mainpage" fluid style={{ margin: 0, padding: 0 }}>
          <Row noGutters>
            <Col xs={2}>
              <Dashboard />
            </Col>
            <Col />
          </Row>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
