import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector} from "react-redux";
import { gameActions } from "../store/gameSlice";
import useApi from "../api/useApi";

const StyledStone = styled.div`
    height: 100%;
    width: 100%;
    margin: 2%;

    ${(props) => props.color === "white" &&`
        background: linear-gradient(150deg, white, grey);
        border-radius: 50%;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    `}
    ${(props) => props.color === "black" &&`
        background: linear-gradient(-20deg, #020202, #3a3a3a);
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.89) 0px -2px 6px 0px inset;
    `}
`;



const Stone= (props) => {
    const dispatch = useDispatch();
    const { isLoading, error, sendRequest} = useApi();
    const clickHandler = useCallback(
        () => {
          useApi()
          dispatch(gameActions.placeStone([props.row, props.col]));
        },
        [dispatch]
    );
    return <StyledStone color={props.color} onClick={clickHandler} />;
};

export default Stone;
