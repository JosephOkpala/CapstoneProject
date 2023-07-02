import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';

const Qrcode = () => {
  const [url, setUrl] = useState('');
  const [qrCodes, setQrCodes] = useState<string[]>([]);

  useEffect(() => {
    const storedQrCodes = localStorage.getItem('qrCodes');
    if (storedQrCodes) {
      setQrCodes(JSON.parse(storedQrCodes));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newQrCodes = [...qrCodes, url];
    setQrCodes(newQrCodes);
    localStorage.setItem('qrCodes', JSON.stringify(newQrCodes));
    setUrl('');
  };

  return (
    <div className="qrCodeContainer">
      <div className="formDiv">
        <form onSubmit={handleSubmit}>
          <h1>Enter Your Link</h1>
          <input
            className=""
            type="text"
            placeholder="enter your link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            type="submit"
            className="generateBtn loginBtn"
            style={{ fontSize: '1.2rem' }}
          >
            Generate QR Code
          </button>
        </form>
      </div>

      <div className="qrCode">
        {qrCodes.map((qrCode, index) => (
          <div key={index} className="">
            <QRCode
              id={`qrCodeId-${index}`}
              value={qrCode}
              bgColor="white"
              fgColor="black"
              level="H"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qrcode;
