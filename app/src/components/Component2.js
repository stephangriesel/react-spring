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


export default Component2
