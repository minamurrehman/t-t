import { Html, Head, Main, NextScript } from 'next/document'
import {GoogleTagManager} from "@next/third-parties/google"

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JZZNCJZKSS"></script>
<script
dangerouslySetInnerHTML={{
  __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JZZNCJZKSS');
  `
}}
/>
        </Head>
      <body>
       
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
