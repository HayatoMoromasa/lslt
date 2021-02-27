import React, { useEffect, useRef, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md'
import imgModal from './javascript.png';

const Background = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`

const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`

const ModalImg = styled.img`
    width: 50%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px 0 0 10px;
    background: #fff;
    margin: 0 auto;
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    h1 {
        margin: 0;
    }
    h2 {
        margin: 0 0 1rem 0;
    }

    button {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
    }
`
const CloseModalButton = styled(MdClose)`
    position: absolute;
    cursor: pointer;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`

export const Modal = ({showModal,setShowModal}) => {
    const modalRef = useRef()
    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })
    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModal(false);
        }
    }
    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    )
    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    return (
        <>
            {showModal ?
                <Background ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                        <ModalWrapper showModal={showModal}>
                            <ModalImg
                                src={imgModal}
                                alt="hayato1"
                            />
                            <ModalContent>
                                <h1>Like this</h1>
                                <h2>"javascript"</h2>
                            </ModalContent>
                            <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)}/>
                        </ModalWrapper>
                    </animated.div>
                </Background>
            : null}
        </>
    );
};