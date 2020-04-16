import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../../redux/actions'
import { CardPost } from './CardPost'
import { Loader } from '../../components/Loader/Loader'
import { Alert } from '../../components/Alert'
import { Button } from '../../components/Button'
import './Posts.scss'

export const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.fetchPosts)
    const loading = useSelector(state => state.appLoader.loading)
    const { text } = useSelector(state => state.appLoader.alert)

    if (loading) {
        return (
            <Fragment>
                <Loader /><br />
                {text !== null && <Alert title={alert} type='danger' />}
            </Fragment>
        )
    }

    return (
        <div>
            {text !== null && <Alert title={text} type='success' />}
            <Button id='btn_loading_posts' onClick={() => dispatch(fetchPost())} type={'primary'} title='LOADING POSTS' />
            {posts.length > 0 &&
                <div>
                    <ul className="posts_list_contaner">
                        {posts.map(post => <CardPost key={post.id} title={post.title} body={post.body} />)}
                    </ul>
                </div>}
        </div>
    )
}
