interface IPosts {
    slug: string;
    title: string;
    description: string;
    cover: string;
    updatedAt: string;
}


export interface IPostsProps {
    posts: IPosts[] | []
}