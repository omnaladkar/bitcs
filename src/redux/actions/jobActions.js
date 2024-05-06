import axios from 'axios';

const fetchJobsRequest = () => ({
    type: 'FETCH_JOBS_REQUEST',
});

const fetchJobsSuccess = (jobs) => ({
    type: 'FETCH_JOBS_SUCCESS',
    payload: { jobs },
});

const fetchJobsFailure = (error) => ({
    type: 'FETCH_JOBS_FAILURE',
    payload: { error },
});

export const fetchJobs = (limit, offset) => {
    return (dispatch) => {
        dispatch(fetchJobsRequest());
        axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON', {
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify({ limit, offset }),
        })
        .then(response => {
            const jobs = response.data.jdList;
            console.log("jobAcion",jobs);
            dispatch(fetchJobsSuccess(jobs));
        })
        .catch(error => {
            dispatch(fetchJobsFailure(error.message));
        });
    };
};
