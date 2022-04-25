import React, { lazy, useEffect } from 'react';
import Head from '../../helper/Head';
import useFetch from '../../hooks/useFetch';
import { STATS_GET } from '../../services/api';
import Loading from '../../helper/Loading';
import Error from '../../helper/Error';
const UserStatsGraphs = lazy(() => import('../UserStatsGraphs'));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) {
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  } else return null;
};

export default UserStats;
