import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'


export default function App() {
  return (
    <div className="container">
      <Head>
        <title>Alves, Bretas & Machado</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        
      </main>
      <Footer />


    </div>
  )
}
