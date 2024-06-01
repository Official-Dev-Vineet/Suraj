import { Component } from "react";

class LifecycleExample extends Component {
  // 1. Constructor: Called when the component is created
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "suraj",
    };
    console.log("Constructor: Component is being created.");
  }

  // 2. componentDidMount: Called after the component is mounted (inserted into the DOM tree)
  componentDidMount() {
    console.log("componentDidMount: Component has been mounted.");
    // Simulate an API call
    alert("component mount");
    this.timer = setInterval(() => {
      this.setState((pre) => ({ count: pre.count + 1, name: "vineet" }));
    }, 1000);
  }

  // 3. componentDidUpdate: Called after the component is updated
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Component has been updated.");
    console.log("Previous state:", prevState);
    console.log("Current state:", this.state);
    console.log("timer", this.timer);
  }

  // 4. componentWillUnmount: Called right before the component is removed from the DOM
  componentWillUnmount() {
    console.log("componentWillUnmount: Component is about to be unmounted.");
    clearInterval(this.timer);
  }
  // 5. render: Called to render the component
  render() {
    console.log("Render: Component is rendering.");
    return (
      <div>
        <h1>Lifecycle Example</h1>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default LifecycleExample;
