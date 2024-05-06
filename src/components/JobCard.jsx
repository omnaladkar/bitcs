import React from 'react';

const JobCard = ({ job }) => {
    const cardStyle = {
        border: "1px solid #ddd",
        boxShadow: "2px 2px 5px #eee",
        marginBottom: "20px",
        padding: "15px",
        borderRadius: "8px", // added for better styling
    };

    const logoStyle = {
        width: "100px",
        height: "100px",
        objectFit: "contain",
        marginBottom: "10px"
    };

    const cardTitleStyle = {
        fontSize: "18px",
        color: "#333"
    };

    const cardSubtitleStyle = {
        fontSize: "16px",
        color: "#666"
    };

    const cardContentStyle = {
        fontSize: "14px",
        marginTop: "10px",
        color: "#444"
    };

    const buttonStyle = {
        padding: "10px 15px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    };

    return (
        <div className="card" style={cardStyle}>
            <img src={job.logoUrl} alt={`${job.companyName} Logo`} style={logoStyle} />
            <div className="card-title" style={cardTitleStyle}>{job.jobRole}</div>
            <div className="card-subtitle" style={cardSubtitleStyle}>{job.companyName}</div>
            <div className="card-content" style={cardContentStyle}>{`Location: ${job.location}`}</div>
            <div className="card-content" style={cardContentStyle}>{`Min. Exp: ${job.minExp || 'N/A'} years`}</div>
            <div className="card-content" style={cardContentStyle}>{`Salary: ${job.minJdSalary ? `$${job.minJdSalary}K+` : 'N/A'}`}</div>
            <div className="card-content" style={cardContentStyle}>{job.jobDetailsFromCompany}</div>
            <button style={buttonStyle}>Read More</button>
        </div>
    );
};

export default JobCard;
