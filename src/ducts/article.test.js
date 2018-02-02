import reducer, {
  articleCreating,
  articleSuccess,
  articleError,
} from './article';


describe('article', () => {
  it('리듀서 테스트', () => {
    const state = reducer(undefiend, articleCreating());
    expect(state).toEqual({
      creating: true,
      success: false,
      errorMessage: '',
    });
  });
});
