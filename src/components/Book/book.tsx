import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import "./book.css"
 
function BookComponent(props: any) {
    console.log(props);
    
    function getCover(id: any) {
        return "https://covers.openlibrary.org/b/id/"+id+"-L.jpg";
    }
    const header = (
        <Image onClick={($event) => $event.preventDefault()} className="image" src={getCover(props.book.cover_i)} height="200px" alt="Image Text" />
    );

    return (
            <Card title={props.book.title} className=" p-col card" header={header} onClick={() => props.view(props.book)}>
                <p className="author" style={{lineHeight: '1.5'}}>{props.book.author_name}</p>
            </Card>
    )
}

export default BookComponent;