import axios from "axios";

const baseURL = "https://openlibrary.org/search.json?q=";

const BooksService = {
    getBooks: function(input: string) {
        return axios.get(baseURL + input);
    }
}

export default BooksService;