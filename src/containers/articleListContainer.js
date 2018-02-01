import { connect } from 'react-redux';
import { fetchArticleList } from '../ducts/articleList';
import ArticleList from '../components/ArticleList';

export default connect(
  // mapStateToProps
  state => ({
    articles: state.articleList.articles,

  }),
  // mapDispatchToProps
  dispatch => ({
    onMount: () => {
      dispatch(fetchArticleList());
    },
  }),
)(ArticleList);
