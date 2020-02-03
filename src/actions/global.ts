export default {
  SET_PAGE_TITLE: 'SET_PAGE_TITLE',
  SET_PAGE_TITLE_SUCCESS: 'SET_PAGE_TITLE_SUCCESS',
  SET_PAGE_TITLE_ERROR: 'SET_PAGE_TITLE_ERROR',
}

export const setPageTitle = (title: string) => ({
  type: 'SET_PAGE_TITLE',
  payload: title
})