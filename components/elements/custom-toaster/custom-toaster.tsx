import React from 'react';
import {Toaster, ToastBar} from "react-hot-toast";

const CustomToaster = () => {
    return (
        <Toaster
            toastOptions={{
                success: {
                    iconTheme: {
                        primary: "#08CD92",
                        secondary: "#F1F2F6"
                    },
                    duration: 1500
                },
                error: {
                    iconTheme: {
                        primary: "#D61C4E",
                        secondary: "#F1F2F6"
                    },
                    duration: 1500
                }
            }}
        >
            {
                (t) => {
                    return (
                        <ToastBar
                            toast={t}
                            style={{
                                ...t.style,
                                fontFamily: "'Fira Code', monospace",
                                color: "#1C1B2B",
                                border: "1px solid #1C1B2B",
                                background: "#F1F2F6"
                            }}
                        />
                    )
                }
            }
        </Toaster>
    );
};

export default CustomToaster;
