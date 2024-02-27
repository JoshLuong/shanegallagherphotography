import { Section, Text } from '@react-email/components'
import { Heading } from '@react-email/heading'
import { Html } from '@react-email/html'
import { Container } from '@react-email/container'
import { Img } from '@react-email/img'
import * as React from 'react'
import { FormData } from '@/components/contact/Contact';

// Note: these email tempaltes must be under /emails folder to run the email service locally (yarn email)
const Email: React.FC<FormData> = ({
  name,
  message
}) => {
    return (
        <Html
            style={{
                fontFamily: `"Space Grotesk", sans-serif`,
                marginTop: "0.5em",
                color: "black !important"
            }}
        >
            <Container className="email-container" style={{ border: 'black solid 1.5px', padding: '1em', boxSizing:"border-box", maxWidth:"unset", width: "90%" }}>
                <Section>
                    <Img
                        style={{ margin: 'auto' }}
                        src="https://images.ctfassets.net/7quy4nqi53yl/4XqSQj6fjtE9VxTycOR2PW/270f635fe47d02fb7085c0e8e01b299f/Screenshot_2024-02-24_at_10.07.47_PM.png"
                        alt="Shane Gallagher Logo"
                        width="40"
                    />
                    <Heading
                        style={{ textAlign: 'center', fontSize: '1.25em', margin: "0.7em", color:"black" }}
                        as="h2"
                    >
                        Shane Gallagher
                    </Heading>
                </Section>

                <Container >
                    <Section style={{color:"black" }}>{message}</Section>
                    <Section style={{ paddingTop: '1em', color:"black" }}>{name}</Section>
                </Container>

                <Section style={{ textAlign: 'center', paddingTop: "1em" }}>
                        <Text
                            style={{
                                margin: '0',
                                lineHeight: '1em',
                                fontWeight: 'bold',
                                color:"black"
                            }}
                        >
                            Shane Gallagher
                        </Text>
                        <Text
                            style={{
                                fontSize: '0.75em',
                                margin: '0.5em !important',
                                lineHeight: '0.75em',
                                color:"black"
                            }}
                        >
                            (He/Him)
                        </Text>
                        <Text
                            style={{
                                fontSize: '0.75em',
                                margin: '0',
                                lineHeight: '0.75em',
                                color:"black"
                            }}
                        >
                            shanegallagher.com
                        </Text>
                </Section>
            </Container>
        </Html>
    )
}

export default Email