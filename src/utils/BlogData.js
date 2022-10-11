import { categories, MONTHS } from "../utils/consts";
import { BDConstructor, getRandomInt } from "./BDConstructor";

export const date = new Date();
export const month = MONTHS[date.getMonth()];

const data = [];
const theseCategories = [...categories];
export const titles = [
    'Lorem ipsum dolar sit amet',
    'Consectetur adipiscing elit',
    'Sed augue diam',
    'Imperdiet in elementum vitae'
]

for (let i = 0; i < 16; i++) {
    const counter = [0, 0, 0, 0];
    let rand = getRandomInt(theseCategories.length);
    for (let index = 0; index < data.length; index++) {
        for (let c = 0; c < theseCategories.length; c++) {
            if (data[index].category === theseCategories[c]) counter[c]++;
            if (counter[c] > 3) {
                theseCategories.splice(c, 1);
                counter.splice(c, 1);
                rand = getRandomInt(theseCategories.length)
            }
        }
    }

    const title = titles[i] ? titles[i] : titles[i-4] ? titles[i-4] : titles[i-8] ? titles[i-8] : titles[i-12]

    data[i] = BDConstructor(i + 3, theseCategories[rand], title);
}

export const BlogData = [...data];