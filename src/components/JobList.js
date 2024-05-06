import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../redux/actions/jobActions';
import JobCard from './JobCard';
import Filters from './Filters';
// import './JobList.css';  // Optional: Include the CSS file for styling

const JobList = () => {
    const dispatch = useDispatch();
    const { jobs, hasMore, loading, offset } = useSelector(state => state.job);
    const [filters, setFilters] = useState({
        jobRole: '',
        minExp: '',
        minSalary: '',
        companyName: '',
        remote: false
    });

    useEffect(() => {
        dispatch(fetchJobs(10, 0)); // Initially fetch some jobs
    }, [dispatch]);

    useEffect(() => {
        // Define the function to handle scrolling for infinite loading
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                if (hasMore && !loading) {
                    dispatch(fetchJobs(10, offset));
                }
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean-up function to remove the scroll event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasMore, loading, offset, dispatch,filters]);

    // Define the function that updates the filters based on user input
    const handleFilterChange = (name, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    // Apply the filters to the jobs list
    const filteredJobs = jobs.filter(job => (
        (filters.jobRole ? job.jobRole.toLowerCase().includes(filters.jobRole.toLowerCase()) : true) &&
        (filters.minExp ? job.minExp >= parseInt(filters.minExp, 10) : true) &&
        (filters.minSalary ? job.minJdSalary && job.minJdSalary >= parseInt(filters.minSalary, 10) : true) &&
        (filters.companyName ? job.companyName.toLowerCase().includes(filters.companyName.toLowerCase()) : true) &&
        (!filters.remote || job.location.toLowerCase() === 'remote')
    ));

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gridGap: '20px',
        padding: '20px'
    };

    return (
        <div>
            <Filters filters={filters} onFilterChange={handleFilterChange} />
            <div style={gridStyle}>
                {filteredJobs.map(job => (
                    <JobCard key={job.jdUid} job={job} />
                ))}
            </div>
        </div>
    );
};

export default JobList;
