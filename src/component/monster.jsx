import React, { Component } from 'react';
import SearchBox from './search-box/search-box'
import CardList from './card-list/card-list'

class Monster extends Component {
    constructor() {
        super()

        this.state = {
            monsters: [],
            searchFeild: '',
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
        const searchFeild = event.target.value.toLocaleLowerCase();                    
        this.setState(
            () => {
                return { searchFeild }
            },
        )
    }

    render() {
        const { monsters, searchFeild } = this.state;
        const { onChangeHandler } = this;

        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchFeild)
        })

        return (
            <div>
                <SearchBox 
                    onChangeHandler={ onChangeHandler } 
                    placeholder="search monster"
                    className="search-box"
                />
                <CardList 
                    monsters={filteredMonsters}
                />
            </div>
        );
    }
}

export default Monster;