import { useState } from 'react';
import './books-view.css';
import BookComponent from '../Book/book';
import BookDetails from '../Book-Details/book-details';


function BooksViewComponent(props:any) {
    const[visible, setVisible] = useState(false)
    const [selected, setSelected] = useState(null);
    const openBookView=(col: any) =>{
        setSelected(col);
        setVisible(true);
    }
    
    return (
        <div className="p-grid p-mt-2 books-grid">
                        {   !props.books || props.books.length <1 ? 
                            <a>Enter name in the search bar to view the relevant books</a> :
                            props.books.map((col: any) =>{
                                return (
                                    <BookComponent book={col} view={openBookView}/>
                                    )
                                }
                            )
                        }
                    <BookDetails selected={selected} visible={visible} setVisible={setVisible}/>
                    
        </div>);
}

export default BooksViewComponent;