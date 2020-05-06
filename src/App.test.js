import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import { shallow, render, mount   } from 'enzyme';
import 'enzyme';
import { Movies } from './features/movies/Movies'
import { Notifications } from './utils/Notifications'

describe('Test App', () => {

  test('render the app', () => {
    const component = shallow(<Provider store={store}> <App /> </Provider>);
    expect(component).toMatchSnapshot();
  });

  test('should have logo', () => {
    const component = mount( <Provider store={store}> <App /> </Provider>);
    expect(component.find('#logo')).toBeDefined();
    expect(component.find('GlobalLoader')).toBeDefined();
    component.unmount();
  });
  
});

describe('render Movies', () => {
  test('Movies', () => {
    const movie = shallow(<Provider store={store}><Movies/></Provider>);
    expect(movie).toMatchSnapshot();
  })
})

describe('render Notifications', () => {
  test('Notifications', () => {
    const movie = shallow(<Provider store={store}><Notifications/></Provider>);
    expect(movie).toMatchSnapshot();
  })
})
