import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cucumber Gang Collective!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="CODEINE DREAMERS" />
        <p className="description">
          OKTI X LIL RETAR
        </p>
      </main>

      <Footer />
    </div>
  )
}
