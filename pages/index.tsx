import Head from 'next/head';
import IndexContainer from '../containers/index.container';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fullstack Developer - Armando Ramos Sánchez</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexContainer />
    </>
  )
}
