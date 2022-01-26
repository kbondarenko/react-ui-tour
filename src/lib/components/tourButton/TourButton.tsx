import * as React from 'react';
import styles from './TourButton.less';
import {DataAttrProps} from '../DataAttrProps';
import {extractDataAttrProps} from '../../helpers/extractDataAttrProps';

export interface TourButtonProps extends DataAttrProps {
  color: string;
  arrow?: string;
  style?: Object;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactText;
}

export function TourButton(props: TourButtonProps) {
  let className = `${styles.tourButton} ${styles[props.color + 'TourButton']}`;
  if (props.arrow === 'right' || props.arrow === 'left') {
    className = `${className} ${styles.tourButtonArrow} ${
      styles[props.arrow + 'TourButtonArrow']
    }`;
  }

  const dataAttrProps = extractDataAttrProps(this.props)

  return (
    <div style={{ display: 'inline-block' }}>
      <button {...dataAttrProps} style={props.style} className={className} onClick={props.onClick}>
        <div style={{ position: 'relative' }}>{props.children}</div>
      </button>
    </div>
  );
}
