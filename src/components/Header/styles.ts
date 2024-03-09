import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    z-index: 3;
    width: 100%;
    position: absolute;

    img {
        margin-top: 40px;
        margin-left: 30px;
    }
`;

export const SubTotal = styled.div`
    right: 20px;
    position: fixed;
    font-size: 24px;
    margin-left: auto;
    color: white;
    margin-top: 40px;
    margin-right: 30px;

    @media (max-width: 768px) {
        border-radius: 20px;
        padding: 10px;
        background: rgba(0, 0, 0, .6);
    }

    &.animate {
        border-radius: 20px;
        padding: 10px;
        background: rgba(0, 0, 0, .6);
        animation: increaseMoney 1.5s ease-in-out infinite;
        @keyframes increaseMoney {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }
    }
`;