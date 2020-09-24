import React from 'react';


const TitleInformation = (props) => {

    const { title, subtitle, button } = props;

    return (
        <div className="container text-center text-md-left">
            <h2 className="font-weight-bold mb-2">{title}</h2>
            <p className="lead text-muted mb-3">{subtitle}</p>
            { button }
        </div>
    );
};

export default TitleInformation;