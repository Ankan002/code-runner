import React, {useEffect, useRef} from 'react';

interface  Props {
    title: string;
    output: string;
}

const OutputConsole = (props: Props) => {
    const { title, output } = props;
    const consoleRef = useRef(null);
    const isMounted = useRef<boolean>(false);

    useEffect(() => {
        if(!isMounted.current) {
            isMounted.current = true;
            return;
        }
        (consoleRef.current as unknown as any).scrollIntoView({behavior: "smooth"});
    }, [output])

    return (
        <div className="flex-1 sm:ml-2 py-2 min-h-[220px] max-h-[220px] mt-3 flex flex-col sm:w-1/2 w-full">
            <h1 className="font-fira-code sm:text-xl text-lg">
                {title}
            </h1>

            <div className="resize-none flex-1 focus:outline-none px-2 py-1 rounded-md bg-primaryDark text-primaryLight mt-1 whitespace-pre overflow-y-scroll">
                {
                    output
                }

                <div ref={consoleRef} />
            </div>
        </div>
    );
};

export default OutputConsole;
