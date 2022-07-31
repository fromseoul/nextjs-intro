import NavBar from "../components/NavBar";

type Props = {
  Component: any,
  pageProps: any,
}

export default function App({ Component, pageProps }: Props ) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <span>hello</span>
      <style jsx global>{`
        a {
          color: white; 
        }
      `}</style>
    </div>
  )
}
