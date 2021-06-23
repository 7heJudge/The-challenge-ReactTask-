export function newItems(state = [], action) {
    switch (action.type) {
        case 'NEW_LIST': {
            return action.newItems;
        }

        default:
            return state;
    }
}
