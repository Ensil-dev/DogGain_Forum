import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { filteringOptionSave } from '../redux/constants/constant';

const Container = styled.div`
    display: flex;
`;

const StyledSelect = styled.select`
    text-align: center;
    font-size: larger;
    padding: 4px 8px;
    margin-left: 5px;
    border-radius: 8px;
`;

export default function SelectedComponent({ options, ...props }) {
    const optionDispatch = useDispatch();
    const optionStore = useSelector((store) => store.filteringOption);
    // console.log(optionStore);

    const handleOptionChanged = (event) => {
        // console.log('handleOptionChanged');
        // console.log(event.target.value);

        optionDispatch(filteringOptionSave(event.target.value));
    };

    return (
        <Container>
            <StyledSelect id='forumOption' {...props} onChange={handleOptionChanged} value={optionStore.filteringOption}>
                {options.map((option) => (
                    <option key={option.value} value={option.value} onChange={() => handleOptionChanged()}>
                        {option.label}
                    </option>
                ))}
            </StyledSelect>
        </Container>
    );
}
