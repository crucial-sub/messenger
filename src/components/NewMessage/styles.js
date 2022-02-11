import Button from 'layout/Button';
import styled, { css } from 'styled-components';

export const UserFormBox = styled.div`
    display: flex;
    width: 97%;
    align-items: center;
    background-color: #f8f8f8;
    margin: 0 auto 1.5%;
    margin-top: 10px;
    height: auto;
`;

export const UserForm = styled.form`
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    height: 100%;
`;

export const UserInput = styled.textarea`
    padding-left: 10px;
    width: 100%;
    border: 1px solid #c8c8cc;
    resize: none;
    overflow-y: hidden;
    line-height: 24px;
    height: ${(props) =>
        props.scrollHeight > 48 ? props.scrollHeight + 'px' : 48 + 'px'};
    max-height: 230px;
    bottom: 0;

    :hover {
        box-shadow: 0 0 3px 2px #f00;
        outline: 1px solid rgb(200, 200, 200);
    }

    :focus {
        box-shadow: 0 0 3px 2px #f00;
        outline: 1px solid #343434;
    }
`;

export const SendButton = styled(Button)`
    position: absolute;
    bottom: 6px;
    right: 5px;
    background-color: ${({ isTyping }) => (isTyping ? '#2196F3' : '#e6e6e8')};
    cursor: pointer;
    color: #fff;
    ${({ isTyping }) => {
        if (!isTyping) {
            return css`
                &:hover {
                    background-color: #e6e6e8;
                }
            `;
        }
    }}
`;
