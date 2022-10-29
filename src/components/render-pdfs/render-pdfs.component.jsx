import { Document, Page, pdfjs } from "react-pdf";
import EpamCertificate from "./Certificates/Irakli_Imesashvili.pdf";
import CSharpBasic from "./Certificates/CSharpBasic.pdf";
import SQLBasic from "./Certificates/SQL-Basic.pdf";
import SQLIntermediate from "./Certificates/SQL-Intermediate.pdf";
import "./render-pdfs.styles.scss";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const RenderEpamPdf = () => {
  return (
    <div className="Epam-container">
      <Document
        file={EpamCertificate}
        onLoadSuccess={() => {
          console.log("success");
        }}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export const CSharpBasicPdf = () => {
  return (
    <div className="csharp-container">
      <Document
        file={CSharpBasic}
        onLoadSuccess={() => {
          console.log("success");
        }}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export const SQLBasicPdf = () => {
  return (
    <div className="sql-basic-container">
      <Document
        file={SQLBasic}
        onLoadSuccess={() => {
          console.log("success");
        }}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};
export const SQLIntermediatePdf = () => {
  return (
    <div className="sql-intermediate-container">
      <Document
        file={SQLIntermediate}
        onLoadSuccess={() => {
          console.log("success");
        }}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export const MicrosoftCert = {
  AzureFUndamentals: require("./Az-900.png"),
};
