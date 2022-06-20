import React from 'react';

import Button from './index'


export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Button',
  action: (args) => console.log(args),
  type: 'sucess',
  isDisable: false
}

