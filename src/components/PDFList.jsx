import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PDFList = () => {
  const [pdfs, setPDFs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.npoint.io/dee51ea017d20efdfcc8")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch PDFs");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Debug log
        setPDFs(data);
      })
      .catch((error) => setError(error.message));
  }, []);

  const filteredPDFs = pdfs.filter((pdf) =>
    pdf.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClearSearch = () => {
    setSearchTerm(""); // Clears the search input
  };

  return (
    <div className="pdf-list">
      {error && <p className="error-message">{error}</p>}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search PDFs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button className="clear-search" onClick={handleClearSearch}>
            X
          </button>
        )}
      </div>
      <div className="card-container">
        {filteredPDFs.map((pdf, index) => (
          <div key={index} className="card">
            <Link to={`/reader/${index}`} className="card-link">
              
              <h3>{pdf.name}</h3>
              <p>{pdf.author || "Unknown Author"}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PDFList;
