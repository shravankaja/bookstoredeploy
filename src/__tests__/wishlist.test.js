import React from "react";
import WishList from '../components/Wishlist'
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import store from "../store"
import { Provider } from "react-redux";

Enzyme.configure({ adapter: new Adapter() });
const wrapper = mount(<Provider store={store}>
    <WishList /></Provider> );

describe("testing the WishList component", () => {
    it("renders the main div of wishlist", () => {
        expect(wrapper.find(".wishlist-outercontainer")).toHaveLength(1);
    })
})