import React, { ChangeEvent, useState, forwardRef } from 'react';
import { TextArea } from '../styled/components/TextArea';
import { DivLabelField } from '../styled/components/DivLabelField';


type Props = {
  label: string;
  height?: number;
  change: (string) => void;
  onChange?: never;
  defaultValue?: string;
  [x: string]: unknown;
};

export const TextAreaField = forwardRef<HTMLTextAreaElement, Props>((refProps, ref) => {
  const {
    height = 500,
    defaultValue,
    label,
    change,
    ...props
  } = refProps;
  const [len, setLen] = useState(defaultValue?.length || 0);
  const changeVal = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLen(e.target.value.length);
    change(e.target.value);
  };
  return (
    <DivLabelField>
      <div className="label">
        <span className="title">{label}</span>
        <span className="len">{len}</span>
      </div>
      <TextArea
        ref={ref}
        defaultValue={defaultValue || ''}
        onChange={changeVal}
        height={height}
        {...props}
      />
    </DivLabelField>
  );
});
