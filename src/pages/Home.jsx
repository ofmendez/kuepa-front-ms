import Layout from '@src/layouts/Layout';
import { useState } from 'react';
import '@styles/Loading.css';

function Home () {
  const [ldT, setLdT] = useState('init');
  const [error, setError] = useState(null);

  return (
    <Layout>
      <div>{error}</div>
      <div className='flex justify-between items-center my-3'>
        <div className='flex p-3' />
      </div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        {
          ldT === 'loading'
            ? (
              <h1
                className='loading p-5 font-medium'
              > CARGANDO
              </h1>
              )
            : (
              <h2
                className='p-5 font-medium'
              > {ldT === 'init' ? 'No hay datos' : 'Datos cargados'}
              </h2>)

        }
      </div>
    </Layout>
  );
}

export default Home;
