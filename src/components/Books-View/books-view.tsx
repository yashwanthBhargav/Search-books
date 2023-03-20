import { useState } from 'react';
import './books-view.css';
import { Dialog } from 'primereact/dialog';
import BookComponent from '../Book/book';


function BooksViewComponent(props:any) {
    console.log(props);
    const[visible, setVisible] = useState(false)
    const [selected, setSelected] = useState(null);
    const openBookView=(col: any) =>{
        setSelected(col);
        setVisible(true);
    }

    function getCover(id: any) {
        return "linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('https://covers.openlibrary.org/b/id/"+id+"-M.jpg')";
    }
    
    return (
        <div className="p-grid p-mt-2 books-grid">
                        {   !props.books || props.books.length <1 ? 
                            <a>Enter name in the search bar to view the relevant books</a> :
                            props.books.map((col: any) =>{
                                console.log(col);
                                return (
                                    // <BookComponent book={col}/>
                                     <div key={col} className="p-col card" style={{backgroundImage: getCover(col.cover_i)}} onClick={() => openBookView(col)}>
                                        <div className="title">{col.title}</div>
                                        <div className="author">
                                            <p>By-</p>{col.author_name}
                                        </div>
                                    </div>
                                    )
                                }
                            )
                        }
                    <Dialog header="Header" visible={visible} style={{ width: '50vw' }}  onHide={() => setVisible(false)}>
                        <div className="title">{selected ? selected['title'] : ''}</div>
                        <div className="author">
                            <p>By-</p>{selected ? selected['author_name'] : ''}
                        </div>
                        <div className="author">
                            <p>Published on</p>{selected ? selected['first_publish_year'] : ''}
                        </div>
                    </Dialog>
        </div>);
}

export default BooksViewComponent;