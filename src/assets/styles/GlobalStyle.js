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
        color: ${({ theme }) => theme.colors.darkGrey}
    }
    ::-webkit-scrollbar {
        width: 15px;
        background: ${({ theme }) => theme.colors.beigeDark};
    }
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.beigeDark};
        width: 15px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.beigeDark3};
        transition: 0.4s ease;

    }
`;

export default GlobalStyle;
