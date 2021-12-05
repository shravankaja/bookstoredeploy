import {render} from "@testing-library/react";
import Header from "../components/Header";


describe("Header Component",()=>{

    it("render search-input",()=>{

        const {getByTestId} =render(<Header/>);
        const input=getByTestId("searchbar");
        expect(input).toBeTruthy();
    })

})