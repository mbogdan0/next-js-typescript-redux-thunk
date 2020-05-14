import React, { FC } from 'react';
import styled from 'styled-components';
import { useThemeSelector } from './hooks/useThemeSelector';
import { EnumTheme } from '../../styled/theme/types';
import { greenTheme } from '../../styled/designs/green-theme';
import { redTheme } from '../../styled/designs/red-theme';
import { greyTheme } from '../../styled/designs/grey-theme';
import { blueTheme } from '../../styled/designs/blue-theme';
import { mq } from '../../styled/mq';


export const ThemeSelector: FC = () => {
  const { selected, switchTheme } = useThemeSelector();
  const toRed = () => switchTheme('red');
  const toGreen = () => switchTheme('green');
  const toGrey = () => switchTheme('grey');
  const toBlue = () => switchTheme('blue');
  return (
    <Div>
      { selected !== 'red' && <CircleSpan palette="red" onClick={toRed} />}
      { selected !== 'blue' && <CircleSpan palette="blue" onClick={toBlue} />}
      { selected !== 'green' && <CircleSpan palette="green" onClick={toGreen} />}
      { selected !== 'grey' && <CircleSpan palette="grey" onClick={toGrey} />}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  margin: 18px 0 0 0;
  ${mq.mobile} {
    margin: 18px 8px 0 0;
  }
`;

const colorPalette = {
  green: greenTheme.colors.background,
  red: redTheme.colors.background,
  grey: greyTheme.colors.background,
  blue: blueTheme.colors.background,
};

const CircleSpan = styled.div<{ palette: EnumTheme }>`
  box-sizing: border-box;
  width: 28px;
  height: 28px;
  margin: 0 2px;
  border-radius: 15px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 1);
  background: ${({ palette }) => colorPalette[palette]};
`;
