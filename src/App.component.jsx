import { useEffect, useState } from 'react';
import './App.css';
import SearchBox from './component/search-box/search-box.comonent';
import CardList from './component/card-list/card-list.component';

const App = () => {

    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(user => setMonsters(user))

    }, [])

    useEffect(() => {
        const newFilteredMonstersList = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField)
        });
        setFilteredMonsters(newFilteredMonstersList);

    }, [monsters, searchField])
    
    const onChangeHandler = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }


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

    )
}

export default App;