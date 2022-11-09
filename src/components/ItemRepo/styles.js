import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 60%;
    border: 1px solid #FAFAFA60;
    border-radius: 25px;
    padding: 20px 25px;
    margin-bottom: 15px;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size: 16px;
        color: #9b9b9b;
        margin-bottom: 20px;
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
        transition: transform .5s;
    }

    .repoItens button a img:hover{
        transform: scale(1.1,1.1);
    }

    .repoItens button img {
        width: 40px;
        height: 40px;
        transition: transform .5s;
    }

    .repoItens button img:hover {
        transform: scale(1.1,1.1);
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

    @media (max-width: 600px) {
        h3 {
            font-size: 28px !important;
        }   
    }

    @media (min-width: 600px) {
        .repoItens p {
            font-size: 1.3rem !important;
        }

        .repoItens a img {
            width: 100px !important;
        }

        .repoItens button img {
            width: 45px !important;
            height: 45px !important;
        }
    }

    @media (max-width: 1050px) {
        width: 80%;

        .repoMain {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .repoItens {
            gap: 5px;
        }

        .repoItens p {
            font-size: 1.1rem;
        }

        .repoItens a img {
            width: 50px;
            border-radius: 100px;
        }

        .repoItens button img {
            width: 40px;
        }

        .repoItens:last-child{
            justify-content: flex-start;
        }
    }
`