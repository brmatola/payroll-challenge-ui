import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import useApi from '../hooks/useApi'
import Loading from '../components/Loading'

function MyApp({ Component, pageProps }: AppProps) {
  const { isLoading, employeeClient, dependentClient } = useApi()
  return (
    <div>
      <Head>
        <title>Employee Manager</title>
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      {isLoading ? <Loading /> : <Component {...pageProps} employeeClient={employeeClient} dependentClient={dependentClient} />}
    </div>
  )
}

export default MyApp
