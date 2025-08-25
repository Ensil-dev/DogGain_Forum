import { createGlobalStyle } from 'styled-components';
// export type TypeofTheme = keyof typeof themes; //모드의 type("light" | "dark")


// export type StyleMode = {
//     toggleStyle: (mode: TypeofTheme) => void; //현재 모드를 바꿔주는 함수
//     theme: TypeofTheme; //현재모드
// };

export const GlobalStyle = createGlobalStyle`

    *, *::after, *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color : ${(props) => props.theme.containerBackground};
        color : ${(props) => props.theme.containerText};
    }

    .card-bg {
        background-color: ${(props) => props.theme.cardBackground};
    }

    div.header-btn {
        background-color : ${(props) => props.theme.headerButtonBackground};
        color : ${(props) => props.theme.containerText};
    }

    div.page-title {
        background-color : ${(props) => props.theme.pageTitleBackground};
        border : 5px solid ${(props) => props.theme.borderColor};
        border-radius : ${(props) => props.theme.cardRadius};
    }

    header {
        background-color : ${(props) => props.theme.containerBackground};
    }
`;

