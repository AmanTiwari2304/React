import Product from "./Product.jsx";
import "./ProductTab.css";

function ProductTab() {
    return(
        <div className="ProductTab">
        <Product Title="Logitech Mx Master 3S" idx={0} />
        <Product Title="Apple Pencil (2nd Gen)"  idx={1}  />
        <Product Title="Zebronic Zeb-Transformer"  idx={2} />
        <Product Title="Protronic Toad 23 Wireless Mouse"  idx={3}/>
        </div>
    )
}

export default ProductTab;