import { useParams } from "react-router-dom";

const DetailBlog = () => {
    let {id} = useParams();

    return (
        <h1> Hello detail blogs with id = {id}</h1>
    )
}

export default DetailBlog;