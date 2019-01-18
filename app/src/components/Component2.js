import React, { Component } from 'react';
import { Spring } from 'react-spring';

export class Component2 extends Component {
  render() {
    return (
        <Spring
        from={{ opacity:0 }}
        to={{ opacity:1 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Component 1</h1>
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

export default Component2
