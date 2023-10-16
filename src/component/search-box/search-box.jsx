import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {
    render() {
        return (
            <input
                type="search"
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
                className={`search-box ${this.props.className}`}
            >
            </input>
        )
    }
}

export default SearchBox;