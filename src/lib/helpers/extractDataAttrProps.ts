type ExtractedDataAttrs<P extends {}> = Record<string, Partial<P[keyof P]>>;

export const extractDataAttrProps = <P extends Record<any, any>>(props: P): ExtractedDataAttrs<P> => {
  const common: ExtractedDataAttrs<P> = {};
  for (const key in props) {
    if (isDataTidProp(key)) {
      common[key] = props[key];
    }
  }

  return common;
};

const isDataTidProp = (name: string) => {
  return name.indexOf('data-') === 0;
};
