import styled from 'styled-components';

export const DivLabelField = styled.div`
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
