import { Section, Text } from '@react-email/components'
import { Heading } from '@react-email/heading'
import { Html } from '@react-email/html'
import { Container } from '@react-email/container'
import { Img } from '@react-email/img'
import * as React from 'react'
import { FormData } from '@/components/contact/Contact'
import { Asset } from '@/types/graphql'

// Note: these email tempaltes must be under /emails folder to run the email service locally (yarn email)
interface EmailProps {
    formData?: FormData
    gallery?: Asset[]
}
const Email: React.FC<EmailProps> = ({
    formData = { name: 'Example', message: 'This is an example message' },
    gallery = [
        {
            fileName: 'Platinum Blonde-LARA MARIE HAIR-Shane Gallagher-3.jpg',
            height: 1499,
            url: 'https://images.ctfassets.net/7quy4nqi53yl/29SW6KUICvZUBCcOjVGbOw/2eb0bb23b42e8f929b7dd8943ca0db63/Platinum_Blonde-LARA_MARIE_HAIR-Shane_Gallagher-3.jpg',
            width: 1000,
        },
        {
            fileName:
                'Lighting candles-Mitch-s Catch-Pass the Peas-Shane Gallagher-2.jpg',
            height: 1499,
            url: 'https://images.ctfassets.net/7quy4nqi53yl/4kbCb9imEmJmVS2Jqd2lSl/05888ecad42b145dd183901ce5303dac/Lighting_candles-Mitch-s_Catch-Pass_the_Peas-Shane_Gallagher-2.jpg',
            width: 1000,
        },
        {
            fileName: 'Shane1-min.jpeg',
            height: 1500,
            url: 'https://images.ctfassets.net/7quy4nqi53yl/3zjU0r6msCYYidZYJbcYfH/77543e21ff7d7427540ee10578264352/Shane1-min.jpeg',
            width: 1100,
        },
        {
            fileName: 'Platinum Blonde-LARA MARIE HAIR-Shane Gallagher-3.jpg',
            height: 1499,
            url: 'https://images.ctfassets.net/7quy4nqi53yl/29SW6KUICvZUBCcOjVGbOw/2eb0bb23b42e8f929b7dd8943ca0db63/Platinum_Blonde-LARA_MARIE_HAIR-Shane_Gallagher-3.jpg',
            width: 1000,
        },
        {
            fileName:
                'Lighting candles-Mitch-s Catch-Pass the Peas-Shane Gallagher-2.jpg',
            height: 1499,
            url: 'https://images.ctfassets.net/7quy4nqi53yl/4kbCb9imEmJmVS2Jqd2lSl/05888ecad42b145dd183901ce5303dac/Lighting_candles-Mitch-s_Catch-Pass_the_Peas-Shane_Gallagher-2.jpg',
            width: 1000,
        },
    ],
}) => {
    const { name, message } = formData

    return (
        <Html
            style={{
                fontFamily: `"Space Grotesk", sans-serif`,
                marginTop: '0.5em',
                color: 'black !important',
            }}
        >
            <Container
                className="email-container"
                style={{
                    border: 'black solid 1.5px',
                    padding: '1em',
                    boxSizing: 'border-box',
                    maxWidth: 'unset',
                    width: '90%',
                }}
            >
                <Section>
                    <Img
                        style={{ margin: 'auto' }}
                        src="https://images.ctfassets.net/7quy4nqi53yl/4XqSQj6fjtE9VxTycOR2PW/270f635fe47d02fb7085c0e8e01b299f/Screenshot_2024-02-24_at_10.07.47_PM.png"
                        alt="Shane Gallagher Logo"
                        width="40"
                    />
                    <Heading
                        style={{
                            textAlign: 'center',
                            fontSize: '1.25em',
                            margin: '0.7em',
                            color: 'black',
                        }}
                        as="h2"
                    >
                        Shane Gallagher
                    </Heading>
                </Section>

                <Container>
                    <Section style={{ color: 'black' }}>{message}</Section>
                    <Section style={{ paddingTop: '1em', color: 'black' }}>
                        {name}
                    </Section>
                </Container>

                <Section style={{ textAlign: 'center', paddingTop: '1em' }}>
                    <Text
                        style={{
                            margin: '0',
                            lineHeight: '1em',
                            fontWeight: 'bold',
                            color: 'black',
                        }}
                    >
                        Shane Gallagher
                    </Text>
                    <Text
                        style={{
                            fontSize: '0.75em',
                            margin: '0.5em !important',
                            lineHeight: '0.75em',
                            color: 'black',
                        }}
                    >
                        (He/Him)
                    </Text>
                    <Text
                        style={{
                            fontSize: '0.75em',
                            margin: '0',
                            lineHeight: '0.75em',
                            color: 'black',
                        }}
                    >
                        shanegallagher.com
                    </Text>
                </Section>
                <Section style={{ textAlign: 'center', paddingTop: '1em' }}>
                    {gallery.map((image) => {
                        const isHorizontalImage =
                            (image?.width || 0) > (image?.height || 0)
                        const dimensions = isHorizontalImage
                            ? { width: '200', height: '150' }
                            : { width: '150', height: '200' }
                        return (
                            <Img
                                style={{
                                    objectFit: 'cover',
                                    display: 'inline !important',
                                }}
                                src={image.url || ''}
                                alt="TODO"
                                {...dimensions}
                            />
                        )
                    })}
                </Section>
            </Container>
        </Html>
    )
}

export default Email
