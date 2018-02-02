import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticleList } from '../ducts/articleList';
import ArticleList from '../components/ArticleList';
import withLoading from '../hocs/withLoading';

const ArticleListWithLoading = withLoading(ArticleList);

class ArticleListContainer extends Component {
  static defaultProps = {
    onMount: () => {},
  };
  componentDidMount() {
    this.props.onMount();
  }
  render() {
    // props중 onMount를 제외하고 내려준다. (...rest)
    const { onMount, ...rest } = this.props;
    return (
      <ArticleListWithLoading {...rest} />
    );
  }
}

export default connect(
  // mapStateToProps
  state => ({
    articles: state.articleList.articles,
    loading: state.articleList.loading,
  }),
  // mapDispatchToProps
  dispatch => ({
    onMount: () => {
      dispatch(fetchArticleList());
    },
  }),
)(ArticleListContainer);
