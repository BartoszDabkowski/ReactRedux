import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyATc8f-iBIvRAguy0b6QjETLGXwHbskNrI';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));