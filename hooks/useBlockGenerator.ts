import { useEffect, useState } from 'react'
import useWindowDimensions from './useWindowDimensions'
import { usePathname } from 'next/navigation'

interface useBlockGeneratorProps {
    blocks: any[]
    fixedRowCount: number
    isNavBar?: boolean
}

export let BLOCK_SIZE = 90

export default function useBlockGenerator({
    blocks,
    fixedRowCount,
    isNavBar
}: useBlockGeneratorProps) {
    const { width, height, isMobile } = useWindowDimensions()

    const [generatedBlocks, setBlocks] = useState<any[]>([])
    const pathname = usePathname()
    
    
    useEffect(() => {
        if (isMobile) {
            BLOCK_SIZE = 60
        }
        if (width == 0 || height == 0) { // issue with page loading with wrong width/ height on mobile (so the blocks are messed up)
            return;
        }
        const totalPerRow = width / BLOCK_SIZE
        const totalPerCol = height / BLOCK_SIZE
    
        let numRowPaddingBlocks = Math.floor((totalPerRow - fixedRowCount) / 2)
        const numRowPaddingBlocksRemainder = ((totalPerRow - fixedRowCount) / 2) % 1
        if (numRowPaddingBlocks < 0) {
            numRowPaddingBlocks = 0
        }
    
        let numColPaddingBlocks = Math.floor((totalPerCol - blocks.length) / 2)
        const numColPaddingBlocksRemainder = ((totalPerCol - blocks.length) / 2) % 1
        if (numColPaddingBlocks < 0) {
            numColPaddingBlocks = 0
        }
        if (numColPaddingBlocksRemainder > 0 || numColPaddingBlocks > 0) {
            blocks.unshift(
                Array(fixedRowCount).fill(0).map(() => ({ heightBlockMultiplier: numColPaddingBlocksRemainder })),
                ...Array(numColPaddingBlocks)
                    .fill(0)
                    .map((_) => Array(fixedRowCount).fill(0).map(() => ({})))
            ) // add top column padding
            blocks.push(
                ...Array(numColPaddingBlocks)
                    .fill(0)
                    .map((_) => Array(fixedRowCount).fill(0).map(() => ({}))),
                Array(fixedRowCount).fill(0).map(() => ({ heightBlockMultiplier: numColPaddingBlocksRemainder })),
            ) // add bottom column padding
        }
        const totalPixelHeight =
            (blocks.length - 2) * BLOCK_SIZE +
            (blocks[0][0].heightBlockMultiplier || BLOCK_SIZE) * 2
        const columnTruncation = (totalPixelHeight - height) / 2 / BLOCK_SIZE // amount of pixels over the height divided by block size gives the ratio of row height that is over the winddow height
    
        const newBlocks = blocks.flatMap((row: any, i: number) => {
            const borderTopHidden = i === 0
            const borderBottomHidden = i === blocks.length - 1
            let heightBlockMultiplier = 1
            if (i == 0 || i === blocks.length - 1) {
                // 1 - ratio of row height that is over the window height = ratio to multiply by
                heightBlockMultiplier =
                    columnTruncation > 0
                        ? Math.abs(1 - columnTruncation)
                        : row[0].heightBlockMultiplier
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
                returnRow[returnRow.length - 2].text = 'Social'
                returnRow[returnRow.length - 3].text = 'Contact'
                returnRow[returnRow.length - 4].text = 'About'

                if (pathname != "/") {
                    returnRow[returnRow.length - 5].text = 'Home'
                }
            }
            if (isNavBar && i > 1) {
                return []
            }
    
            return returnRow
        })
        setBlocks(newBlocks)
    }, [width, height, setBlocks])

    return generatedBlocks
}

