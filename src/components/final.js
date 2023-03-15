import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from "@mui/material/Box";
import { Pagination } from "@mui/material";
import TableSortLabel from "@mui/material/TableSortLabel";


const Fin = () => {
    const [datas, setDatas] = useState()
    const [showDatas, setShowDatas] = useState([])
    const [page, setPage] = React.useState(1);
    const [cond, setCond] = useState(true)
    const [inputValue, setInputValue] = useState('')
    const [order, setOrder] = useState('asc')
    const [orderBy, setOrderBy] = useState('')

    const FetchApi = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${page}`)
        console.log(datas)
        setShowDatas(response.data)
    }
    useEffect(() => {
        FetchApi()
    }, [page])

    const handlePagination = (event, pageVal) => {
        setPage(pageVal);
    };
    const changeInputValue = (e) => {
        setInputValue(e.target.value)
    }
    const getFilteredItems = (list, inputValue) => {
        return list.filter((item => {
            const lowerTitle = item.name.toLowerCase()
            const lowerTitle2 = item.email.toLowerCase()
            const lowerTitle3 = item.body.toLowerCase()
            inputValue = inputValue.toLowerCase()
            return lowerTitle === inputValue || lowerTitle2 === inputValue || lowerTitle3 === inputValue || lowerTitle.startsWith(inputValue) ||
                lowerTitle2.startsWith(inputValue) || lowerTitle3.startsWith(inputValue)
        }))
    }
    const filteredList = getFilteredItems(showDatas, inputValue)

    const handleSortTable = (property) => {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
    }

    return (
        <>
            <div className='container'>
                <div >
                    <input value={inputValue} onChange={changeInputValue} placeholder='Search...' />
                </div>
                <div className="PaginationLink">
                    <div
                        className="head"
                        style={{
                            width: "fit-content",
                            margin: "auto",
                        }}
                    >
                    </div>
                    <br />
                    <TableContainer>
                        <Table >
                            <TableHead >
                                <TableRow >
                                    <TableCell style={{ border: '2px solid black', fontWeight: 'bold' }}
                                    >
                                        <TableSortLabel
                                            active={orderBy === 'postId'}
                                            direction={order}
                                            onClick={() => handleSortTable('postId')}
                                        >
                                            PostId
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell style={{ border: '2px solid black', fontWeight: 'bold' }}>
                                        <TableSortLabel
                                            active={orderBy === 'id'}
                                            direction={order}
                                            onClick={() => handleSortTable('id')}
                                        >
                                            Id
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell style={{ border: '2px solid black', fontWeight: 'bold' }}>
                                        <TableSortLabel
                                            active={orderBy === 'name'}
                                            direction={order}
                                            onClick={() => handleSortTable('name')}
                                        >
                                            Name
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell style={{ border: '2px solid black', fontWeight: 'bold' }}>
                                        <TableSortLabel
                                            active={orderBy === 'email'}
                                            direction={order}
                                            onClick={() => handleSortTable('email')}
                                        >
                                            Email
                                        </TableSortLabel>
                                    </TableCell>
                                    <TableCell style={{ border: '2px solid black', fontWeight: 'bold' }}>
                                        <TableSortLabel
                                            active={orderBy === 'body'}
                                            direction={order}
                                            onClick={() => handleSortTable('body')}
                                        >
                                            Body
                                        </TableSortLabel>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody style={{ border: '2px solid black' }}>
                                {filteredList.sort((a, b) => {
                                    if (order === "asc") {
                                        return a[orderBy] > b[orderBy] ? 1 : -1;
                                    } else {
                                        return a[orderBy] < b[orderBy] ? 1 : -1;
                                    }
                                }).map((value, index) => (
                                    <TableRow>

                                        <TableCell style={{ border: '2px solid black' }}>{value.postId}</TableCell>
                                        <TableCell style={{ border: '2px solid black' }}>{value.id}</TableCell>
                                        <TableCell style={{ border: '2px solid black' }}>{value.name}</TableCell>
                                        <TableCell style={{ border: '2px solid black' }}>{value.email}</TableCell>
                                        <TableCell style={{ border: '2px solid black' }}>{value.body}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <br></br>
                    <br></br>
                    <Box
                        sx={{
                            margin: "auto",
                            width: "fit-content",
                            alignItems: "center",
                        }}
                    >
                        <Pagination
                            count={50}
                            page={page}
                            color='primary'
                            onChange={handlePagination} />
                    </Box>
                </div>
            </div>
        </>
    )
}
export default Fin