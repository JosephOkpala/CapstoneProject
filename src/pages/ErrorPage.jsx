import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
  const goHome = useNavigate();
  return (
    <div className="errorPage">
      <Helmet>
        <title>Error 404</title>
        <meta name="description" content="Error 404 page not found" />
      </Helmet>
      <h1>Page Not Found</h1>
      <button
        className="homeBtn"
        onClick={() => {
          goHome('/');
        }}
      >
        Go home
      </button>
    </div>
  );
};

export default ErrorPage;
