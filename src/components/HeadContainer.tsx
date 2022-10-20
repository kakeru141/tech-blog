import Head from 'next/head';
import { FC, ReactNode } from 'react';

type P = {
    children: ReactNode;
  };
  
  const HeadContainer: FC<P> = ({ children }) => {
    return (
        <Head>
            <meta charSet='utf-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta name='format-detection' content='telephone=no' />
            <meta name='msapplication-TileColor' content='#fff' />
            {children}
        </Head>
    );
};

export default HeadContainer