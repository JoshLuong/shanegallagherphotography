'use client'

import { sendEmail } from '@/utils/sendEmail'
import styled from '@emotion/styled'
import { Checkbox, FormControlLabel, Snackbar, TextField } from '@mui/material'
import {
    ChangeEvent,
    Dispatch,
    FC,
    SetStateAction,
    useEffect,
    useState,
} from 'react'
import { useForm } from 'react-hook-form'
import styles from '../../styles/ContactForm.module.less'
import getMoodboard from '@/utils/getMoodboard'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined'
import client from '@/gql/apollo-client'
import { moodboardQuery } from '@/gql/moodboard-query'
import { Asset } from '@/types/graphql'
// @ts-ignore
import _ from 'lodash'

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
        backgroundColor: 'white',
        fontFamily: `"Space Grotesk", sans-serif`,
        borderRadius: '0',
    },
})

const ContactForm: FC = () => {
    const { register, handleSubmit } = useForm<FormData>()
    const [emailError, setEmailError] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [emailSentSuccess, setEmailSentSuccess] = useState(false)
    const [emailSentErr, setEmailSentErr] = useState(false)
    const [gallery, setGallery] = useState<Asset[]>([])
    const [checked, setChecked] = useState(true)
    const [name, setName] = useState<undefined | string>(undefined)
    const [email, setEmail] = useState<undefined | string>(undefined)
    const [mesage, setMessage] = useState<undefined | string>(undefined)

    useEffect(() => {
        let moodboard = getMoodboard()
        const isChecked = window?.sessionStorage.getItem('contact-checkbox')
        setChecked(isChecked == null ? true : isChecked == 'true')
        setName(window?.sessionStorage.getItem('contact-name') || '')
        setEmail(window?.sessionStorage.getItem('contact-email') || '')
        setMessage(window?.sessionStorage.getItem('contact-message') || '')
        client
            .query({
                query: moodboardQuery,
                variables: { fileNames: moodboard },
            })
            .then((response: any) => {
                setGallery(response.data.assetCollection?.items as Asset[])
            })
    }, [])

    const saveFieldToSessionStorage = (key: string, value: string) => {
        window.sessionStorage.setItem(key, value)
    }

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
            const didSendSuccessfully = await sendEmail(
                data,
                checked ? gallery : []
            )
            if (didSendSuccessfully) {
                setChecked(true)
                setName('')
                setEmail('')
                setMessage('')
                ;(
                    document.getElementById('email-form') as HTMLFormElement
                )?.reset()
                setEmailSentSuccess(true)
                Array.from([
                    'contact-email',
                    'contact-message',
                    'contact-name',
                ]).map((key: string) => {
                    window.sessionStorage.setItem(key, '')
                })
                saveFieldToSessionStorage('contact-checkbox', 'true')
            } else {
                setEmailSentErr(true)
            }
            setIsSending(false)
        }
    }

    const { onChange: onNameChange, ...restRegisterName } = register('name', {
        required: true,
    })
    const { onChange: onEmailChange, ...restRegisterEmail } = register(
        'email',
        { required: true }
    )
    const { onChange: onMessageChange, ...restRegisterMessage } = register(
        'message',
        { required: true }
    )
    const handleChange = _.debounce(
        (
            key: string,
            e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
            onChange: (event: {
                target: any
                type?: any
            }) => Promise<boolean | void>,
            setField: Dispatch<SetStateAction<string>>
        ) => {
            onChange(e)
            saveFieldToSessionStorage(key, e.target.value)
        },
        500
    )

    return (
        <>
            <form
                id="email-form"
                onSubmit={handleSubmit(onSubmit)}
                className={styles.contactForm__container}
                autoComplete="none"
                style={{
                    borderTop: '1px solid',
                    marginTop: '0.7em',
                    paddingTop: '0.7em',
                }}
            >
                <FormControlLabel
                    style={{
                        margin: '0',
                        color: 'white',
                        marginBottom: '1em',
                        fontFamily: `"Space Grotesk", sans-serif`,
                    }}
                    control={
                        <Checkbox
                            checked={checked}
                            className="clickable_component"
                            onChange={() => {
                                saveFieldToSessionStorage(
                                    'contact-checkbox',
                                    String(!checked)
                                )
                                setChecked(!checked)
                            }}
                            style={{
                                padding: '0 !important',
                                marginRight: '0.5em',
                            }}
                            sx={{
                                color: 'white',
                                '&.Mui-checked': {
                                    color: 'white',
                                },
                                padding: 0,
                            }}
                        />
                    }
                    label={
                        <div
                            className={`${styles.contactForm__text} clickable_component`}
                            style={{
                                display: 'flex',
                            }}
                        >
                            ATTACH THE PICTURES IN YOUR{' '}
                            <span
                                style={{
                                    margin: '0 0.4em',
                                    padding: '0 0.17em 0 0px',
                                    background: 'white',
                                    color: 'black',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <PushPinOutlinedIcon
                                    style={{
                                        fontSize: '1em',
                                    }}
                                />
                                MOODBOARD
                            </span>{' '}
                            TO THIS MESSAGE.
                        </div>
                    }
                />
                <div className="mb-5">
                    {name != undefined && (
                        <CssTextField
                            label="FULL NAME"
                            style={{
                                color: 'white',
                                marginBottom: '1em',
                                width: '100%',
                            }}
                            value={name}
                            onChange={(e) => {
                                handleChange('contact-name', e, onNameChange)
                                setName(e.target.value)
                            }}
                            {...restRegisterName}
                        />
                    )}
                </div>

                <div className="mb-5">
                    {email != undefined && (
                        <CssTextField
                            label="EMAIL ADDRESS"
                            style={{
                                color: 'white',
                                marginBottom: '1em',
                                width: '100%',
                            }}
                            value={email}
                            error={emailError}
                            helperText={
                                emailError && 'Please input a valid email.'
                            }
                            onInput={() => setEmailError(false)}
                            className={styles.contactForm__email}
                            onChange={(e) => {
                                handleChange('contact-email', e, onEmailChange)
                                setEmail(e.target.value)
                            }}
                            {...restRegisterEmail}
                        />
                    )}
                </div>

                <div className="mb-5">
                    {mesage != undefined && (
                        <CssTextField
                            label="MESSAGE"
                            value={mesage}
                            style={{
                                color: 'white',
                                marginBottom: '1em',
                                width: '100%',
                            }}
                            multiline
                            rows={4}
                            onChange={(e) => {
                                handleChange(
                                    'contact-message',
                                    e,
                                    onMessageChange
                                )
                                setMessage(e.target.value)
                            }}
                            {...restRegisterMessage}
                        />
                    )}
                </div>

                <button
                    className={`${styles.contactForm__submit_btn} clickable_component`}
                >
                    {isSending ? 'SENDING...' : 'DELIVER'}
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
            <StyledSnackBar
                open={isSending}
                autoHideDuration={3000}
                message="Sending your message, hang tight."
            />
        </>
    )
}

export default ContactForm
