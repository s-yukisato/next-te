import React from "react";
import { shallow, mount } from "enzyme";

import Content from '~/pages/content';


describe('Content', () => {
    it('should create a new content', () => {
        const wrapper = mount(<Content />);
        // console.log(wrapper.debug());
    })
})