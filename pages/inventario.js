import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'


function Inventario() {
  return (
    <div className="container">
      <Head>
        <title>Inventário, o que é, como fazer e para que serve um inventário? - Alves, Bretas & Machado</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>Inventário, o que é, como fazer e para que serve um inventário? Entenda como funciona a lei em 2022</h1>
      </main>
      <Footer />


    </div>
  )
}

export default Inventario