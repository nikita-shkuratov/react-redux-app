import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../redux/actions';
import NewsPost from './NewsPost';
import { Loader } from '../../components/Loader/Loader';
import { Alert } from '../../components/Alert';
import './News.scss';
import { Input } from '../../components/Input';

export const News = () => {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.fetchNews);
    const loading = useSelector(state => state.appLoader.loading);
    const alert = useSelector(state => state.appLoader.alert);
    const { hits } = news

    useEffect(() => {
        dispatch(fetchNews());

    }, [])

    const [searchQuery, setSearchQuery] = useState([''])

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value)
    }

    const getSearch = ({ key }) => {
        if (key === 'Enter') {
            dispatch(fetchNews(searchQuery));
        }
    }

    if (loading) {
        return (
            <Fragment>
                <Loader />
                <br />
                {alert !== null && <Alert title={alert} type='danger' />}
            </Fragment>
        );
    };

    return (
        <Fragment>
            {alert !== null && <Alert title={alert} type='success' />}
            <div className="wrapper">

                <Input
                    onKeyPress={getSearch}
                    onChange={handleInputChange}
                    value={searchQuery}
                    onClick={() => dispatch(fetchNews(searchQuery))} />

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
        </Fragment>
    )
}
