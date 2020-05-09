import React from "react";

export const SizeContext = React.createContext({});

const linePoints = {
  wide: { alpha: 5, beta: 167, gama: 334, omega: 497 },
  medium: { alpha: 3, beta: 124, gama: 248, omega: 362 },
  small: { alpha: 2, beta: 82, gama: 164, omega: 241 },
};

const squarePoints = {
  wide: {
    alpha: 83,
    beta: 30,
    gama: 250,
    omega: 197,
    teta: 417,
    delta: 364,
  },
  medium: {
    alpha: 60,
    beta: 22.5,
    gama: 185.5,
    omega: 150,
    teta: 308,
    delta: 271.5,
  },
  small: {
    alpha: 38.5,
    beta: 15,
    gama: 122.5,
    omega: 97,
    teta: 204.5,
    delta: 179,
  },
};

class SizeContextProvider extends React.PureComponent {
  state = {
    linePoint: {},
    squarePoint: {},
  };

  setPoint = () => {
    let newLinePoint;
    let newSquarePoint;

    if (window.innerWidth < 481) {
      newLinePoint = linePoints.small;
      newSquarePoint = squarePoints.small;
    } else if (window.innerWidth < 768) {
      newLinePoint = linePoints.medium;
      newSquarePoint = squarePoints.medium;
    } else {
      newLinePoint = linePoints.wide;
      newSquarePoint = squarePoints.wide;
    }

    this.setState({
      linePoint: { ...newLinePoint },
      squarePoint: { ...newSquarePoint },
    });
  };

  componentWillMount() {
    window.addEventListener("resize", this.setPoint);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setPoint);
  }

  componentDidMount() {
    this.setPoint();
  }

  render() {
    return (
      <SizeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </SizeContext.Provider>
    );
  }
}

export default SizeContextProvider;
