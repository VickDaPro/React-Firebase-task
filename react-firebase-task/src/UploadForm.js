import React from "react";
// import { storage } from "./firebase-config";

const UploadForm = () => {
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file(png, jpeg or jpg)");
    }
  };
  return (
    <form>
      <h1>FireGram</h1>
      <h2>Pictures</h2>
      <input type="file" onChange={changeHandler} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
};

export default UploadForm;
