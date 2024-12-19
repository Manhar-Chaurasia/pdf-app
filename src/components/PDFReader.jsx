import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PDFReader = () => {
  const { id } = useParams();
  const [pdf, setPDF] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_API)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch PDF data");
        }
        return response.json();
      })
      .then((data) => setPDF(data[id]))
      .catch((error) => setError(error.message));
  }, [id]);

  if (error) return <p className="error-message">{error}</p>;

  if (!pdf) return <p>Loading...</p>;

  return (
    <div className="pdf-reader full-page">
      <iframe src={pdf.link} title={pdf.name} width="100%" height="100%" />
    </div>
  );
};

export default PDFReader;
