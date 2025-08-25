import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { filteringOptionSave } from '../../../app/model/post/filtering';
import type { RootState, AppDispatch } from '../../../app/model/store';

const Container = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.categoryContainerBackground};
    color: ${(props) => props.theme.categoryContainerText};
`;

const StyledSelect = styled.select`
    text-align: center;
    font-size: larger;
    padding: 4px 8px;
    margin-left: 5px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.categoryContainerBackground};
    color: ${(props) => props.theme.categoryContainerText};
`;

interface Option {
    value: string;
    label: string;
}

interface SelectedComponentProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[];
}

export default function SelectedComponent({ options, ...props }: SelectedComponentProps) {
    const optionDispatch = useDispatch<AppDispatch>();
    const optionStore = useSelector((store: RootState) => store.filteringOption);
    // console.log(optionStore);

    const handleOptionChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
