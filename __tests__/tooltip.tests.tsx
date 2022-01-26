import {mount} from 'enzyme';
import {Tooltip} from '../src/lib';
import * as React from 'react';

describe('Tooltip', () => {
  it('should support data-* attrs', () => {
    const wrapper = mount(<Tooltip data-tid="some-tid" data-index="1" targetGetter={() => null} positions={["right top"]}>
      <Tooltip.Container>
        <Tooltip.Header>Header</Tooltip.Header>
        <Tooltip.Body>Content</Tooltip.Body>
        <Tooltip.Footer>Footer</Tooltip.Footer>
      </Tooltip.Container>
    </Tooltip>)

    expect(wrapper.find('*[data-tid="some-tid"]').length).toBe(1)
    expect(wrapper.find('*[data-index="1"]').length).toBe(1)
  })
});
