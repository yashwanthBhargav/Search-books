import './search-wrapper.css';
import { InputText } from 'primereact/inputtext';
import {  useState } from 'react';
import { Button } from 'primereact/button';
import BooksViewComponent from '../Books-View/books-view';
import { ProgressSpinner } from 'primereact/progressspinner';
import BooksService from '../../Services/books.service';

function SearchWrapperComponent() {
    const [searchInput, setSearchInput] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] =useState(false);
    function searchbooks() {
        console.log(searchInput);
        setLoading(true);
        BooksService.getBooks(searchInput).then((response) => {
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
                <BooksViewComponent books={books} keyword={searchInput} />
            </div>}
        </div>
    );
}

export default SearchWrapperComponent;