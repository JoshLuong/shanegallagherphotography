import { RefObject, useEffect, useState } from 'react'
import { useReactToPrint } from 'react-to-print'

const usePrintPdf = (printRef: RefObject<HTMLDivElement>) => {
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        pageStyle:`
        @media print {
            html, body {
                -webkit-print-color-adjust: black;
                overflow: hidden;
            }
          }
        @page { size: ${printRef.current?.clientWidth}px ${printRef.current?.clientHeight}px; margin: 0; }
        `
    })
    return handlePrint
}

export default usePrintPdf
