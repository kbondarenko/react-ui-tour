import {mount} from 'enzyme';
import {TourButton} from '../src/lib';
import * as React from 'react';

describe('TourButton', () => {
  it('should support data-* attrs', () => {
    const wrapper = mount(<TourButton data-tid="button-tid" data-index="1" color="blue" arrow="right" onClick={() => null}>Button text</TourButton>)

    expect(wrapper.find('*[data-tid="button-tid"]').hostNodes().length).toBe(1)
    expect(wrapper.find('*[data-index="1"]').hostNodes().length).toBe(1)
  })
})