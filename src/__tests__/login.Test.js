
import { screen, render, cleanup, fireEvent } from '@testing-library/react'
import Enzyme, { shallow, mount, EnzymeAdapter } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Login, {userlogin} from '../pages/login';



Enzyme.configure({ adapter: new Adapter() })

const wrapper=shallow(<Login/>);




test('renders without error',()=>{

const loginComponent= wrapper.find("[data-test='component-login']");
expect(loginComponent.length).toBe(1);

});



describe("login  mounted ",()=>{

        test("test if Login is Mounted", () => { 
            
            // console.log(wrapper.debug());               
            expect(wrapper.find('.right-login-card').exists())
        
        })
        
})


describe("test if conditonal rendering elements are working as expected", () => {
    it("test if Signup is mounted", () => {
        render(<Login />)
        let SignupButton = document.querySelector('#user-signup')
        fireEvent.click(SignupButton)
        expect(document.querySelector(".indicator-2")).toBeInTheDocument()
    })
    
})


    test(" Test login button click",()=>{
        const userlogin=sinon.spy();
        const button=shallow((<button id="login" onClick={userlogin}/>))
        button.find('#login').simulate('click');
        expect(userlogin).toHaveProperty('callCount', 1);

    })

 


