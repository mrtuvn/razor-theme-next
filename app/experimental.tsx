import React from "react";

type Props = {
    title: string;
};

export default function Experimental({ title }: Props) {
    return <div>experimental props with - {title} </div>;
}
