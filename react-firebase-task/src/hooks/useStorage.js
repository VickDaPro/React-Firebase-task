import { useState, useEffect } from "react";
import { storage } from "./firebase-config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references to storage
    const storageRef = storage.ref(file.name);

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        // progress function
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        // error function
        setError(err);
      },
      async () => {
        // complete function
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
