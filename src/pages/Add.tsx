import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Add = () => {
  const { shortenedUrl, setShortenedUrl } = useContext(AuthContext);
  const { value, setValue } = useContext(AuthContext);
  const { inputValue, setInputValue } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  console.log(inputValue);

  const handleClick = () => {
    setInputValue(value);
    setValue('');
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenedUrl(res.data.result.full_short_link);
    } catch (error) {
    } finally {
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  console.log(shortenedUrl);

  return (
    <div className="add">
      <h1>Shorten your URL</h1>
      <div className="inputs">
        <div className="emailInput">
          <input
            type="text"
            placeholder="paste URL here..."
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
          />
        </div>
        {/* <div className="passwordInput">
          <input
            type="text"
            placeholder="Type Alias here"
            value={alias}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAlias(e.target.value)
            }
          />
        </div> */}
        <button
          className="loginBtn"
          style={{ fontSize: '1.2rem' }}
          onClick={handleClick}
        >
          Trim URL
        </button>
      </div>
      <>
        {shortenedUrl && (
          <div className="result">
            <a href={shortenedUrl} target="_blank">
              {shortenedUrl}
            </a>
          </div>
        )}
      </>
    </div>
  );
};

export default Add;
