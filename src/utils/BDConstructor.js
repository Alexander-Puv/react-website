import img from "../assets/image.jpg";
import { BDContent } from "./BDContent";
import { date, month } from "./BlogData";
import { Comments } from "./Comments";

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export const BDConstructor = (id, category, title) => {
    const isPosL = getRandomInt(2);
    const views = getRandomInt(1000000);
    const likes = getRandomInt(views);

    return {
        id: id,
        date: `${date.getDate()} of ${month}`,
        title: title,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: img,
        author: 'Author',
        views: views,
        likes: (!isPosL ? -1 : 1) * likes,
        category: category,
        content: <BDContent />,
        comments: Comments(date, month)
    }
}