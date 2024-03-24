export default function getMoodboard() {
    let moodboard: string[] = [];
    const sessionItem = window?.sessionStorage.getItem("moodboard")
    if (sessionItem != null) {
        moodboard = JSON.parse(sessionItem)
    }
    return moodboard
}