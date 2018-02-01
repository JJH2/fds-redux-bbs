import { storiesOf } from '@storybook/react';
import React from 'react';
import ArticleList from '../src/components/ArticleList';

const articles = [
  {
    id: 'article0',
    title: '게시글 제목',
    createdAt: 1517453826267,
    nickName: '장재훈',
  },
  {
    id: 'article02',
    title: '게시글 제목2',
    createdAt: 1517453826267,
    nickName: '장재훈2',
  },
];
const articlesWithLink = articles.map(article => ({
  ...article,
  itemProps: {
    as: 'a',
    href: 'https://google.com',
  },
}));

storiesOf('ArticleList', module)
  .add('default', () => (
    <ArticleList articles={articles} />
  ))
  .add('Links', () => (
    <ArticleList articles={articlesWithLink} />
  ));
