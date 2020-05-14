import React, { FC } from 'react';
import styled from 'styled-components';
import { Entry } from '../types/entry';


type Props = {
  data: Entry;
}
export const EntryBlock: FC<Props> = ({ data }: Props) => (
  <Div>
    <H3 dangerouslySetInnerHTML={{ __html: data.title }} />
    <DateTime>{data.date}</DateTime>
    <div dangerouslySetInnerHTML={{ __html: data.short }} />
    <Details>
      <a href="#aa">
        читать полностью
      </a>
    </Details>
  </Div>
);

const Div = styled.div`
  margin-bottom: 64px;
`;

const Details = styled.div`
  margin: 12px 0 0;
`;

const H3 = styled.h3`
  padding: 0;
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: 31px;
  font-weight: normal;
`;

const DateTime = styled.div`
  margin: 12px 0;
  font-style: italic;
  color: gray;
`;
