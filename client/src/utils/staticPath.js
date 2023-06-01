import {backend} from "../graphql/index.js";

function staticPath(link){
    return backend + "/" + link
}

export default staticPath