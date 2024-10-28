import React from 'react'
import PdfViewer from './PdfViewer'
import diet from './pdfs/Deit.pdf'

function DietPdf() {
    return (
        <>
            <PdfViewer pdfPath={diet}/>
        </>
    )
}

export default DietPdf
