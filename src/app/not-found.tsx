/**
 * エラー
 */

import { NextPage, NextPageContext } from 'next';

interface ErrorProps {
  statusCode?: number;
}

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <>
      <main className='mb-20 px-6 pt-28 text-center lg:px-16'>
        <h1>{`${statusCode} Error`}</h1>
      </main>
    </>
  );
};

ErrorPage.getInitialProps = ({ err, res }: NextPageContext): ErrorProps => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
