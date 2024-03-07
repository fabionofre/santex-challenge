import styled from "styled-components";

export const Card = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1), 0 -1px 2px 0 rgba(0,0,0,.1);
    background: rgba(255, 255, 255, 0.8);
    color: #333;
`;

export const CardHeader = styled.div`
    padding 10px 10px 30px 10px;
    img {
        width: 100%;
        object-fit: contain;
        object-position: center;
        border-radius: 6px;
    }
`;

export const CardBody = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding 20px 10px 30px 10px;
`;

export const ProducDescription = styled.p`
    width: 100%;
    color: #333;
    font-size: 14px;
    font-weight: 400;
`;

export const CardFooter = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    width: 60%;
    margin: 0 auto;
    padding: 10px 0 30px 0;
`;

export const BuyButton = styled.div`
    text-align: center;
    font-weight: 400;
    text-transform: uppercase;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    padding: 12px 24px;
    font-size: 14px;
    letter-spacing: 0.7px;
    line-height: 14px;
    position: relative;
    z-index: 0;
    background: transparent;

    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        inset: 0;
        padding: 2px;
        margin: -2px;
        border-radius: 8px;
        background: linear-gradient(to right, #0850FF, #8753F6, #22DCA4);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        -webkit-mask-composite: exclude;
        mask-composite: exclude;
    }
`;