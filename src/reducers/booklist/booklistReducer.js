import { FETCH_BOOKLIST_FAILURE, FETCH_BOOKLIST_REQUEST, FETCH_BOOKLIST_SUCCESS } from "./bookistActions"


const initialState={
loading:false,
booklist:[],
error:''
}


const reducer=(state=initialState,action)=>{

switch(action.type){
        case FETCH_BOOKLIST_REQUEST:
            return{...state,
                loading:true}

        case FETCH_BOOKLIST_SUCCESS:
        
            return{loading:false,
                   booklist:action.payload,
                    error:'' }

        case FETCH_BOOKLIST_FAILURE:
            return{loading:false,
                    booklist:[],
                    error:action.payload

            }

        default: return state
}

}
export default reducer