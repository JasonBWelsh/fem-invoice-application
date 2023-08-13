import react from 'react';

import { StyledButton } from './button.styles';

type ButtonVariants = 'default' | 'newInvoice' | 'markAsPaid' | 'edit' | 'saveAsDraft' | 'delete' | 'addItem';

export interface ButtonProps {
  variant?: ButtonVariants;
  withIcon?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ variant = 'default', withIcon = false, icon, children, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {withIcon && icon}
      {children}
    </StyledButton>
  );
};

export default Button;
