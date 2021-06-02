import React from 'react'
import './App.css';
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Grid from  "@material-ui/core/Grid"

class JButton extends React.Component {
  render() {
    return (
      <Button {...this.props}>
        {this.props.label}
      </Button>
    )
  }
}

function Elem(objs) {
  return objs.map((objs) => <MyComponent {...objs} />);
}

class MyComponent extends React.Component {

  components = {
    jbox: Box,
    jbutton: JButton,
    jgrid: Grid
  };

  render() {
    const TagName = this.components[this.props.tag || 'jbutton'];
    return (<TagName  {...this.props.attr} >{this.props.children ? Elem(this.props.children ) : ''}</TagName>)
  }
}

function App() {

  const buttons = [
    {
      tag: "jgrid",
      attr: {
        container: true,
        spacing: 3
      },
      children: [
        {
          tag: "jgrid",
          attr: {
            item: true,
            xs: 6
          },
          children: [
            {
              tag: "jbutton",
              attr: {
                color: 'secondary',
                label: 'Clik Me',
                variant: "contained"
              }
            }
          ]
        },
        {
          tag: "jgrid",
          attr: {
            item: true,
            xs: 6
          },
          children: [
            {
              tag: "jbutton",
              attr: {
                color: 'primary',
                label: 'Clik Me',
                variant: "contained"
              }
            }
          ]
        },
      ]
    }
  ]

  return (
    <>
      {Elem(buttons)}
    </>
  );
}

export default App;
