import  {React} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function ProductsTable() {

    const products = useSelector(state => state.products.products);
  return (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Category</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {products?.length > 0 ? products.map((product) => (
                    <TableRow 
                        key={product.id}
                    >
                        <TableCell align="left">
                            <Link style={{ textDecoration: 'none', color: "inherit" }} to={`/productDetail/${product.id}`}>
                                {product.title}
                            </Link>
                        </TableCell>
                        <TableCell align="left">{product.price}</TableCell>
                        <TableCell align="left">{product.desciption}</TableCell>
                        <TableCell align="left">{product.category}</TableCell>
                    </TableRow>
                )) : null}
            </TableBody>
        </Table>
    </TableContainer>
  );
}
