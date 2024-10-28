import React from 'react'
import PdfViewer from './PdfViewer'
import workout from "./pdfs/WorkOut.pdf"

function WorkoutPdf() {
    return (
        <>
            <PdfViewer pdfPath={workout}/>
        </>
    )
}

export default WorkoutPdf
