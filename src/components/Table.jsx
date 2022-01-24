import React, { useState, useEffect } from 'react';
import {api} from '../service/API'

function Table() {
    const [post, setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [nextPage, setNextPage] = useState(1);

    const TOKEN = '32076aa84dcb8091eb0e9884c2f8235943c02a4ae061304baac1a68969035fee';

    const fetchDatas = async () => {
        const result = await api.get(`posts?_format=json&access-token=${TOKEN}&page=${page}`);
        setNextPage(result.data.meta.pagination.pages);
        setPost(result.data.data);
    }

    useEffect(() => {
        fetchDatas();
    }, [page])


    const nextPagePrev = (pagination) => {
        if(pagination > page) {
            setPage(pagination);
        }else if (pagination < page && pagination > 0){
            setPage(pagination);
        }
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Conteúdo</th>
                </tr>
            </thead>
            <tbody>
                {
                    post && post.slice(0,9).map((row) => {
                        return (
                            <tr key={row.id}>
                                <td>
                                    {row.title}
                                </td>
                                <td>
                                    {row.body}
                                </td>
                            </tr>
                        )
                    })
                }
                <tr>
                    <td>
                        {
                          `Exibindo ${nextPage/4} postagens`
                        }
                    </td>
                    <button
                        onClick={() => nextPagePrev(page -1)}
                        className={page === 1 ? 'disable' : ''}                    
                    >
                        {page}
                    </button>
                    
                    <button
                        onClick={() => nextPagePrev(page + 1)}
                    >
                        {page + 1}
                    </button>
                    <button
                        onClick={() => nextPagePrev(page + 2)}
                    >
                        {page + 2}
                    </button>
                </tr>
                    
            </tbody>
        </table>
    )
}

export default Table;