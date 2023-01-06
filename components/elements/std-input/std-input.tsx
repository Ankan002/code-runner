import React, {ChangeEventHandler} from 'react';

interface Props {
    title: string;
    placeholder: string;
    value: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const StdInput = (props: Props) => {
    const { title, placeholder, value, onChange } = props;

    return (
        <div className="flex-1 sm:mr-2 py-2 min-h-[220px] max-h-[220px] mt-3 flex flex-col w-full">
            <h1 className="font-fira-code sm:text-xl text-lg">
                {title}
            </h1>

            <textarea className="resize-none flex-1 focus:outline-none px-2 py-1 rounded-md bg-primaryDark text-primaryGreen mt-1" placeholder={placeholder} onChange={onChange} value={value}>

            </textarea>
        </div>
    );
};

export default StdInput;
