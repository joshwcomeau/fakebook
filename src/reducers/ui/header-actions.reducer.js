import {
  TOGGLE_FLYOUT
} from '../../actions';


const initialState = {
  activeFlyout: null,
};

// ////////////////////
// Reducers //////////
// //////////////////
export default function headerActions(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FLYOUT:
      // If we clicked the same button that opened the flyout, it should close.
      const newFlyoutValue =  action.flyout !== state.activeFlyout
        ? action.flyout
        : null;

      return {
        ...state,
        activeFlyout: newFlyoutValue,
      };

    default:
      return state;
  }
}


// ////////////////////
// Selectors /////////
// //////////////////
