import React from "react";

type Props = {
    title: string;
};

export default function Experimental({ title }: Props) {
    return (
        <div className="container mx-auto">
            experimental props with - {title}{" "}
        </div>
    );
}
