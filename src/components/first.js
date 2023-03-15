// import axios from "axios";
// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import { Pagination } from "@mui/material";
// import Box from "@mui/material/Box";
// import TableSortLabel from "@mui/material/TableSortLabel";
// import TextField from "@mui/material/TextField";
// import { useMemo } from "react";

// const Fin = () => {
//     const [showDatas, setShowDatas] = useState([]);
//     const [page, setPage] = React.useState(1);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [orderBy, setOrderBy] = useState("");
//     const [order, setOrder] = useState("asc");

//     const filteredData = useMemo(() => {
//         return showDatas.filter((row) => {
//             const values = Object.values(row).join("").toLowerCase();
//             return values.includes(searchTerm.toLowerCase());
//         });
//     }, [showDatas, searchTerm]);

//     const handleSort = (property) => {
//         const isAsc = orderBy === property && order === "asc";
//         setOrder(isAsc ? "desc" : "asc");
//         setOrderBy(property);
//     };

//     const FetchApi = async () => {
//         const response = await axios.get(
//             `https://jsonplaceholder.typicode.com/comments?_page=${page}`
//         );
//         setShowDatas(response.data);
//     };

//     useEffect(() => {
//         FetchApi();
//     }, [page]);

//     const handleChange = (event, pageVal) => {
//         setPage(pageVal);
//     };

//     return (
//         <>
//             <TextField
//                 label="Search"
//                 variant="outlined"
//                 value={searchTerm}
//                 onChange={(event) => setSearchTerm(event.target.value)}
//                 style={{ border: "2px solid black", fontWeight: "bold", background: "lightgray" }}
//             />

//             <div className="PaginationLink">
//                 <div
//                     className="head"
//                     style={{
//                         width: "fit-content",
//                         margin: "auto",
//                     }}
//                 ></div>
//                 <br />
//                 <TableContainer>
//                     <Table>
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell
//                                     style={{ border: "2px solid black", fontWeight: "bold", background: "lightgreen" }}
//                                 >
//                                     <TableSortLabel
//                                         active={orderBy === "postId"}
//                                         direction={order}
//                                         onClick={() => handleSort("postId")}
//                                     >
//                                         PostId
//                                     </TableSortLabel>
//                                 </TableCell>

//                                 <TableCell
//                                     style={{ border: "2px solid black", fontWeight: "bold", background: "lightgreen" }}
//                                 >
//                                     <TableSortLabel
//                                         active={orderBy === "id"}
//                                         direction={order}
//                                         onClick={() => handleSort("id")}
//                                     >
//                                         <span>@</span>
//                                         Id
//                                     </TableSortLabel>
//                                 </TableCell>

//                                 <TableCell
//                                     style={{ border: "2px solid black", fontWeight: "bold", background: "lightgreen" }}
//                                 >
//                                     <TableSortLabel
//                                         active={orderBy === "name"}
//                                         direction={order}
//                                         onClick={() => handleSort("name")}
//                                     >
//                                         Name
//                                     </TableSortLabel>
//                                 </TableCell>

//                                 <TableCell
//                                     style={{ border: "2px solid black", fontWeight: "bold", background: "lightgreen" }}
//                                 >
//                                     <TableSortLabel
//                                         active={orderBy === "email"}
//                                         direction={order}
//                                         onClick={() => handleSort("email")}
//                                     >
//                                         Email
//                                     </TableSortLabel>
//                                 </TableCell>

//                                 <TableCell
//                                     style={{ border: "2px solid black", fontWeight: "bold", background: "lightgreen" }}
//                                 >
//                                     <TableSortLabel
//                                         active={orderBy === "body"}
//                                         direction={order}
//                                         onClick={() => handleSort("body")}
//                                     >
//                                         Body
//                                     </TableSortLabel>
//                                 </TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody style={{ border: "2px solid black", background: "lightgreen" }}>
//                             {filteredData
//                                 .sort((a, b) => {
//                                     if (order === "asc") {
//                                         return a[orderBy] > b[orderBy] ? 1 : -1;
//                                     } else {
//                                         return a[orderBy] < b[orderBy] ? 1 : -1;
//                                     }
//                                 })
//                                 .map((value, index) => (
//                                     <TableRow>
//                                         <TableCell style={{ border: "2px solid black", background: "bisque" }}>
//                                             {value.postId}
//                                         </TableCell>
//                                         <TableCell style={{ border: "2px solid black", background: "bisque" }}>
//                                             {value.id}
//                                         </TableCell>
//                                         <TableCell style={{ border: "2px solid black", background: "bisque" }}>
//                                             {value.name}
//                                         </TableCell>
//                                         <TableCell style={{ border: "2px solid black", background: "bisque" }}>
//                                             {value.email}
//                                         </TableCell>
//                                         <TableCell style={{ border: "2px solid black", background: "bisque" }}>
//                                             {value.body}
//                                         </TableCell>
//                                     </TableRow>
//                                 ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>

//                 <Box
//                     sx={{
//                         margin: "auto",
//                         width: "fit-content",
//                         alignItems: "center",
//                     }}
//                 >
//                     <Pagination
//                         count={50}
//                         page={page}
//                         color="primary"
//                         rowsPerPage={page}
//                         onChange={handleChange}
//                     />
//                 </Box>
//             </div>
//         </>
//     );
// };
// export default Fin;