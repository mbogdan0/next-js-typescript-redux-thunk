import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';
import { TextArea } from '../styled/components/TextArea';


type Props = {
  label: string;
  height?: number;
  change: (string) => void;
  onChange?: never;
  [x: string]: unknown;
};

export const TextAreaField: FC<Props> = ({ label, change, height = 400, ...props }: Props) => {
  const [len, setLen] = useState(0);
  const changeVal = (e: ChangeEvent<HTMLInputElement>) => {
    setLen(e.target.value.length);
    change(e.target.value);
  };
  return (
    <Div>
      <div className="label">
        <span className="title">{label}</span>
        <span className="len">{len}</span>
      </div>
      <TextArea
        onChange={changeVal}
        height={height}
        {...props}
      />
    </Div>
  );
};

const Div = styled.div`
  margin: 14px 0 28px;
  font-size: 1.05em;
  color: ${({ theme }) => theme.colors.inputLabelColor};
  .label {
    margin: 0 2px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .len {
      font-size: .9em;
    }
  }
`;
