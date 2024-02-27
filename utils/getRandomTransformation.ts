export default function getRandomTransformation(): string {
    const randomInt = Math.random()
    let transformation = 'none'
    if (randomInt == 1) {
        transformation = `translate(0em, ${1.5 * Math.random()}em)`
    } else if (randomInt >= 0.8) {
        transformation = `translate(0em, ${1.5 * Math.random()}em)`
    } else if (randomInt == 0.7) {
        transformation = `translate(0em, ${-1.9 * Math.random()}em)`
    } else if (randomInt >= 0.5) {
        transformation = `translate(0em, ${2.1 * Math.random()}em)`
    } else if (randomInt >= 0.3) {
        transformation = `translate(0em, ${-2.3 * Math.random()}em)`
    } else if (randomInt == 0.2) {
        transformation = `translate(${
            3 * Math.random()
        }em, ${-2.3 * Math.random()}em)`
    } else {
        transformation = `translate(0em, ${-2.3 * Math.random()}em)`
    }
    return transformation;
}