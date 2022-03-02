import useFetch from "../customize/fetch";
import './Blog.scss';
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const Blog = () => {
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([]);
    const handleClose = () => {
        return setShow(false);
    }
    const handleShow = () => {
        return setShow(true);
    }

    const { data: dataBlogs, isLoading, isError }
        = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);

    useEffect(() => {
        if (dataBlogs && dataBlogs.length > 0) {
            let data = dataBlogs.slice(0, 9);
            setNewData(data);
        }
    }, [dataBlogs])



    const handleAddNew = (blog) => {
        let datas = newData;
        datas.unshift(blog);
        setShow(false);
        setNewData(datas);
    }

    const deletePost = (id) => {
        let datas = newData;
        datas = datas.filter(item => item.id != id);
        setNewData(datas);
    }

    return (
        <>
            <Button variant="primary" className="my-3" onClick={handleShow}>
                + Add new blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog handleAddNew={handleAddNew} />
                </Modal.Body>
            </Modal>

            <div className="blogs-container">
                {isLoading === false && newData && newData.length > 0 && newData.map(item => {

                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title">
                                <span>{item.title} </span>
                                <span onClick={() => deletePost(item.id)}>X</span>
                            </div>
                            <div className="content">{item.body}</div>
                            <button>
                                <Link to={`/blog/${item.id}`}>  View detail</Link>
                            </button>
                        </div>
                    )
                })}

                {isLoading === true &&
                    <div style={{ textAlign: 'center !important', width: '100%' }}>Loading data...</div>
                }

                {isError === true
                    && <div style={{ textAlign: 'center !important', width: '100%' }}>Something wrong... </div>
                }
            </div>
        </>
    )
}

export default Blog;