import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../redux/actions'
import NewsPost from './NewsPost'
import { Loader } from '../../components/Loader/Loader'
import { Alert } from '../../components/Alert'
import './News.scss'

export const News = () => {
    const dispatch = useDispatch()
    const news = useSelector(state => state.news.fetchNews)
    const loading = useSelector(state => state.appLoader.loading)
    const { text } = useSelector(state => state.appLoader.alert)
    const { hits } = news

    useEffect(() => {
        dispatch(fetchNews());
        // eslint-disable-next-line
    }, [])

    const [searchQuery, setSearchQuery] = useState([''])

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value)
    }

    const getSearch = ({ key }) => {
        if (key === 'Enter') {
            dispatch(fetchNews(searchQuery))
        }
    }

    if (loading) {
        return (
            <Fragment>
                <Loader />
                <br />
                {text !== null && <Alert title={text} type='danger' />}
            </Fragment>
        )
    }

    return (
        <Fragment>
            {text !== null && <Alert title={text} type='success' />}
            <div className="wrapper_news">
                <div id='news_input_group' className="input-group mb-3">
                    <input
                        id='news_input'
                        type="text"
                        className="form-control"
                        placeholder="What news are we looking for?"
                        aria-label="What news are we looking for?"
                        aria-describedby="button-addon2"
                        onChange={handleInputChange}
                        onKeyPress={getSearch}
                        value={searchQuery} />
                    <div className="input-group-append">
                        <button onClick={() => dispatch(fetchNews(searchQuery))} className="btn btn-success" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
                <div className='news_container'>
                    <ul className='news-list'>
                        {hits && hits.map(hit => <NewsPost
                            key={hit.objectID}
                            author={hit.author}
                            created_at={hit.created_at}
                            num_comments={hit.num_comments}
                            title={hit.title}
                            points={hit.points}
                            url={hit.url} />)}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}
