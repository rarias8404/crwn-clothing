import React, { Component } from 'react';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from "./error-boundary.styles";

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasFailed: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasFailed: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error)
  }


  render() {
    const { hasFailed } = this.state
    const { children } = this.props
    if (hasFailed) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return children
  }
}

export default ErrorBoundary;