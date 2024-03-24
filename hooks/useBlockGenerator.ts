import { useEffect, useState } from 'react'
import useWindowDimensions from './useWindowDimensions'
import { usePathname } from 'next/navigation'
import { onScrollToTop } from '@/utils/onScrollToTop'

interface useBlockGeneratorProps {
    blocks?: any[]
    isNavBar?: boolean
    isGridBackground?: boolean // only allow clicks on nav bar, but show the grid,
    onlyShowNavBar?: boolean
}

export let BLOCK_SIZE = 90
export const MOBILE_BLOCK_SIZE = 60

export default function useBlockGenerator({
    blocks,
    isNavBar,
    isGridBackground,
    onlyShowNavBar
}: useBlockGeneratorProps) {
    const { width, height, isMobile } = useWindowDimensions()

    const [generatedBlocks, setBlocks] = useState<any[]>([])
    const [isLoaded, setIsLoaded] = useState(false)
    const pathname = usePathname()

    const mobileReadyBlocks = blocks || [
        isMobile ? [{}, {}, {}, {}, {}, {}] : [{}, {}, {}, {}, {}, {}, {}, {}],
    ]
    const fixedRowCount = mobileReadyBlocks[0].length

    useEffect(() => {
        if (width == 0 || height == 0) {
            // issue with page loading with wrong width/ height on mobile (so the blocks are messed up)
            return
        }
        if (isMobile) {
            BLOCK_SIZE = MOBILE_BLOCK_SIZE
        } else if ((height / 9) < 80) { // divided by the number of blocks that MUST be shown in column
            BLOCK_SIZE = 70
        } else if ((height / 9) > 90) {
            BLOCK_SIZE = 90
        }
        setIsLoaded(true)
        if (isLoaded && isMobile) {
            // do not re-trigger reorder of blocks for mobile during scroll (nav bar hiding causes height changed)
        }
        const totalPerRow = width / BLOCK_SIZE
        const totalPerCol = (height / BLOCK_SIZE) + (isNavBar ? 2 : 0) // Need to add padding to safari mobile (accomodate navbar disappearing)

        let numRowPaddingBlocks = Math.floor((totalPerRow - fixedRowCount) / 2)
        const numRowPaddingBlocksRemainder =
            Math.trunc((((totalPerRow - fixedRowCount) / 2) % 1) * Math.pow(10, 2)) / Math.pow(10, 2) // truncate to 2 decimal places (otherwise, during zooming in/out will result in unaligned rows)
        if (numRowPaddingBlocks < 0) {
            numRowPaddingBlocks = 0
        }

        let numColPaddingBlocks = Math.floor(
            (totalPerCol - mobileReadyBlocks.length) / 2
        )
        const numColPaddingBlocksRemainder =
            ((totalPerCol - mobileReadyBlocks.length) / 2) % 1
        if (numColPaddingBlocks < 0) {
            numColPaddingBlocks = 0
        }
        if (numColPaddingBlocksRemainder > 0 || numColPaddingBlocks > 0) {
            mobileReadyBlocks.unshift(
                Array(fixedRowCount)
                    .fill(0)
                    .map(() => ({
                        heightBlockMultiplier: numColPaddingBlocksRemainder,
                    })),
                ...Array(numColPaddingBlocks)
                    .fill(0)
                    .map((_) =>
                        Array(fixedRowCount)
                            .fill(0)
                            .map(() => ({}))
                    )
            ) // add top column padding
            mobileReadyBlocks.push(
                ...Array(numColPaddingBlocks)
                    .fill(0)
                    .map((_) =>
                        Array(fixedRowCount)
                            .fill(0)
                            .map(() => ({}))
                    ),
                Array(fixedRowCount)
                    .fill(0)
                    .map(() => ({
                        heightBlockMultiplier: numColPaddingBlocksRemainder,
                    }))
            ) // add bottom column padding
        }
        const totalPixelHeight =
            (mobileReadyBlocks.length - 2) * BLOCK_SIZE +
            (mobileReadyBlocks[0][0].heightBlockMultiplier || BLOCK_SIZE) * 2
        const columnTruncation = (totalPixelHeight - height) / 2 / BLOCK_SIZE // amount of pixels over the height divided by block size gives the ratio of row height that is over the winddow height

        const newBlocks = mobileReadyBlocks.flatMap((row: any, i: number) => {
            const borderTopHidden = i === 0
            const borderBottomHidden = i === mobileReadyBlocks.length - 1
            let heightBlockMultiplier = 1
            if (i == 0 || i === mobileReadyBlocks.length - 1) {
                // 1 - ratio of row height that is over the window height = ratio to multiply by
                heightBlockMultiplier =
                    Math.trunc((columnTruncation > 0
                        ? Math.abs(1 - columnTruncation)
                        : row[0].heightBlockMultiplier) * Math.pow(10, 2)) / Math.pow(10, 2)
            }

            const paddingBlocks = Array(numRowPaddingBlocks)
                .fill(0)
                .map((_) => ({
                    borderTopHidden,
                    borderBottomHidden,
                    heightBlockMultiplier,
                }))

            const returnRow: any[] = [
                ...[
                    {
                        sideBlockMultiplier: numRowPaddingBlocksRemainder,
                        borderLeftHidden: true,
                        borderTopHidden,
                        borderBottomHidden,
                        heightBlockMultiplier,
                    },
                ],
                ...paddingBlocks.map((x) => Object.assign({}, x)), // create new array with new pointer address
                ...row.map((r: any) => ({
                    ...r,
                    borderTopHidden,
                    borderBottomHidden,
                    heightBlockMultiplier,
                })),
                ...paddingBlocks.map((x) => Object.assign({}, x)), // create new array with new pointer address
                ...[
                    {
                        sideBlockMultiplier: numRowPaddingBlocksRemainder,
                        borderTopHidden,
                        borderBottomHidden,
                        borderRightHidden: true,
                        heightBlockMultiplier,
                    },
                ],
            ]

            if (i == 1) {
                returnRow[returnRow.length - 2].text = 'Moodboard'
                returnRow[returnRow.length - 3].text = 'Works'
                returnRow[returnRow.length - 4].text = 'Contact'
                returnRow[returnRow.length - 5].text = 'About'

                if (pathname != '/') {
                    returnRow[1].text = 'Home'
                }
            }

            if (onlyShowNavBar && (i > 1 || i < 1)) {
                returnRow.map((block) => {
                    block.borderBottomHidden = true
                    block.borderLeftHidden = true
                    block.borderRightHidden = true
                    block.borderTopHidden = true
                    return block
                }) // set to have block as bg element only (no clicks)
            }
            if (isGridBackground && i > 2) {
                returnRow.map((block) => (block.isBlockAsBackground = true)) // set to have block as bg element only (no clicks)
            } else if (!isGridBackground && isNavBar && i > 1) {
                return []
            }

            return returnRow
        })
        setBlocks(newBlocks)
    }, [width, height, setBlocks, onlyShowNavBar])

    return generatedBlocks
}
