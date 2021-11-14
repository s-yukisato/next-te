import React from "react";
import { shallow } from "enzyme";

import Copyright from '~/components/Copyright';

import Typography from '@mui/material/Typography';


describe('Content', () => {
    it('should create a new content', () => {
        const wrapper = shallow(<Copyright />);
        
        expect(wrapper.find(Typography).exists()).toEqual(true);
    })

    it('should render Copyright', () => {
        const wrapper = shallow(<Copyright />);

        const typography = wrapper.find(Typography);

        expect(typography.text()).toBe('Copyright © Your Website 2021.')
    })
})