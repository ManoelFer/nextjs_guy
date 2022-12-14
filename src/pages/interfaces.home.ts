export interface IContentHome {
    title: string;
    sub_title: string;
    link_action: string;
    mobile: string;
    mobile_content: string;
    mobile_banner: string;
    title_web: string;
    web_content: string;
    web_banner: string;
}

export interface IHomeProps {
    content: IContentHome
}