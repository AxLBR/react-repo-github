import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 60%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    a.remover {
        color: #FF0000;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }

    .repoMain {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .repoItens {
        display: flex;
        flex-direction: row;
        gap: 10px;
        font-size: 1.3rem;
        align-items: center;
        justify-content: center;
    }

    .repoItens a img {
        width: 120px;
        border-radius: 100px;
    }

    .repoItens button {
        background: none;
        border: none;
        cursor: pointer;
    }

    .repoItens button a img{
        border-radius: 0 !important;
    }

    .repoItens button img {
        width: 40px;
        height: 40px;
    }

    .repoItens:last-child {
        justify-content: flex-end;
    }

    .repoItens p {
        margin-left: 10px;
        color: #c5c5c5;
        font-size: 1.3rem;
        margin-bottom: 0;
    }

    .repoItensInfo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
`