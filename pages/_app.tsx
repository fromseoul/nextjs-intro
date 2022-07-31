import Layout from "../components/Layout";

type Props = {
  Component: any,
  pageProps: any,
}

export default function App({ Component, pageProps }: Props ) {
  return (
    <Layout>
      <Component { ...pageProps } />
    </Layout>
  )
}
