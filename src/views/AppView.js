'use strict';

import React from 'react';
import AppActions from '../data/AppActions';

const AppView = props => {
  return (
  <div>
    <Editor {...props} />
    <Viewer {...props} />
  </div>
  );
};

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    AppActions.changeEditorText(event.target.value)
  }

  render() {
    const text = this.props.app.get("text") || "";
    return (
        <textarea value={text} onChange={this.handleChange} />
        );
  }
}

const Viewer = props => (
    <div>
      <p>{props.app.get("text") || ""}</p>
    </div>
    );

export default AppView;

