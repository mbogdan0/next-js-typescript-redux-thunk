import styled from 'styled-components';

type Props = {
  height: number;
}

export const TextArea = styled.textarea<Props>`
  width: 100%;
  height: ${({ height }) => `${height || 400}px`};
`;
