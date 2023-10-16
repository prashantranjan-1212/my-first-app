import './search-box.styles.css';

const SearchBox = (props) => {
    return (
        <input
            type="search"
            placeholder={props.placeholder}
            onChange={props.onChangeHandler}
            className={`search-box ${props.className}`}
        >
        </input>
    )
}

export default SearchBox;