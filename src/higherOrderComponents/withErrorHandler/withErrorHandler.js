import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxilliary";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentDidMount() {
      axios.interceptors.request.use((request) => {
        this.setState({ error: null });

        return request;
      });

      axios.interceptors.response.use(
        (response) => response,
        (error) => {
          console.log(error);

          this.setState({
            error: error,
          });
        }
      );
    }

    errorConfirmedHandler = () => {
      return this.setState({
        error: null,
      });
    };

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            closeModal={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />;
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
