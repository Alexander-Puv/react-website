import { BDConstructor } from "./BDConstructor";
import { titles } from "./BlogData";
import { categories } from "./consts";

const data = []
for (let i = 0; i < 3; i++) {
    data[i] = BDConstructor(i, categories[i], titles[i]);
}

export const TopBlogData = [...data]