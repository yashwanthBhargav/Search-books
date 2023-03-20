const initialState = {
    loading: false,
    Books: [],
    error: ''
}

const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST'
const FETCH_BOOKS_SUCCESS= 'FETCH_BOOKS_SUCCESS'
const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE'

const fetchBooksRequest = () => {
    return {
        type: FETCH_BOOKS_REQUEST
    }
}

const fetchBooksSuccess = (books: any) => {
    return {
        type: FETCH_BOOKS_REQUEST,
        payload: books
    }
}


const fetchBookserror = (error: any) => {
    return {
        type: FETCH_BOOKS_REQUEST,
        payload: error
    }
}

const reducer = (state: any = initialState, action: any ) => {
    switch(action.type) {
        case FETCH_BOOKS_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                loading: false,
                books: action.payload,
                error: ''
        
            }
        case FETCH_BOOKS_FAILURE:
            return {
                ...state,
                loading: false,
                books: [],
                error: action.payload
        
            }
    }
}

export default reducer;