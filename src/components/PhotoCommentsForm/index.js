import React, { useState } from 'react';
import styles from './styles.module.css';
import { ReactComponent as Enviar } from '../../assets/enviar.svg';
import useFetch from '../../hooks/useFetch';
import { COMMENT_POST } from '../../services/api';
import Error from '../../helper/Error';

const PhotoCommentsForm = ({ id, setComments }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComments((comments) => [...comments, json]);
      setComment('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id={comment}
        name={comment}
        value={comment}
        placeholder="Comente..."
        onChange={(e) => setComment(e.target.value)}
      />
      <button>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
