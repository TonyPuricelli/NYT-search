import React from 'react';
import moment from 'moment';

const Article = ({title, url, _id, date, handleClick, buttonText, saved}) => (
    <div>
        <em>{title}</em>
        <p>{moment(date).format('MMMM Do YYYY, h:mm:ss a')}</p>
        <button onClick={() => handleClick(_id)}>
            {buttonText}
        </button>
    </div>
);

export default Article;