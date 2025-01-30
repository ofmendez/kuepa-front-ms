import ChatPanel from '@src/components/ChatPanel';
import Layout from '@src/layouts/Layout';
import '@styles/Loading.css';

function Home () {
  return (
    <Layout>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 p-3'>
          <iframe
            width='100%'
            height='315'
            src='https://www.youtube.com/embed/5_sI5PmNCIg?si=nEUlzXe18qes3Tec'
            title='Kuepa Live'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
        <ChatPanel />
      </div>
    </Layout>
  );
}

export default Home;
