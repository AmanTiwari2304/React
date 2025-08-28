import "./Product.css";
import Price from "./Price.jsx";

function  Product({Title, idx}) {
    let oldPrices = [8999, 9199, 899, 278];
    let newPrices = [7999, 8999, 799, 199];
    let description = [
        ["8000 DPI", "5 Programmable Buttons"],
        ["Intuitive touch surface", "Designed for iPad Pro"],
        ["Build-in stand", "Quick response"],
        ["Wireless Mouse 2.4GHz", "Optical Orientation"]
    ]
    return(
        <div className="Product">
            <h3>{Title}</h3>
            <p> {description[idx][0]}</p>
            <p> {description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
            
        </div>
    )
}

export default Product;