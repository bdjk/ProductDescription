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
          <div className={con.sub3price}>$110.00</div>
          <div className={con.sub3ship}>Free Flash Shipping</div>
        </div>
        <div className={con.subContainer4}>
          <div className={con.sub4box}>
            <select className={con.sub4select}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <span className={con.sub4arrow} />
          </div>
        </div>
        <div className={con.subContainer5}>
          <div className={con.sub5basket}>
            <button className={con.sub5basketbutton}>Add to basket</button>
          </div>
          <div className={con.sub5loves}>
            <button className={con.sub5lovesbutton}>
              <svg className={con.sub5lovesSVG}>
                <path d="M16.003 26c-.915 0-1.772-.354-2.417-1L2.364 13.78C.84 12.254 0 10.228 0 8.07 0 3.078 4.153-.012 8-.012c2.225 0 4.223.822 5.778 2.377L16 4.586l2.222-2.222C19.777.81 21.775-.013 24-.013c3.848 0 8 3.09 8 8.084 0 2.157-.84 4.184-2.364 5.708L18.413 25c-.643.645-1.5 1-2.41 1zM8 1.988c-2.886 0-6 2.326-6 6.084 0 1.623.63 3.147 1.778 4.294L15 23.587c.533.533 1.463.535 2 0L28.22 12.364C29.368 11.217 30 9.694 30 8.07c0-3.757-3.114-6.083-6-6.083-1.174 0-2.884.31-4.364 1.792l-2.93 2.928c-.39.39-1.022.39-1.413 0l-2.93-2.93C10.884 2.3 9.174 1.99 8 1.99z" />
              </svg>
              Add to loves
            </button>
          </div>
          <div className={con.sub5find}>
            <div>
              <label className={con.sub5findtext}>Find in store</label>
              <form className={con.sub5findform}>
                <div className={con.sub5findformbox}>
                  <input
                    className={con.sub5findinput}
                    placeholder="Enter ZIP/Postal code"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDescription;
