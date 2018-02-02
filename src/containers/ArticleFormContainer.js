import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ArticleForm from '../components/ArticleForm';
import { createArticle } from '../ducts/article';

class ArticleFormContainer extends Component {
  render() {
    const { success, ...rest } = this.props;
    if (success) {
      // FIXME!!! success를 false로 바꿔라
      return (
        <Redirect to="/list" />
      );
    }
    return (
      <ArticleForm {...rest} />
    );
  }
}

export default connect(
  // mapStateToProps
  state => ({
    creating: state.article.creating,
    success: state.article.success,
    errorMessage: state.article.errorMessage,
  }),
  // mapDispatchToProps
  dispatch => ({
    onSubmit: ({ title, content }) => {
      dispatch(createArticle({ title, content }));
    },
  }),
)(ArticleFormContainer);
