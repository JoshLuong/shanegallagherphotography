import Layout from '@/components/Layout';
import '../styles/global.less';

export default function App({ Component, pageProps }: any) {
    return <Layout><Component {...pageProps} /></Layout>;
  }