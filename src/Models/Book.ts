class Book {
    title: string;
    author_name: string[];
    first_publish_year: string;
    subject: string[];
    cover_i: string;

    constructor({ title, author_name, first_publish_year, subject, cover_i }: any) {
        this.title = title;
        this.author_name = author_name;
        this.first_publish_year = first_publish_year;
        this.subject = subject;
        this.cover_i = cover_i;
    }
}

export default Book;