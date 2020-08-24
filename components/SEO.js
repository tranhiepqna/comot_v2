import Head from "next/head";

export default function SEO({ title, description = "" }) {
  return (
    <Head>
      <title>
        {title}
      </title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon"  href="/favicon.ico" />
    </Head>
  );
}