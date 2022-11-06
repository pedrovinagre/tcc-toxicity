import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TCC - Toxicidade</title>
        <meta name="description" content="Descrição de endpoints usados no TCC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Modelos matemáticos sobre <br/> radicalização em redes sociais<a href=""></a>
        </h1>

        <p className={styles.description}>
          Descrição de endpoints do projeto{' '}
        </p>

        <div className={styles.grid}>
          <a href={`${process.env.NEXT_PUBLIC_PROJECT_URL}/api/tweets`} className={styles.card}>
            <h2>Ler Tweets</h2>
            <code className={styles.code}>GET api/tweets</code>
            <p>Retorna uma página de tweets atualmente persistidos no banco. Paginação:</p>
            <code className={styles.codeDesc}>{'{ pageNumber: int, pageSize: int }'}</code>
          </a>

          <div className={styles.card}>
            <h2>Criar Tweet</h2>
            <code className={styles.code}>POST api/tweets</code>
            <p>Cria um novo tweet no banco. Corpo:</p>
            <code className={styles.codeDesc}>{'{ text: string, publicatedAt: Date }'}</code>
          </div>

          <a
            href={`${process.env.NEXT_PUBLIC_PROJECT_URL}/api/query`}
            className={styles.card}
          >
            <h2>Ler Query String</h2>
            <code className={styles.code}>GET api/query</code>
            <p>Adquire a atual frase sendo buscada em tweets para classificação.</p>
          </a>

          <div className={styles.card}>
            <h2>Atualizar Query String</h2>
            <code className={styles.code}>POST api/query</code>
            <p>Atualiza a atual frase sendo buscada em tweets para classificação. Corpo:</p>
            <code className={styles.codeDesc}>{'{ query: string }'}</code>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          Bruno Alves Balula - NUSP: 10432453
          <br/>
          Pedro Henrique Vinagre Braga - NUSP: 10355461
        </div>
      </footer>
    </div>
  )
}
