import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import useOnClickOutside from '../../../shared/lib/hooks/useOnClickOutside';
import { searchKeywordSave, searchTypeSave } from '../../../app/model/search/search';
import { searchModalChange } from '../../../app/model/ui/modal';
import { UI } from '../../../shared/config/constants/common';
import useSearchPosts from '../../../shared/lib/hooks/useSearchPosts';
import type { RootState, AppDispatch } from '../../../app/model/store';

const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${(props) => props.theme.cardBackground};
  color: ${(props) => props.theme.containerText};
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 8px;
  font-size: medium;
`;

const Button = styled.button`
  padding: 8px;
  background-color: ${UI.COLOR_PRIMARY_GRAY};
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

const Select = styled.select`
  padding: 4px 8px;
  border-radius: 6px;
`;

export default function SearchModal() {
  const modalStore = useSelector((state: RootState) => state.modal);
  const searchStore = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch<AppDispatch>();
  const [text, setText] = useState('');
  const [type, setType] = useState(searchStore.type);
  const [debouncedText, setDebouncedText] = useState('');
  useEffect(() => {
    const id = setTimeout(() => setDebouncedText(text), 300);
    return () => clearTimeout(id);
  }, [text]);

  useSearchPosts(debouncedText, type, 10);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    if (modalStore.isSearchModalOpen) {
      dispatch(searchModalChange());
    }
  });

  const isNotSearchTriggerKeyEvent = (event: { type: string; key?: string }) => {
    return event.type === 'keydown' && event.key !== 'Enter';
  };

  const handleSearchSubmit = () => {
    dispatch(searchKeywordSave(text.trim()));
    dispatch(searchTypeSave(type));
    dispatch(searchModalChange());
  };

  const submitSearch = (event?: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
    if (!event || !event.type) return;

    if (isNotSearchTriggerKeyEvent(event)) return;

    handleSearchSubmit();
  };

  if (!modalStore.isSearchModalOpen) return null;

  return (
    <ModalBackdrop>
      <ModalView ref={ref}>
        <Input
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={submitSearch}
          placeholder="검색어를 입력하세요"
        />
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="title">제목</option>
          <option value="nickname">닉네임</option>
        </Select>
        <Button onClick={submitSearch}>검색</Button>
      </ModalView>
    </ModalBackdrop>
  );
}
