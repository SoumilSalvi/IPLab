import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);

    // Step 3: Create a ref variable
    this.myRef = React.createRef();
  }

  componentDidMount() {
    // Step 5: Access and use the ref in the componentDidMount lifecycle method
    if (this.myRef.current) {
      this.myRef.current.focus();
    }
  }

  render() {
    return (
      <div>
        {/* Step 4: Attach the ref to a DOM element (input in this case) */}
        <input type="text" ref={this.myRef} />
        <button onClick={() => this.handleButtonClick()}>Focus Input</button>
      </div>
    );
  }

  handleButtonClick() {
    // Access and use the ref in a function
    if (this.myRef.current) {
      this.myRef.current.focus();
    }
  }
}

export default MyComponent;
