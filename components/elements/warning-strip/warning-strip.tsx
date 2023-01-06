import React from 'react';

interface Props {
    warning: string;
}

const WarningStrip = (props: Props) => {
    const { warning } = props;

    return (
        <div className="w-full border-b-2 bg-primaryYellow border-b-primaryDark px-3 flex items-center justify-center">
            <p className="text-lg">
                {warning}
            </p>
        </div>
    );
};

export default WarningStrip;
