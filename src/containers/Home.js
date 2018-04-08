import React, { Component } from 'react';
import { MainDiv, Korba, BodyDiv, Div, H1CC, CCDiv, TitleDiv, NavBarUL, PacketDiv } from '../styles/HomeStyle';



class Home extends Component {
    render() {
        return (
            <MainDiv>
                <Div>
                    <TitleDiv>
                        <Korba>korba</Korba>
                        <CCDiv>
                            <H1CC>Cinema</H1CC>
                            <H1CC>Crawler</H1CC>
                        </CCDiv>
                    </TitleDiv>
                </Div>
                <NavBarUL>
                    <li><a>Home</a></li>
                    <li><a>News</a></li>
                    <li className="dropdown">
                        <a className="dropbtn">Search</a>
                        <div className="dropdown-content">
                            <a href="#">by cinema</a>
                            <a href="#">by film</a>
                        </div>
                    </li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                    <li className="register"><a>Sign Up</a></li>
                    <li className="login"><a>Sign In</a></li>
                 </NavBarUL>
                <BodyDiv>
                    <h2>Salutations!</h2>
                    <p>
                        Welcome to korbaCinemaCrawler. This is the best web site we have ever made in korbaSoftware. We gladly present you
                        our only child.
                    </p>
                </BodyDiv>
                <BodyDiv>
                    <h2>Consider our premium stuff.</h2>
                    <PacketDiv>
                        <h1>FREE</h1>
                        <h2>$0/month</h2>
                        <h3>For beggars.</h3>
                        <ul>
                            <li>We don't respect you</li>
                            <li>You cheap cunt</li>
                            <li>Go away</li>
                            <li>No Support</li>
                        </ul>
                        <div>
                            <button>CHOOSE PLAN</button>
                        </div>
                    </PacketDiv>
                    <PacketDiv>
                        <h1>KORBA PLUS</h1>
                        <h2>$99/month</h2>
                        <h3>Same Korba but more expensive.</h3>
                        <ul>
                            <li>We will like you</li>
                            <li>Unlimited Usage</li>
                            <li>Genuine smiles</li>
                            <li>Fryc Support</li>
                        </ul>
                        <div>
                            <button>CHOOSE PLAN</button>
                        </div>
                    </PacketDiv>
                    <PacketDiv>
                        <h1>KORBA DELUXE</h1>
                        <h2>$999/month</h2>
                        <h3>Take this pls.</h3>
                        <ul>
                            <li>Sincere gratitude</li>
                            <li>Unlimited Usage</li>
                            <li>Korba members don't starve</li>
                            <li>Handshake with Fryc</li>
                        </ul>
                        <div>
                            <button>CHOOSE PLAN</button>
                        </div>
                    </PacketDiv>
                </BodyDiv>
                <BodyDiv>
                    <h2>Tekst skopiowany z wikipedii.</h2>
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
                <BodyDiv>
                    <h2>Tekst skopiowany z wikipedii.</h2>
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
                <BodyDiv>
                    <h2>Tekst skopiowany z wikipedii.</h2>
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