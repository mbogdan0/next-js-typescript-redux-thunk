import React, { FC, useState } from 'react';
import { InputField } from '../../components/InputField';
import { TextAreaField } from '../../components/TextAreaField';
import { Button } from '../../styled/components/Button';

export const CreateForm: FC = () => {
  const [form, setForm] = useState({
    title: '',
    slug: '',
    short: '',
    message: '',
  });
  return (
    <div>
      <InputField
        label="Название поста:"
        change={(val) =>
          setForm({ ...form, title: val })}
      />
      <InputField
        label="Slug ссылки:"
        change={(val) =>
          setForm({ ...form, slug: val })}
      />
      <TextAreaField
        label="Сокращенная запись:"
        height={230}
        change={(val) =>
          setForm({ ...form, short: val })}
      />
      <TextAreaField
        label="Полный текст записи:"
        height={460}
        change={(val) =>
          setForm({ ...form, message: val })}
      />
      <Button>
        Добавить пост
      </Button>
    </div>
  );
};
