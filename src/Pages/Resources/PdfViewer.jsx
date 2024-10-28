import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
// import diet from "../../pdfs/Deit.pdf";
// import workpdf from "../../pdfs/WorkOut.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = 
  new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();


function PdfViewer({pdfPath}) {
    
  const { pdfName } = useParams();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setPageNumber(1); // Reset page number when PDF changes
    
  }, [pdfName]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    
  }
  


  return (
    <div className='flex items-center justify-center mt-10'>
        
        
      <Document
        file={pdfPath}
        onLoadSuccess={onDocumentLoadSuccess}
        className={'flex justify-center flex-wrap mx-10'}
      >
        
       {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page, index) => {
            return (
              <Page 
                key={index}
                className={''}
                pageNumber={page}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            );
          })}
      </Document>
      
    </div>
  );
}

export default PdfViewer;