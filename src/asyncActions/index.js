import {getCats} from "../store/catsReducer";


export const fetchCats = (after) => {
    return (dispatch) => {
        fetch(`https://www.reddit.com/r/cats.json?limit=5${after ? '&after=' + after : ''}`)
            .then(response => response.json())
            .then(json => dispatch(getCats(json.data)))
    }
}
