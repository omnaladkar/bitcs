const initialState = {
    jobs: [],
    loading: false,
    error: null,
    hasMore: true,
    offset: 0,
};

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_JOBS_REQUEST':
            return {
                ...state,
                loading: true,
            };
        case 'FETCH_JOBS_SUCCESS':
            return {
                ...state,
                loading: false,
                jobs: [...state.jobs, ...action.payload.jobs],
                hasMore: action.payload.jobs.length > 0,
                offset: state.offset + action.payload.jobs.length,
            };
        case 'FETCH_JOBS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                hasMore: false,
            };
        default:
            return state;
    }
};

export default jobReducer;
