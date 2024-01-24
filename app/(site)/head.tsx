
export default function Head() {
  return (
    <>
      <title>Elyteweb</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Web development agency" />
      <link rel="icon" href="/images/Elyteweb-favicon.jpg" />

      <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-P5X8MT9QZR`}
          ></script>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7027070395848262"
     crossOrigin="anonymous"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P5X8MT9QZR');
            `}
          </script>
        </>

    </>
  );
}
