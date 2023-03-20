import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import "./book.css"
 
function BookComponent(props: any) {
    
    function getCover(id: any) {
        return "https://covers.openlibrary.org/b/id/"+id+"-M.jpg";
    }
    const header = (
        <Image className="image" src={getCover(props.book.cover_i)} alt="Image Text" />
    );

    return (
            <Card title={props.book.title} className="card" header={header}>
                <p className="m-0" style={{lineHeight: '1.5'}}>{props.book.author_name}</p>
            </Card>
    )
}

export default BookComponent;