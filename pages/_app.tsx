import { AuthProvider } from "@context/AuthContext";
import { AppProps } from "next/app";
import '@styles/index.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default App;