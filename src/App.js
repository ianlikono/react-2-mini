import React, { Component } from "react";
import ColorChanger from "./components/ColorChanger";
// Components
import EditToggle from "./components/EditToggle";
import FamilyChanger from "./components/FamilyChanger";
import SizeChanger from "./components/SizeChanger";
import TextContainer from "./components/TextContainer";

class App extends Component {
  // constructor
  constructor() {
    super();

    this.state = {
      fontColor: "Black",
      fontSize: 12,
      fontFamily: "monospace",
      allowEdit: "true"
    };

    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  // updateColor

  updateColor(col) {
    this.setState({ fontColor: col });
  }

  // updateSize

  updateSize(size) {
    this.setState({ fontSize: size });
  }

  // updateFamily

  updateFamily(fam) {
    this.setState({ fontFamily: fam });
  }

  // updateEditStatus

  updateStatus(stat) {
    this.setState({ allowEdit: stat });
  }

  render() {
    const { fontFamily, fontSize, fontColor, allowEdit } = this.state;
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={this.updateStatus} allowEdit={allowEdit} />
          <ColorChanger update={this.updateColor} allowEdit={allowEdit} />
          <SizeChanger update={this.updateSize} allowEdit={allowEdit} />
          <FamilyChanger update={this.updateFamily} allowEdit={allowEdit} />
        </div>
        <div className="textArea">
          <TextContainer
            fontColor={fontColor}
            fontFamily={fontFamily}
            fontSize={fontSize}
          />
        </div>
      </div>
    );
  }
}

export default App;
