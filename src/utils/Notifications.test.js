import React from 'react';
import { Provider } from 'react-redux';
import store from '../app/store';
import { mount   } from 'enzyme';
import { Notifications } from './Notifications';
import { Toast } from 'react-bootstrap';

describe('Notifications', () => {
    
    test('Notifications', () => {
        const component = mount(<Provider store={store}> 
                                    <Notifications index={1} message='Message Notification'/>
                                </Provider>);
        expect(component.find(<Toast/>)).toBeDefined();
        component.unmount();
    })
})