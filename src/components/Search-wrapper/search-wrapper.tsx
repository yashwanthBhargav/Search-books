import './search-wrapper.css';
import { InputText } from 'primereact/inputtext';
import { createContext, useState } from 'react';
import { Button } from 'primereact/button';
import axios from 'axios';
import BooksViewComponent from '../Books-View/books-view';
import { ProgressSpinner } from 'primereact/progressspinner';

const baseURL = "https://openlibrary.org/search.json?q=";


function SearchWrapperComponent() {
    const [searchInput, setSearchInput] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] =useState(false);
    function searchbooks() {
        console.log(searchInput);
        setLoading(true);
        axios.get(baseURL + searchInput).then((response) => {
            setBooks(response.data.docs);
            setLoading(false);
          });
    };

    return (
        <div>
            <header className="App-header">
                <p>Search Books</p>
                <div>
                    <InputText id="username" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder="Search" />
                    <Button icon="pi pi-search"  onClick={searchbooks} />
                </div>
            </header>
            {loading ? <div><ProgressSpinner /> </div> : 
            <div>
                <a className='search-label'>Showing results for: {searchInput}</a>
                <BooksViewComponent books={books} />
            </div>}
        </div>
    );
}

export default SearchWrapperComponent;