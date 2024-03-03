import { Options } from '@contentful/rich-text-react-renderer'
import { INLINES } from '@contentful/rich-text-types'
import Link from 'next/link'

const options: Options = {
    renderNode: {
        [INLINES.HYPERLINK]: (node) => {
            const { data, content } = node
            return (
                <Link href={data.uri} target="_blank">
                    {(content[0] as any).value}
                </Link>
            )
        },
    },
}

export default options
