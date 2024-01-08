import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Prakhar Goyal is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="prakhar goyal, prakhar, goyal, web developer portfolio, prakhar web developer, prakhar developer, mern stack, prakhar goyal portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Prakhar Goyal's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Prakhar Goyal',
};
