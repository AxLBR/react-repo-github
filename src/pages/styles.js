import styled from "styled-components";
import ItemRepo from "../components/ItemRepo";

export const Container = styled.div`
    width: 100%;
    height: auto;

    margin: 20px 0 0 0;

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .header {
        height: 34vh;
    }

    .error {
        font-size: 1.5rem;
        font-weight: 500;
        color: #EE2244
    }

    .containerRepos {
        width: 100%;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 25px;
    }

    @media (max-height: 740px) {
        .header{
            height: 41vh !important;
        }
    }

    @media (max-height: 920px) {
        .header{
            height: 35vh;
        }
    }
`