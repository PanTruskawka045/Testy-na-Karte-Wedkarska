import React from "react";

function ArrowTriangle({rotate}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${rotate} h-20`}
             viewBox="0 0 512 512">
            <path
                d="M290.5 51.8C283.3 39.5 270.2 32 256 32s-27.3 7.5-34.5 19.8l-216 368c-7.3 12.4-7.3 27.7-.2 40.1S25.7 480 40 480H472c14.3 0 27.6-7.7 34.7-20.1s7-27.8-.2-40.1l-216-368z"/>
        </svg>
    );
}

export default ArrowTriangle;