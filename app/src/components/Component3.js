import React from 'react'
import { Component2 } from './Component2';

export default function Component3() {
  return (
    <div style={c3Style}>
      <h1>Component3</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque nec feugiat turpis, id auctor odio. Donec fermentum,
              sem hendrerit interdum ultricies, nulla eros tincidunt lorem, eu
              pellentesque nisl lectus quis.</p>
    </div>
  )
}

const c3Style = {
    background: "#562299",
    color: "#FFFFFF",
    padding: "1.5rem"
  };