// import "react-pdf/dist/pdf.worker.js";
// import { useState, useEffect } from "react";
// import { Document, Page } from "react-pdf";
// import PropTypes from "prop-types";

// function PDFPreview({ pdfUrl }) {
//   const [title, setTitle] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setTitle(title);

//     setError(error);
//     // Callback to handle loading of the document
//     return () => {
//       setTitle(null);
//       setError(null);
//     };
//   }, [pdfUrl]);

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return (
//     <>
//       <h2>{title}</h2>
//       <Document file={pdfUrl} onLoadSuccess={title} onLoadError={error}>
//         <Page pageNumber={1} renderMode="thumbnail" />
//       </Document>
//     </>
//   );
// }

// export default PDFPreview;

// PDFPreview.propTypes = {
//   pdfUrl: PropTypes.string.isRequired,
// };
