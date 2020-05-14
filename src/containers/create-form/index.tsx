import React, { FC, useState, createRef } from 'react';
import { InputField } from '../../components/InputField';
import { TextAreaField } from '../../components/TextAreaField';
import { Button } from '../../styled/components/Button';
import { useCreatePost } from './hooks/useCreatePost';

export const CreateForm: FC = () => {
  const [form, setForm] = useState({
    title: 'title',
    short: 'short',
    message: 'message',
    tags: '',
    seoTitle: '',
    seoDescription: '',
    seoTags: '',
    password: 'rjGhy09oKaz1Qa0pF',
  });
  const titlePostRef = createRef<HTMLInputElement>();
  const shortPostRef = createRef<HTMLTextAreaElement>();
  const messagePostRef = createRef<HTMLTextAreaElement>();
  const tagsPostRef = createRef<HTMLInputElement>();
  const passwordPostRef = createRef<HTMLInputElement>();
  const {
    error,
    success,
    createPost,
    loading,
  } = useCreatePost();
  const submit = () => {
    if (form?.title?.trim()?.length < 1) {
      return titlePostRef.current.focus();
    }
    if (form?.short?.trim()?.length < 1) {
      return shortPostRef.current.focus();
    }
    if (form?.message?.trim()?.length < 1) {
      return messagePostRef.current.focus();
    }
    if (form?.tags?.trim()?.length < 1) {
      return tagsPostRef.current.focus();
    }
    if (form?.password?.trim()?.length < 1) {
      return passwordPostRef.current.focus();
    }
  };
  return (
    <div>
      <InputField
        ref={titlePostRef}
        defaultValue={form.title}
        label="Название поста:"
        change={(val) =>
          setForm({ ...form, title: val })}
      />
      <TextAreaField
        ref={shortPostRef}
        defaultValue={form.short}
        label="Сокращенная запись:"
        height={230}
        change={(val) =>
          setForm({ ...form, short: val })}
      />
      <TextAreaField
        ref={messagePostRef}
        defaultValue={form.message}
        label="Полный текст записи:"
        height={460}
        change={(val) =>
          setForm({ ...form, message: val })}
      />
      <InputField
        ref={tagsPostRef}
        defaultValue={form.tags}
        label="Теги, через запятую:"
        change={(val) =>
          setForm({ ...form, tags: val })}
      />
      <InputField
        defaultValue={form.seoTitle}
        label="SEO title:"
        change={(val) =>
          setForm({ ...form, seoTitle: val })}
      />
      <InputField
        defaultValue={form.seoDescription}
        label="SEO description:"
        change={(val) =>
          setForm({ ...form, seoDescription: val })}
      />
      <InputField
        defaultValue={form.seoTags}
        label="SEO tags:"
        change={(val) =>
          setForm({ ...form, seoTags: val })}
      />
      <hr />
      <InputField
        ref={passwordPostRef}
        defaultValue={form.password}
        label="Пароль для добавления:"
        change={(val) =>
          setForm({ ...form, password: val })}
      />
      <Button onClick={submit}>
        Добавить пост
      </Button>
    </div>
  );
};
