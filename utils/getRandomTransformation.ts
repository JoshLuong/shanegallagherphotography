export default function getRandomTransformation(isMobile: boolean = false): string {
    const multiplier = isMobile ? 0.5 : 1;
    const randomInt = Math.random()
    let transformation = 'none'
    if (randomInt == 1) {
        transformation = `translate(0em, ${1.5 * Math.random() * multiplier}em)`
    } else if (randomInt >= 0.8) {
        transformation = `translate(0em, ${1.5 * Math.random() * multiplier}em)`
    } else if (randomInt == 0.7) {
        transformation = `translate(0em, ${-1.9 * Math.random() * multiplier}em)`
    } else if (randomInt >= 0.5) {
        transformation = `translate(0em, ${2.1 * Math.random() * multiplier}em)`
    } else if (randomInt >= 0.3) {
        transformation = `translate(0em, ${-2.3 * Math.random() * multiplier}em)`
    } else if (randomInt == 0.2) {
        transformation = `translate(${
            3 * Math.random() * multiplier
        }em, ${-2.3 * Math.random() * multiplier}em)`
    } else {
        transformation = `translate(0em, ${-2.3 * Math.random() * multiplier}em)`
    }
    return transformation;
}