import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ArticleForm from '../src/components/ArticleForm';

storiesOf('ArticleForm', module)
  .add('default', () => (
    <ArticleForm />
  ))
  .add('error message', () => (
    <ArticleForm onSubmit={action('onSubmit')} errorMessage="필드를 모두 채워야 합니다." />
  ))
  .add('creating', () => (
    <ArticleForm creating />
  ));
