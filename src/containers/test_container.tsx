import * as React from 'react';

export interface TestContainerProps {
  name: string;
}

class TestContainer extends React.Component<TestContainerProps, {}> {
  render() {
    return (
      <div>
        Hello from {this.props.name}
      </div>
    );
  }
}

export default TestContainer;