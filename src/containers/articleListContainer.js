import { connect } from 'react-redux';
import { fetchArticleList } from '../ducts/articleList';
import ArticleList from '../components/ArticleList';
import withLoading from '../hocs/withLoading';

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
)(withLoading(ArticleList));
