'use client';

import React from 'react';

let InlineLogoSVG = (props: React.SVGProps<SVGSVGElement>) => (
    <svg className="mainlogo relative min-h-[28px] w-auto" {...props}>
        <path
            fill="#38bdf8"
            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
        <text x="20" y="15" fill="#fff">
            Wind
        </text>
        <text x="58" y="15" fill="#38bdf8">
            Commerce
        </text>
    </svg>
);

function Logo() {
    return (
        <InlineLogoSVG
            width={150}
            height={20}
            viewBox={`0 0 150 20`}
            fill={'none'}
        />
    );
}

export default Logo;
