import React from "react";

export default function SecHeader({ title, children, accent }) {
    return (
        <div className="sm:w-max text-center mx-auto -mt-2 mb-8">
            <h4
                className={`sm:line ${
                    accent ? "text-accent before:border-accent after:border-accent" : "text-primary before:border-primary after:border-primary"
                }`}
            >
                <span className="mx-2.5">{title}</span>
            </h4>
            <h2>{children}</h2>
        </div>
    );
}
