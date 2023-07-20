import {useState, useEffect} from "react";
import {getUsers} from "../../api/Users.api.js";
import {UserItem} from "../../components/user-item/UserItem.Component.jsx";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { toast } from "react-hot-toast";

export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then((res) => {
                const usersData = res.data?.data;
                setUsers(usersData);
            })
            .catch((err) => {
                toast.error(err.response.data.message);
                setTimeout(() => {
                    toast.dismiss();
                }, 2000);
            });
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">Full Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Phone Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow
                            key={user.id}
                        >
                            <UserItem user={user}/>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}