import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import { useState } from "react";
import './FieldSelection.Style.scss';

export const FieldSelection = ({user, setName, setPhone, setEmail, createUserHandler}) => {
    const { full_name, email, phone_number } = user;
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [phoneField, setPhoneField] = useState('');

    const nameChangeHandler = (e) => {
        setNameField(e.target.value);
        setName(e.target.value);
    }

    const emailChangeHandler = (e) => {
        setEmailField(e.target.value);
        console.log(emailField);
        setEmail(e.target.value);
    }

    const phoneChangeHandler = (e) => {
        setPhoneField(e.target.value);
        console.log(phoneField);
        setPhone(e.target.value);
    }

    return (
        <div>
            <div className='input-container'>
                <FormControl fullWidth>
                    <InputLabel>Full Name</InputLabel>
                    <Select
                        value={nameField}
                        onChange={nameChangeHandler}
                    >
                        <MenuItem value={full_name}>{full_name}</MenuItem>
                        <MenuItem value={email}>{email}</MenuItem>
                        <MenuItem value={phone_number}>{phone_number}</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className='input-container'>
                <FormControl fullWidth>
                    <InputLabel>Email</InputLabel>
                    <Select
                        value={emailField}
                        onChange={emailChangeHandler}
                    >
                        <MenuItem value={full_name}>{full_name}</MenuItem>
                        <MenuItem value={email}>{email}</MenuItem>
                        <MenuItem value={phone_number}>{phone_number}</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className='input-container'>
                <FormControl fullWidth>
                    <InputLabel>Phone Number</InputLabel>
                    <Select
                        value={phoneField}
                        onChange={phoneChangeHandler}
                    >
                        <MenuItem value={full_name}>{full_name}</MenuItem>
                        <MenuItem value={email}>{email}</MenuItem>
                        <MenuItem value={phone_number}>{phone_number}</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className='form-button'>
                <Button variant="contained" onClick={createUserHandler}>Done</Button>
            </div>
        </div>
    );
}
