import React from "react";
import LightButton from "./LightButton";

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-10 mt-10 text-center">
          <h2 className="mb-10 text-xl font-semibold">Something went wrong!</h2>

          <LightButton onClick={() => globalThis.location.reload()}>
            {"Refresh"}
          </LightButton>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
