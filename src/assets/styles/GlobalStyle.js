import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    body{
        background: ${({ theme }) => theme.colors.darkWhite};
        color: ${({ theme }) => theme.colors.darkGrey};
        overflow-x: hidden;
    }
    ::-webkit-scrollbar {
        width: 10px;
        background: ${({ theme }) => theme.colors.beigeDark};
    }
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.beigeDark};
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.beigeDark3};
        border-radius: 5px;
    }
`;

export default GlobalStyle;
