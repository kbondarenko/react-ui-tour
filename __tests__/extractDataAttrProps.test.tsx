import * as React from "react";
import {extractDataAttrProps} from '../src/lib/helpers/extractDataAttrProps';

describe('extractDataAttrProps', () => {
  it('should expect error if parameter is not object or undefined', () => {
    // @ts-expect-error
    expect(extractDataAttrProps('dfs')).toBeDefined();
  })

  const expected = {
    'data-index': 1,
    'data-tid': 'tid',
  }

  it.each`
    input                     | expected

    ${{
      ...expected,
      color: '#FFF',
      width: 100,
    }}                        | ${expected}

    ${{
      color: '#FFF',
      width: 100,
    }}                        | ${{}}
    
    ${null}                   | ${{}}
    ${undefined}              | ${{}}
  `('should return value $expected on $input', ({input, expected}) => {
    expect(extractDataAttrProps(input)).toEqual(expected);
  })
});
