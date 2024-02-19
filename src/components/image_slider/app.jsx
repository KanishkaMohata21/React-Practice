import React, { useEffect, useState } from "react";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'

function Slider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [errorMsg, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(SendingUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${SendingUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setErrorMessage(e.message);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <h2>loading data...</h2>;
  }

  if (errorMsg !== null) {
    return <h2>Some Error Occured</h2>;
  }

  return <div className="container"></div>;
}

export default Slider;
