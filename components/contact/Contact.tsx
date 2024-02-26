'use client'

import { sendEmail } from '@/utils/sendEmail'
import styled from '@emotion/styled'
import { Snackbar, TextField } from '@mui/material'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from '../../styles/ContactForm.module.less'

export type FormData = {
    name: string
    email: string
    message: string
}

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiFormHelperText-root': {
        fontFamily: `"Space Grotesk", sans-serif`,
    },
    '& .MuiInputBase-root': {
        borderRadius: '0',
    },
    '& .MuiInputBase-input, .MuiFormLabel-root': {
        color: 'white',
        fontFamily: `"Space Grotesk", sans-serif`,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
        },
        '&:hover fieldset': {
            borderColor: '#B2BAC2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
        },
    },
})

const StyledSnackBar = styled(Snackbar)({
    '& .MuiPaper-root': {
        color: 'black',
        backgroundColor: "white",
        fontFamily: `"Space Grotesk", sans-serif`,
        borderRadius: "0"
    },
})

const ContactForm: FC = () => {
    const { register, handleSubmit } = useForm<FormData>()
    const [emailError, setEmailError] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [emailSentSuccess, setEmailSentSuccess] = useState(false)
    const [emailSentErr, setEmailSentErr] = useState(false)

    const validateEmail = (email: string) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    }
    async function onSubmit(data: FormData) {
        if (!validateEmail(data.email)) {
            setEmailError(true)
        } else {
            setIsSending(true)
            const didSendSuccessfully = await sendEmail(data)
            if (didSendSuccessfully) {
                (document.getElementById("email-form") as HTMLFormElement)?.reset();
                setEmailSentSuccess(true)
            } else {
                setEmailSentErr(true)
            }
            setIsSending(false)
        }
    }

    return (
        <>
            <form
                id="email-form"
                onSubmit={handleSubmit(onSubmit)}
                className={styles.contactForm__container}
                autoComplete="none"
            >
                <div className="mb-5">
                    <CssTextField
                        label="FULL NAME"
                        style={{
                            color: 'white',
                            marginBottom: '1em',
                            width: '100%',
                        }}
                        {...register('name', { required: true })}
                    />
                </div>

                <div className="mb-5">
                    <CssTextField
                        label="EMAIL ADDRESS"
                        style={{
                            color: 'white',
                            marginBottom: '1em',
                            width: '100%',
                        }}
                        error={emailError}
                        helperText={emailError && 'Please input a valid email.'}
                        onInput={() => setEmailError(false)}
                        className={styles.contactForm__email}
                        {...register('email', { required: true })}
                    />
                </div>

                <div className="mb-5">
                    <CssTextField
                        label="MESSAGE"
                        style={{
                            color: 'white',
                            marginBottom: '1em',
                            width: '100%',
                        }}
                        multiline
                        rows={4}
                        {...register('message', { required: true })}
                    />
                </div>
                <button className={styles.contactForm__submit_btn}>
                    {isSending ? "SENDING..." : "DELIVER"}
                </button>
            </form>
            <StyledSnackBar
                open={emailSentSuccess}
                autoHideDuration={5000}
                onClose={() => setEmailSentSuccess(false)}
                message="We receieved your email."
            />
            <StyledSnackBar
                open={emailSentErr}
                autoHideDuration={5000}
                onClose={() => setEmailError(false)}
                message="We encountered an error. Please try again later."
            />
        </>
    )
}

export default ContactForm