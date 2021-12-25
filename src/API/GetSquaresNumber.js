import {URL} from "./config";

export default async function getSquaresNumber(mode) {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        return data[mode].field
    } catch (e) {
        console.log(e)
    }
}
