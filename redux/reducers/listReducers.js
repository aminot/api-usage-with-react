const INITIAL_STATE = [];
const listReducer = (state = INITIAL_STATE,action) => {
    
    switch (action.type){
        case "ADD_NAME":
            console.log("rrrrrrrr")
            return [...state,action.payload]
            break;
            case "ADD_EMAIL":
                console.log("rrrrrrrr")
                return [...state,action.payload]
                break;
                case "ADD_GENDER":
                    console.log("rrrrrrrr")
                    return [...state,action.payload]
                    break;
                    case "ADD_STATUS":
                        console.log("rrrrrrrr")
                        return [...state,action.payload]
                        break;
            default:
             return state
              break;
    }
}

export default listReducer;