import { useParams, useHistory } from "react-router-dom";

const DetailBlog = () => {
    let {id} = useParams();

    let history = useHistory();

    const handleBackList = () =>{
        history.push("/blog");
    }

    return (
        <>
            <div><span onClick={handleBackList}>&lt;-- Back</span></div>
            <h1>Hello detail blogs with id = {id}</h1>
        </>
    )
}

export default DetailBlog;