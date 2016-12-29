// Remember to rename your file to Hello.tsx and
// place it within your src/ directory

import * as React from "react";
import { Router, Route, Link, browserHistory } from 'react-router'

interface HelloProps {
  firstName: string;
  lastName: string;
}

class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <div>
      <Link to={'/user'}>User</Link>
      Hello, {this.props.firstName} {this.props.lastName}
    </div>;
  }
}

export default Hello;
