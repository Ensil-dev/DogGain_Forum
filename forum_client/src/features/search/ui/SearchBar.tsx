import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { searchKeywordSave, searchTypeSave } from '../../../app/model/search/search';
import type { RootState, AppDispatch } from '../../../app/model/store';

const Container = styled.div`
    display: flex;
    gap: 8px;
    padding: 10px 10px 10px 10px;
`;
const Input = styled.input`
    flex: 1;
    padding: 5px 10px;
    border-radius: 6px;
`;
const Select = styled.select`
    padding: 5px 10px;
    border-radius: 6px;
`;

export default function SearchBar() {
    const dispatch = useDispatch<AppDispatch>();
    const searchStore = useSelector((state: RootState) => state.search);
    const [text, setText] = useState(searchStore.keyword);
    const [type, setType] = useState(searchStore.type);

    useEffect(() => {
        const id = setTimeout(() => {
            dispatch(searchKeywordSave(text.trim()));
            dispatch(searchTypeSave(type));
        }, 300);
        return () => clearTimeout(id);
    }, [text, type, dispatch]);

    return (
        <Container>
            <Input
                value={text}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                placeholder='검색어 입력'
            />
            <Select value={type} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setType(e.target.value)}>
                <option value='title'>제목</option>
                <option value='nickname'>닉네임</option>
            </Select>
        </Container>
    );
}
