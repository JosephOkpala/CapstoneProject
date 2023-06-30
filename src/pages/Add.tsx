const Add = () => {
  return (
    <div className="add">
      <h1>Shorten your URL</h1>
      <div className="inputs">
        <div className="emailInput">
          <input type="text" placeholder="paste URL here..." />
        </div>
        <div className="passwordInput">
          <input type="password" placeholder="Type Alias here" />
        </div>
        <button className="loginBtn">Trim URL</button>
      </div>
    </div>
  );
};

export default Add;
