import styled from 'styled-components';
import Button from '@mui/material/Button';

import { ButtonProps } from './button.component';

export const StyledButton = styled(Button) <ButtonProps>`
  && {
    outline: 3px solid ${({ theme }) => theme.primaryColor};
  }
`;
