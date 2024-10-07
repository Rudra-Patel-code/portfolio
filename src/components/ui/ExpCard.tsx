"use client";

import { useState } from "react";
import { experience } from "../constants";
import { GlareCard } from "./glare-cars";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

export const ExpCard = ({ exp }: { exp: (typeof experience)[0] }) => {
    const [showPdf, setShowPdf] = useState(false);
    const handleButtonClick = () => {
        console.log("handle click");
        setShowPdf(true);
    };

    return (
        <>
            <GlareCard>
                <div className="p-5 h-full flex justify-center items-left flex-col">
                    <h2 className="text-2xl font-semibold text-gray-300">
                        {exp.position}
                    </h2>
                    <p className="text-gray-400 font-semibold">{exp.company}</p>
                    <p className="text-gray-500">{exp.duration}</p>
                    <p className="text-gray-200 mt-2">{exp.description}</p>

                    <button
                        onClick={handleButtonClick}
                        className="cursor-pointer z-[1000] rounded-lg w-fit mt-5 bg-gray-300 px-4 py-2 text-zinc-900 font-semibold transition hover:bg-blue-600 pointer-events-auto"
                    >
                        View Certificate
                    </button>
                </div>
            </GlareCard>
            {showPdf && (
                <div className="w-full max-w-4xl">
                    <Worker
                        workerUrl={`https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js`}
                    >
                        <Viewer fileUrl={exp.pdfUrl} />
                    </Worker>
                </div>
            )}
        </>
    );
};
