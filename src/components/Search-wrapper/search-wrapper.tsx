import './search-wrapper.css';
import { InputText } from 'primereact/inputtext';
import {  useState } from 'react';
import { Button } from 'primereact/button';
import BooksViewComponent from '../Books-View/books-view';
import { ProgressSpinner } from 'primereact/progressspinner';
import BooksService from '../../Services/books.service';

function SearchWrapperComponent() {
    const [searchInput, setSearchInput] = useState('');
    const [keyword, setkeyword] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] =useState(false);
    function searchbooks() {
        if (searchInput != "") {
            console.log(searchInput);
            setLoading(true);
            BooksService.getBooks(searchInput).then((response) => {
                setkeyword(searchInput);
                setBooks(response.data.docs);
                setLoading(false);
            });
        }
    };

    return (
        <div>
            <header className="App-header">
                <p>Search Books</p>
                <div>
                    <InputText id="username" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder="Search" />
                    <Button disabled={searchInput == ""} icon="pi pi-search"  onClick={searchbooks} />
                </div>
            </header>
            {loading ? <div><ProgressSpinner /> </div> : 
            <div>
                {!books || books.length <1 ? 
                            <a>No results found {!keyword || keyword != "" ? "for: " + keyword : ""}</a> :
                <div>
                    <a className='search-label'>Showing results for: {searchInput}</a>
                    <BooksViewComponent books={books} keyword={searchInput} />
                </div>
                }
            </div>}
        </div>
    );
}

export default SearchWrapperComponent;