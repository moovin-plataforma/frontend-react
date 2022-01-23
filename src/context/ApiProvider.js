import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ApiContext from './ApiContext'

function ApiProvider({children}) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);



    return(
        <ApiContext.Provider
            value={{
                data,
                setData,
                page,
                setPage,
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </ApiContext.Provider>
    );
}

ApiProvider.prototype = {
    children: PropTypes.node.isRequired,
};

export default ApiProvider