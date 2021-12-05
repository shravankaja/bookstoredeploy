import {render,screen} from "@testing-library/react";
import  Books from "../components/Books";
import { Provider } from "react-redux";
import store from '../store.js'
import Bookcard from "../components/Bookcard";





const MockBookList=()=>{

return(
  <Provider store={store}>
      <Books/>
    </Provider>
)

}

const MockSubcomponent=()=>{

  return(

    <Provider store={store}>
      <Bookcard/>
    </Provider>
  )

}


describe("Booklist ",()=>{
  it('render booklist items', async()=>{

    render(<MockSubcomponent/>);
    const bookitem= await screen.findByTestId('bookitem')
    expect(bookitem).toBeInTheDocument();

  })


})





