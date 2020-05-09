import React, { ChangeEvent, FC, useState } from 'react';
import { useInvite } from './hooks/useInvite';

export const Invite: FC = () => {
  const [text, setText] = useState('');
  const {
    add, loading, data, error,
  } = useInvite();
  const onSave = () => {
    add({
      text,
      id: Math.floor(Math.random() * 1000),
    });
  };
  return (
    <div>
      invite
      <div>
        {data.map((item) => (
          <div>
            <b>{item.id}</b>: {item.text}
          </div>
        ))}
        <div>LOADING: {JSON.stringify(loading)}</div>
        <div>ERROR: {JSON.stringify(error)}</div>
        <textarea onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)} />
        <button type="button" onClick={onSave}>
          Create
        </button>
      </div>
    </div>
  );
};
