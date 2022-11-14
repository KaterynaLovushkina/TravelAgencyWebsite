import React from 'react';
import {Mail, Btn, MailInputContainer, TextInput} from './MailListElements'
const MailList = () => {
    return (
        <Mail>
            <h1>Save time, save money</h1>
            <span>Sign up and we'll send the best deals to you</span>
            <MailInputContainer>
                <TextInput type={'text'} placeholder={ 'Your Email'}></TextInput>
                <Btn>Subscribe</Btn>
            </MailInputContainer>
        </Mail>
    );
};

export default MailList;