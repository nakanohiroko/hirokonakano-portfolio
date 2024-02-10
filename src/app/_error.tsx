/**
 * エラー
 */

import { NextPage, NextPageContext } from 'next';

import Meta from '../components/templates/_Base/Meta/Meta';

interface ErrorProps {
  statusCode?: number;
}

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <>
      <Meta pageTitle={`${statusCode} Error`} />
      <div>
        <h1>{`${statusCode} Error`}</h1>
      </div>
    </>
  );
};

ErrorPage.getInitialProps = ({ err, res }: NextPageContext): ErrorProps => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
