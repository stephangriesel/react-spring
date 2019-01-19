import React from "react";
import { Spring } from "react-spring";

export default function Component1() {
  return (
    <Spring
        from={{ opacity:0, marginTop:-500}}
        to={{ opacity:1, marginTop:0 }}
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
            <Spring
                from={{ number: 0 }}
                to={{ number:10 }}
                config= {{ duration: 10000 }}
                >
                {props => (
                    <div style={props}>
                    <h1 style={counter}>
                    {props.number.toFixed()}
                    </h1>
                    </div>
                )}
            </Spring>
          </div>
        </div>
      )}
    </Spring>
  );
}

const c1Style = {
  background: "#111",
  color: "#FFFFFF",
  padding: "1.5rem"
};

const counter = {
    background:'#979797',
    textAlign:'center',
    width: '100px',
    borderRadius:'50%',
    margin:'1rem auto'
};