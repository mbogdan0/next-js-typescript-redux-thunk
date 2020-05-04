import React, {
  ChangeEvent, FC, useState, useEffect,
} from 'react';
import { useInvite } from './hooks/useInvite';

export const Invite: FC = () => {
  const [text, setText] = useState('');
  const {
    add, loading, data, error, load,
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
        <div>LOADING: {JSON.stringify(loading)}</div>
        <div>DATA: {JSON.stringify(data)}</div>
        <div>ERROR: {JSON.stringify(error)}</div>
        <textarea onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)} />
        <button type="button" onClick={onSave}>
          Create
        </button>
      </div>
    </div>
  );
};
