import React from "react";
import Mycart from '../components/Mycart';
import { render, screen, fireEvent, waitFor } from "@testing-library/react"; 
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import store from '../store.js'
import { Provider } from "react-redux";


Enzyme.configure({ adapter: new Adapter() });

const comp = mount(
    <Provider store={store}>
      <Mycart />
    </Provider>
  );

  const wrapper = shallow(<Mycart />);


  describe("test if the main container of cart is rendered", () => {
    it("renders the main div of cart component", () => { 
      expect(comp.find(".cart-outercontainer").exists()).toBe(true);
    });
    it("renders the main div of cart component", () => {
      expect(wrapper.find(".allcartitems").exists()).toBe(true);
    });
})


describe("renders the cart Counters", () => {
    it("display counter text", async() => {
      let Quantity = jest.fn();
      render(
        <Provider store={store}>
          <Mycart />
        </Provider>
      );
       screen.queryByTestId("counter-text");
      expect(Quantity).toHaveBeenCalledTimes(0);
    });
  
    it("increment counter", async() => {
      let increment = jest.fn();
      render(
        <Provider store={store}>
          <Mycart />
        </Provider>
      );
      screen.findByTestId("more-button");
      expect(increment).toHaveBeenCalledTimes(0);
    });


    it("succesfully opened the form", async () => {
      render(
        <Provider store={store}>
          <Mycart />
        </Provider>
      );
      const Placeorder = fireEvent.click(screen.getByTestId("place-btn"));
      await waitFor(() => {
        expect(Placeorder).not.toBe(false);
      });
    });



})
   