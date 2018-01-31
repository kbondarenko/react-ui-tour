import * as React from 'react';

const styles = require('./Highlight.less');

export interface HighlightProps {
  pos: ClientRect;
  root: React.ReactElement<any>;
  backgroundColor?: string;
}

export function Highlight(props: HighlightProps) {
  const {pos, root, backgroundColor} = props;
  const width = pos.right - pos.left;
  const height = pos.bottom - pos.top;
  const computedStyles: React.CSSProperties = {
    borderColor: backgroundColor,
    borderTopWidth: pos.top + document.documentElement.scrollTop,
    borderLeftWidth: pos.left + document.documentElement.scrollLeft,
    borderRightWidth: document.documentElement.offsetWidth - pos.right,
    borderBottomWidth: document.documentElement.offsetHeight - pos.bottom,
    width: width,
    height: height,
  };

  return (
    <div className={styles.wrapper} style={computedStyles}>
      {root}
    </div>
  );
}
