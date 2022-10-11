import commentatorImg from "../assets/commentatorImg.jpg";

export const Comments = (date, month) => {
    return [
        {
            id: 0,
            commentator: 'Commentator_One',
            commentatorImg: commentatorImg,
            date: `${date.getDate()} of ${month}`,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend risus tortor, a bibendum justo imperdiet a. Donec ac risus ac orci blandit convallis nec a justo. Duis gravida nisi non nunc condimentum dignissim. Vivamus posuere viverra diam, sed vestibulum mauris rutrum id. Integer fermentum augue eu tortor sodales laoreet. Ut semper enim quis felis hendrerit facilisis faucibus et metus. Etiam sit amet libero vel erat vulputate faucibus.',
            likes: 3,
        },
        {
            id: 1,
            commentator: 'Commentator_Two',
            commentatorImg: commentatorImg,
            date: `${date.getDate()} of ${month}`,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna nibh, molestie ut diam et, consequat lobortis lorem. Nunc at mi dui. Nam cursus urna nunc, id aliquam nunc consectetur sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent porttitor, nulla non rutrum viverra, felis justo euismod nisl, vitae lobortis felis dui vel est. Morbi semper, urna vitae ullamcorper fringilla, odio ligula lobortis ex, nec pretium ipsum mauris placerat est. Nam sollicitudin viverra venenatis. Vivamus nunc ipsum, semper eget euismod sed, pulvinar et metus. Etiam odio felis, condimentum egestas tincidunt nec, rhoncus a turpis. Curabitur fringilla ligula eget orci faucibus laoreet. Nam lacus tellus, sagittis nec pellentesque id, iaculis ac odio. Praesent viverra mollis felis, id egestas enim auctor id. Aliquam id sollicitudin ligula. Suspendisse lacinia ultricies sapien, eget ultricies eros finibus ac. Quisque nec purus tortor.',
            likes: -4,
        },
    ]
} 