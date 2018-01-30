# 스토리북을 설정하기
Link: [storybook-react](https://storybook.js.org/basics/guide-react/)

```js
// dev용 스토리북을 설치
// npm i --save-dev @storybook/react

// package.json에 추가
{
  "scripts": {
    "storybook": "start-storybook -p 9001 -c .storybook"
  }
}

// .storybook/config.js 폴더와 파일을 만든 후 내용을 추가
import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);

// ../stories/index.js 폴더와 파일을 만든 후 내용을 추가
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('button', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello button</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ));
```
