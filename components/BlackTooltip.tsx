import styled from "@emotion/styled";
import { TooltipProps, Tooltip, tooltipClasses } from "@mui/material";

export const BlackTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip
        {...props}
        arrow
        classes={{ popper: className }}
        placement="right"
    />
))(() => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: 'transparent',
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'transparent',
        color: 'red',
        fontSize: '0.7em',
    },
}))