import styled from 'styled-components';

const UfButton = styled.button`
    border: none;
    outline: none;
    background-color: inherit;
    cursor: pointer;

    color: brown;
    font-size: larger;
    font-weight: bold;

    margin-left: 15px;
`;

export default function UnifyedButton({ text }) {
    return <UfButton>{text}</UfButton>;
}
