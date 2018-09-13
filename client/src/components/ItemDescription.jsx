import React from "react";
import img from "../../dist/img.css";
import con from "../../dist/fontContainers.css";

class ItemDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // sephoraItems =[]
    };
  }

  // componentDidMount(){

  // }

  render() {
    return (
      <div className={img.container}>
        <div className={img.subContainer1}>
          <img src="https://www.sephora.com/productimages/sku/s1778851-main-hero-300.jpg" />
          <div className={img.sub1bottom}>Roll over image to zoom in</div>
        </div>
        <div className={img.margin} />
        <div className={con.subContainer2}>
          <span className={con.sub2name}>Tatcha</span>
        </div>
        <div className={con.subContainer3} />
        <div className={con.subContainer4} />
        <div className={con.subContainer5} />
      </div>
    );
  }
}

export default ItemDescription;
