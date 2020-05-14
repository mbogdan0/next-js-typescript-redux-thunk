import React, { FC } from 'react';
import { useLoadMainEntries } from './hooks/useLoadMainEntries';
import { EntryBlock } from '../../components/EntryBlock';

export const EntriesMain: FC = () => {
  const { data } = useLoadMainEntries();
  return (
    <>
      {data.map((item) => <EntryBlock data={item} key={item.slugId} />)}
    </>
  );
};
