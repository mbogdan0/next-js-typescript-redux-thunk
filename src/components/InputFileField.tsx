import React, { forwardRef } from 'react';
import { InputFile } from '../styled/components/InputFile';

type Props = {
  [x: string]: any;
}

export const InputFileField = forwardRef<HTMLInputElement, Props>((refProps, ref) => {
  return (
    <InputFile
      ref={ref}
      type="file"
      {...refProps}
    />
  );
});
