import React from "react";

function IndexCom({ campus, onClick }) {
    return (
        <div className="campus-card" onClick={onClick}>
            <h2>{campus.Name}</h2>
            <p>{campus.Address}</p>
            <h3>School of Programming</h3>
            {campus["School of Programming"] ? (
                <ul>
                    {campus["School of Programming"].map((program) => (
                        <li key={program}>{program}</li>
                    ))}
                </ul>
            ) : (
                <p>No programming courses offered at this campus.</p>
            )}
        </div>
    );
}

export default IndexCom;
