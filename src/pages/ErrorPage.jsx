import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const goHome = useNavigate();
  return (
    <div className="errorPage">
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
