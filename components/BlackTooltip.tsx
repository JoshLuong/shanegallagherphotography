import styled from "@emotion/styled";
import { TooltipProps, Tooltip, tooltipClasses } from "@mui/material";

export const BlackTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip
        arrow
        classes={{ popper: className }}
        placement="right"
        style={{
            fontFamily: `"Space Grotesk", sans-serif`,
        }}
        {...props}
    />
))(() => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: 'transparent',
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'transparent',
        color: '#0087F3',
        fontSize: '0.7em',
    },
}))