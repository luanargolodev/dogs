import React, { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { PHOTOS_GET } from '../../services/api';
import FeedPhotosItem from '../FeedPhotosItem';
import Error from '../../helper/Error';
import Loading from '../../helper/Loading';
import styles from './styles.module.css';

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);
      console.log(json);
    }

    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <div>
        <ul className={`${styles.feed} animeLeft`}>
          {data.map((photo) => (
            <FeedPhotosItem
              key={photo.id}
              photo={photo}
              setModalPhoto={setModalPhoto}
            />
          ))}
        </ul>
      </div>
    );
  } else return null;
};

export default FeedPhotos;
