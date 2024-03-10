import styled from "styled-components";

export const ListContainer = styled.div`
    width: 90%;
    margin-top: 150px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    z-index: 2;
`;

export const Pagination = styled.div`
    z-index: 2;
    display: flex;
    margin: 50px auto 0 auto;
    gap: 10px;
`;

export const PaginationItem = styled.span<{ active?: boolean; }>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    border-radius: 8px;
    font-size: 20px;
    font-weight: 700;
    color: rgb(0, 0, 0);
    width: 40px;
    heigth: 40px;
    background: ${props => props.active ? "linear-gradient(to right, #0850FF, #8753F6, #22DCA4)" : "rgba(255,255,255,0.8)"}
`;