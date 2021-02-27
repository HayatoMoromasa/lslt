import { useState } from 'react';
import { Button } from './components/button';
import styled from 'styled-components';
import { Modal } from './components/Modal';
import { GlobalStyle } from './globalStyles';

const Container = styled.div`
    padding: 12px 64px;
`

const ContainerHead = styled.div`
    width: 100%;
    display: flex;
`

const Heading1 = styled.h1`
    margin: 0;
`

const ModalQuestion = styled.div`
    position: relative;
    margin-left: 10px;
    &:before {
        content: '?';
        color: white;
        position: absolute;
        display: inline-block;
        background: black;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        line-height: 20px;
        cursor: pointer;
    }
`

const Label = styled.label`
    display: flex;
    color: #757575;
    font-size: 14px;
    font-weight: bold;
`
const Input = styled.input`
    border-radius: 3px;
    padding: 4px 8px;
    border: 1px solid black;
`
const ButtonContainer = styled.div`
    margin-top: 24px;
`
const FormButton = styled(Button)`/* スタイルを引き継ぎつつ更新できる*/
    width: 120px;
`

export const Form = ({onAddLang}) => {
    const [ text, setText ] = useState('');
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(prev => !prev);
    };

    const submitForm = (e) => {
        e.preventDefault();
        onAddLang(text);
        setText('');
    }
    return (
        <>
        <Container>
            <ContainerHead>
                <Heading1>add language</Heading1>
                <ModalQuestion onClick={openModal}></ModalQuestion>
            </ContainerHead>
            <form onSubmit={submitForm}>
            <div>
                <Label>Languages</Label>
                    <Input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
            </div>
                <ButtonContainer><FormButton>Add</FormButton></ButtonContainer>
            </form>
        </Container>
        <Modal showModal={showModal} setShowModal={setShowModal}/>
        <GlobalStyle/>
        </>
    )
}
