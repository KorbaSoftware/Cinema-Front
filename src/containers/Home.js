import React, { Component } from 'react';
import styled from 'styled-components';

const Image = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 10%;
`;

const MainDiv = styled.div`
    width: 100%;
`;

const Div = styled.div`
    width: 100%;
    background-color: rgba(0, 0 ,0, 0.8);
    padding: 20px;
`;

const BodyDiv = styled.div`
    width: 100%;
    background-color: rgba(255, 255 ,255, 0.9);
    padding: 20px;
    margin: 0, 30px;
`;

class Home extends Component {
    render() {
        return (
            <MainDiv>
                <Div class = "logo-header">
                    <h1>test test test</h1>
                    <Image src = {require('../assets/svg/conference-hall.svg')} alt = "cinema-svg" class = "cinema-logo"/>
                </Div>
                <BodyDiv>
                    <h2>test test test</h2>
                    <p>
                        dziedzina działalności człowieka związana z produkcją filmów oraz ich rozpowszechnianiem i wyświetlaniem w kinach.
                        Przemysł filmowy w poszczególnych krajach określa się mianem „kinematografii narodowej”.
                        Według definicji Bataille'a kinematografia jest sztuką poprawnego przekazywania idei drogą następstwa ożywionych obrazów[1].
                        Do niedawna największą kinematografią narodową była amerykańska związana z wytwórniami w Hollywood.
                        Obecnie najwięcej filmów na świecie powstaje w Indiach. Ośrodek kinematograficzny w Bobmaju określany jest często jako Bollywood.
                        Produkuje się tam nie tylko najwięcej filmów, lecz także najdłuższe.
                        Średnio indyjski film trwa około 3 godzin.
                        Trzecią wielką potęgą filmową staje się obecnie kinematografia chińska z ośrodkami produkcyjnymi w Hongkongu, Pekinie i Szanghaju.
                        Tylko te trzy kinematografie – amerykańska, indyjska i chińska, posiadające ogromne obszary dystrybucji,
                        są samowystarczalne, tzn. nie potrzebują dotacji mecenasów państwowych i prywatnych. Inne kinematografie narodowe,
                        ze względu na małe obszary dystrybucji kinowej i telewizyjnej,
                        są najczęściej dofinansowywane przez rządy, fundacje i organizacje społeczne lub telewizje publiczne.
                        Tak się dzieje w Polsce, gdzie istnienie kinematografii narodowej jest uzależnione od dotacji Polskiego Instytutu Sztuki Filmowej a czasem publicznej telewizji.
                        Zdecydowanie rzadziej produkcja jest finansowana przez telewizje prywatne lub sponsorów.
                    </p>
                </BodyDiv>

            </MainDiv>
        );
    }
}

export default Home;