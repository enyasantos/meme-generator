import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.img`
    width: 160px;
    height: auto;
    margin-bottom: 20px;
`;

export const Card = styled.div`
    background: #FFFFFF;
    width: 550px;
    border-radius: 8px;
    padding: 20px;
    margin-top: 15px;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .2);

    h2 {
        font-size: 20px;
        color: #26333D;
        margin-bottom: 10px;
    }

    img {
        width: 100%;
        height: 100%;
    }
`

export const Templates = styled.div`
    width: 100%;
    height: 90px;
    background: #eee;
    border-radius: 8px;
    overflow-x: auto;
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin-bottom: 30px;

    button {
        border: 0;
        background: transparent;
        margin-right: 10px;

        img {
            width: 53px;
            height: 53px;
        }

        &.selected {
            border: 2px solid #CB3234;
        }
    }
`;

export const Form = styled.form`
    input {
        width: 100%;
        height: 40px;
        border-radius: 8px;
        border: 1px solid #dbdbdb;
        padding: 0 15px;
        font-size: 14px;
        margin-bottom: 10px;
    }

`;

export const Button = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 0;
    background: #CB3234;
    color: #FFFFFF;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: .08em;
    font-weight: bold;
    transition: background-color .3s ease-in;

    &:hover {
        background: #E16364;
    }
`;

export const Preview = styled.div`
    width: 510px;
    border-radius: 8px;
    margin-bottom: 10px;
    h3 {
        font-size: 20px;
        color: #26333D;
        margin-bottom: 10px;
    }
    img {
        width: 510px;
        max-height: 450px;
    }
`