export const getBehaviourStyles = (behaviour: string) => {
    switch (behaviour) {
        case '50-to-100-right':
            return {
                startWidth: '50%',
                endWidth: '100%',
                startHeight: '50%',
                endHeight: '100%',
            }
        case '100-to-50-right':
            return {
                startWidth: '100%',
                endWidth: '50%',
                startHeight: '100%',
                endHeight: '50%',
            }
        case '0-to-100-right':
            return {
                startWidth: '0%',
                endWidth: '100%',
                startHeight: '0%',
                endHeight: '100%',
            }
        case '100-to-0-right':
            return {
                startWidth: '100%',
                endWidth: '0%',
                startHeight: '100%',
                endHeight: '0%',
            }
        case '0-to-100-left':
            return {
                startWidth: '0%',
                endWidth: '100%',
                startHeight: '0%',
                endHeight: '100%',
                marginLeft: 'auto',
            }
        case '100-to-0-left':
            return {
                startWidth: '100%',
                endWidth: '0%',
                startHeight: '100%',
                endHeight: '0%',
                marginLeft: 'auto',
            }
        case '50-to-100-left':
            return {
                startWidth: '50%',
                endWidth: '100%',
                startHeight: '50%',
                endHeight: '100%',
                marginLeft: 'auto',
            }
        case '100-to-50-left':
            return {
                startWidth: '100%',
                endWidth: '50%',
                startHeight: '100%',
                endHeight: '50%',
                marginLeft: 'auto',
            }
    }
}
