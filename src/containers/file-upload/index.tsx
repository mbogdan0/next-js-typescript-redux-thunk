import React, { createRef, FC, useState } from 'react';
import { HeaderText } from '../../styled/components/HeaderText';
import { InputFileField } from '../../components/InputFileField';

export const FileUpload: FC = () => {
  const fileField = createRef<HTMLInputElement>();
  const change = () => {
    alert(1);
  };
  return (
    <div>
      <HeaderText>
        Загрузка картинок
      </HeaderText>
      <InputFileField
        onChange={change}
        ref={fileField}
        label="Картинка"
      />
    </div>

  );
};
