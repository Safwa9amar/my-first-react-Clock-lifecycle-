const Codesource = `
import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FcDislike, FcAlarmClock } from "react-icons/fc";
import { FaReact } from "react-icons/fa";
import { CodeBlock, codepen } from "react-code-blocks";
import Codesource from "./codeTotext";

import "./App.css";


class Appcontainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  delHeader = () => {
    this.setState({ show: false });
  };

  render() {
    let myheader;
    if (this.state.show) {
      myheader = <App />;
    }
    return (
      <Container>
        <Row xs="2">
          <Col className="codeblock">
            <CodeBlock
              text={Codesource}
              language={"jsx"}
              showLineNumbers={true}
              startingLineNumber={1}
              theme={codepen}
            />
          </Col>
          <Col>
            <div>
              {myheader}
              <p className="text-secondary">
                This is test for componentWillUnmount method is called when the
                component is about to be removed from the DOM.
                <br />
                <Button type="button" onClick={this.delHeader}>
                  <FcDislike />
                  Delete Clock
                </Button>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }
  componentDidUpdate() {
    document.getElementById("trackLifeCycle").innerHTML =
      "componentDidUpdate : " + this.state.time.toLocaleTimeString();
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("trackLifeCycle1").innerHTML =
      "getSnapshotBeforeUpdate : " + prevState.time.toLocaleTimeString();
  }

  componentWillUnmount() {
    console.log("The component named Header is about to be unmounted.");
  }

  render() {
    return (
      <div className="Clock-Container">
        <Card className="digital-Clock-container">
          <Card.Header>
            Clock + bootstrap using state and life cycle
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <FcAlarmClock />
              Time now is : {this.state.time.toLocaleTimeString()}
            </Card.Title>
            <Card.Text>
              This is my first react try to make a digitale Clock App using
              react bootstrap
              <a href="https://reactjs.org/docs/state-and-lifecycle.html">
                <br></br>
                <FaReact /> App url
              </a>
              <div id="trackLifeCycle">test</div>
              <div id="trackLifeCycle1">test</div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export { App, Appcontainer };

`;
export default Codesource;
