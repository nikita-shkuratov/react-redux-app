import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../../redux/actions';
import { PostsList } from './PostsList';
import { Loader } from '../../components/Loader';
import { Alert } from '../../components/Alert';

export const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.fetchPosts)
    const loading = useSelector(state => state.appLoader.loading)
    const alert = useSelector(state => state.appLoader.alert)

    if (loading) {
        return (
            <Fragment>
                <Loader />
                <br/>
                {alert !== null && <Alert title={alert} type='danger' />}
            </Fragment>
        )
    }

    return (
        <div>
            <h1>Posts Page</h1>
            {alert !== null && <Alert title={alert} type='success' />}
            <button onClick={() => dispatch(fetchPost())} type="button" className="btn btn-primary btn-lg btn-block">LOADING POSTS</button>
            <ul className="list-group">
                {posts.map(post => <PostsList id={post.id} title={post.title} body={post.body} />)}
            </ul>
        </div>

    )
}

