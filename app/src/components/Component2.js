import React, { Component } from 'react';
import { Spring } from 'react-spring';

export class Component2 extends Component {
  render() {
    return (
        <Spring
        from={{ opacity:0 }}
        to={{ opacity:1 }}
        config={{ delay: 1000, duration: 1000 }}
    >
      {props => (
        <div style={props}>
          <div style={c2Style}>
            <h1>Component 2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nec feugiat turpis, id auctor odio. Donec fermentum,
              sem hendrerit interdum ultricies, nulla eros tincidunt lorem, eu
              pellentesque nisl lectus quis.
            </p>
            <button style={btn} onClick={this.props.toggle}>Toggle Component 3</button>
          </div>
        </div>
      )}
    </Spring>
    )
  }
}

const c2Style = {
    background: "#219999",
    color: "#FFFFFF",
    padding: "1.5rem"
  };

  const btn = {
    background: "#111",
    color: "#FFFFFF",
    padding: "1.5rem",
    margin:"20px",
    textTransform:"uppercase",
    fontSize:"1.5rem",
    borderRadius:"40px",
    outline:"none"
  };


export default Component2
