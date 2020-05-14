import React, { ChangeEvent, useState, forwardRef } from 'react';
import styled from 'styled-components';
import { Input } from '../styled/components/Input';
import { DivLabelField } from '../styled/components/DivLabelField';

type Props = {
  label: string;
  change: (string) => void;
  onChange?: never;
  defaultValue?: string;
  [x: string]: unknown;
};

export const InputField = forwardRef<HTMLInputElement, Props>((refProps, ref) => {
  const {
    defaultValue, label, change, ...props
  } = refProps;
  const [len, setLen] = useState(defaultValue?.length || 0);
  const changeVal = (e: ChangeEvent<HTMLInputElement>) => {
    setLen(e.target.value.length);
    change(e.target.value);
  };
  return (
    <DivLabelField>
      <div className="label">
        <span className="title">{label}</span>
        <span className="len">{len}</span>
      </div>
      <Input
        ref={ref}
        onChange={changeVal}
        defaultValue={defaultValue || ''}
        {...props}
      />
    </DivLabelField>
  );
});
