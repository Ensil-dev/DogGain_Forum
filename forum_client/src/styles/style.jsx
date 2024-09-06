import { createGlobalStyle } from "styled-components";
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
        background-color : ${(props) => props.theme.body};
        color : ${(props) => props.theme.text};
    }

    div.header-btn {
        background-color : ${(props) => props.theme.headerBtn};
        color : ${(props) => props.theme.text};
    }

    div.page-title {
        background-color : ${(props) => props.theme.titleBtn};
        border : 5px solid ${(props) => props.theme.border};
        border-radius : ${(props) => props.theme.card_radius};
    }

    header {
        background-color : ${(props) => props.theme.body};
    }
`;