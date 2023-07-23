import './UserForm.Style.scss';
import {Button, Chip, Divider, TextField} from "@mui/material";
import {useRef, useState} from "react";
import {createUser, importUser} from "../../api/Users.api.js";
import { toast } from "react-hot-toast";
import {ReadyModal} from "../../components/ReadyModal/ReadyModal.Component.jsx";
import {FieldSelection} from "../../components/FieldSelection/FieldSelection.Component.jsx";

export const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [submitData, setSubmitData] = useState([])
    const createUserHandler = () => {

        let phoneNumber = phone;

        if (typeof phone === 'number') {
            phoneNumber = phone.toString();
        }
        const data = {
            full_name: name,
            email,
            phone_number: phoneNumber
        };

        createUser(data)
            .then((res) => {
                toast.success("User has been added");
                setTimeout(() => {
                    toast.dismiss();
                }, 2000);
                setOpen(false);
            })
            .catch((err) => {
                toast.error(err.response.data.message);
                setTimeout(() => {
                    toast.dismiss();
                }, 2000);
                setOpen(false);
            });
    }

    const onFileChange = (e) => {
        const fileData = e.target.files[0];
        setSubmitData([]);
        uploadWithExcelHandler(fileData);
    };

    const inputRef = useRef();
    const onClickHandler = () => {
        inputRef.current.click();
    }

    const uploadWithExcelHandler = (fileData) => {
        if (!fileData) {
            toast.error("Please select an Excel file.");
            return;
        }

        const formData = new FormData();
        formData.append("file", fileData);

        importUser(formData)
            .then((res) => {
                setUsers(res.data?.data);
                setOpen(true);
                toast.success("File uploaded successfully.");
                setTimeout(() => {
                    toast.dismiss();
                }, 2000);
            })
            .catch((err) => {
                toast.error("Users Already Exists.");
                setTimeout(() => {
                    toast.dismiss();
                }, 2000);
            });
    }

    return (
        <div className='user-form'>
            <h1 className='form-header'>User Details</h1>

            <TextField
                fullWidth
                label="Full Name"
                variant="standard"
                className='form-input'
                onChange={(e) => setName(e.target.value)}
            />

            <TextField
                fullWidth
                label="Email"
                variant="standard"
                className='form-input'
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
                fullWidth
                label="Phone Number"
                variant="standard"
                className='form-input'
                onChange={(e) => setPhone(e.target.value)}
            />

            <div className='form-button'>
                <Button variant="contained" onClick={createUserHandler}>Submit</Button>
            </div>

            <Divider className='form-divider'>
                <Chip label="OR" />
            </Divider>

            <input
                hidden
                type='file'
                ref={inputRef}
                onChange={onFileChange}
            />

            <div className='form-button'>
                <Button variant="contained" onClick={onClickHandler}>Upload with excel</Button>
            </div>

            <ReadyModal open={open} setOpen={setOpen}>
                <div className='modal'>
                    {users?.map((user, index) => (
                        <div key={index}>
                            <FieldSelection
                                setName={setName}
                                setEmail={setEmail}
                                setPhone={setPhone}
                                createUserHandler={createUserHandler}
                                user={user}
                            />
                        </div>
                    ))}
                </div>
            </ReadyModal>
        </div>
    )
}