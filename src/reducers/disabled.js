export function disabledReducer(state = false, action) {
    switch (action.type) {
        case 'IS_DISABLED': {
            return action.ans;
        }

        default:
            return state;
    }
}
