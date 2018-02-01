import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import LoginScreen from '../src/components/LoginScreen';

storiesOf('LoginScreen', module)
  .add('default', () => (
    <LoginScreen onGoogleLogin={action('onGoogleLogin')} />
  ));
