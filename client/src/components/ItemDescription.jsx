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
          <div className={con.sub2name}>Tatcha</div>
          <div className={con.sub2description}>
            Luminous Dewy Skin Night Concentrate
          </div>
          <div className={con.sub2size}>
            SIZE 1.7 oz/ 50 mL {"\u00A0"}•{"\u00A0"} ITEM 1778851
          </div>
        </div>
        <div className={con.subContainer3}>
          <div className={con.sub3price}>$104.36</div>
          <div className={con.sub3ship}>Free Flash Shipping</div>
        </div>
        <div className={con.subContainer4} />
        <div className={con.subContainer5} />
      </div>
    );
  }
}

export default ItemDescription;
