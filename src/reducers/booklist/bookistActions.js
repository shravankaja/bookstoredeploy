import axios from 'axios'
export const FETCH_BOOKLIST_REQUEST='FETCH_BOOKLIST_REQUEST'
export const FETCH_BOOKLIST_SUCCESS='FETCH_BOOKLIST_SUCCESS'
export const FETCH_BOOKLIST_FAILURE='FETCH_BOOKLIST_FAILURE'



export const fetchBooklistRequest=()=>{

    return{
        type:FETCH_BOOKLIST_REQUEST
    }
}

export const fetchBooklistSuccess=(booklist)=>{

    return{
        type:FETCH_BOOKLIST_SUCCESS,
        payload:booklist
    }

}

export const fetchBooklistFailure=(error)=>{

    return{
        type:FETCH_BOOKLIST_FAILURE,
        payload:error
    }
}

export const fetchBooklist=()=>{
    return(dispatch)=>{
        dispatch(fetchBooklistRequest())
        axios.get("https://new-bookstore-backend.herokuapp.com/bookstore_user/get/book")
        .then(response=>{
            console.log(response.data.result)
            const booklist=response.data.result
            dispatch(fetchBooklistSuccess(booklist))
        }).catch(error=>{

            const errorMsg=error.message;
            dispatch(fetchBooklistFailure(errorMsg))
        })

    }

}