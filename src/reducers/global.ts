import actions from '@actions/global'
import { State } from '@typings/global'

const initialState: State = {
  title: ''
}

export default function common(state = initialState, action: any) {
  switch (action.type) {
      case actions.SET_PAGE_TITLE:
        return {
          ...state,
          title: action.payload
        };
      default:
        return state;
  }
}