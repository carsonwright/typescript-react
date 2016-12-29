// Remember to rename your file to Hello.tsx and
// place it within your src/ directory

import * as React from "react";

interface UserProps {
  firstName: string;
  lastName: string;
}

class User extends React.Component<UserProps, {}> {
  render() {
    return <div>
      Hello, {this.props.firstName} {this.props.lastName}
    </div>;
  }
}

export default User;
