import TableCell from '@mui/material/TableCell';
export const UserItem = ({user: {id, full_name, email, phone_number}}) => {

    return (
        <>
            <TableCell component="th" scope="row" align="center">{id}</TableCell>
            <TableCell align="center">{full_name}</TableCell>
            <TableCell align="center">{email}</TableCell>
            <TableCell align="center">{phone_number}</TableCell>
        </>
    )
}