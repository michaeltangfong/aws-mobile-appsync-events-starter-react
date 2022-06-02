import React from "react";

class ShoppingList extends React.Component {
    render() {
        return (
            <button className="square" onClick={function() { console.log('click'); }}>
                {this.props.value}
            </button>
        );
    }
}

export default ShoppingList;