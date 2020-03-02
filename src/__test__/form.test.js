import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Form from '../components/form.js';

Enzyme.configure({adapter: new Adapter() });

describe('<Form />', ()=>{
  it('can render Form',()=>{
    let app = mount(<Form/>);
    let form = app.find('form');
    expect(form.exists()).toBeTruthy();
  });

  it('can render to the DOM',()=>{
    const rendered = renderer.create(<Form />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it('can GET', () => {
    let app = mount(<Form />);
    let button = app.find('button');
    button.simulate('click');
    expect(app.state('body')).toEqual({});
  });
});