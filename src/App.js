import { Component } from 'react';
import './App.css';
import CardList from './component/card-list/card-list';
import SearchBox from './component/search-box/search-box';

class App extends Component {
    constructor() {
        super()

        this.state = {
            monsters: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(user => this.setState(
                    () => {
                        return {monsters : user}
                    }
                ),
            )
    }

    onChangeHandler = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(
            () => {
                return { searchField }
            },
        )
    }

    render() {
        const { monsters, searchField } = this.state;
        const { onChangeHandler } = this;

        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField)
        })
        return (
            <div className='App'>
                <h1 className='app-title'>Monster Rolodex</h1>
                <SearchBox
                    onChangeHandler={ onChangeHandler }
                    placeholder="search monster"
                    className="monster-search-box"
                />
                <CardList
                    monsters={filteredMonsters}
                />
            </div>
        );
    }
}

export default App;
