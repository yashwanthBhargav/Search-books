import { Dialog } from 'primereact/dialog';

function BookDetails({selected, visible, setVisible}: any) {
    return (
        <Dialog header={selected ? selected['title'] : ''} visible={visible} style={{ width: '50vw' }}  onHide={() => setVisible(false)}>
                        <div className="info">
                            <p className="label">By: </p>
                            <p className='value'>{selected ? selected['author_name'] : '-'}</p>
                        </div>
                        <div className="info">
                            <p className="label">Published : </p>
                            <p className='value'>{selected ? selected['first_publish_year'] : '-'}</p>
                        </div>
                        <div className="info">
                            <p className="label">Publisher : </p>
                            <p className='value'>{selected ? selected['publisher'] : '-'}</p>
                        </div>
                        <div className="info">
                            <p className="label">Subject : </p>
                            <p className='value'>{selected ? selected['subject'] : '-'}</p>
                        </div>
                    </Dialog>
    );
}

export default BookDetails;