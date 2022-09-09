import React from 'react';
import Head from "next/head";

interface Props {
    title: string;
}

const CustomHead = (props: Props) => {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content="A single chrome extension to text out your code snippets" />
            <link rel="icon" href="/icon-150.png" />
        </Head>
    );
};

export default CustomHead;
