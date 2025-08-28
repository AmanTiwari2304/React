function Price({oldPrice, newPrice}) {
    let oldStyle = {
        textDecoration: "line-through"
    };
    let newStyle = {
        fontWeight: "bold"
    };
    let styles = {
        backgroundColor: "#e0c367",
        height: "30px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
    };

  return (
    <div style={styles}>
        <span style={oldStyle}>{oldPrice}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={newStyle}>{newPrice}</span>
    </div>
  );
}

export default Price;