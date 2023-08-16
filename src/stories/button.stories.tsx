// Button.stories.tsx
import React from 'react';
import type { Meta, Story } from '@storybook/react';
import Button from '../../src/components/button/button.component';
import type { ButtonProps } from '../../src/components/button/button.component';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Button with Icon',
  withIcon: true,
  // icon: <SomeIconComponent />,
};

export const NewInvoice = Template.bind({});
NewInvoice.args = {
  children: 'New Invoice',
  variant: 'newInvoice',
};
