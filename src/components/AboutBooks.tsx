import React from 'react';


export const AboutBooks = () => {
    return <>

        <section className="row">
            <div className="col-12 mb-3">
                <h2>Witaj w aplikacji Moja biblioteczka</h2>
                <span>Za jej pomocą dokonasz ewidencji swojej biblioteczki</span>
            </div>
            <hr/>
            <div className="col-md-6 col-12 mb-3 text-justify">
                <h5>Skąd pomysł na taką aplikację?</h5>
                Z miłości. Z miłości do książek, zapachu papieru, przyciemnionego światła, kocyka, ulubionego fotela i
                możliwości wejścia w inny świat.<br/>
                Z potrzeby relaksu<br/>
                Z wspólnej małżeńskiej pasji<br/>
                Z potrzeby dania przykładu dzieciom, że czytanie to pasja, hobby, sposób na relaks!

            </div>
            <div className="col-md-6 col-12 mb-3 text-justify">
                <h5>W <i>Mojej Biblioteczce</i> możesz:</h5>
                dodać książkę po jej przeczytaniu wraz z własną oceną<br/>
                wyświetlić tabelaryczy wykaz książek, jakie już przeczytałeć <br/>
                dodać ulubione cytaty pochodzące z przeczytanych książek
            </div>
            <hr/>
            <div className="col-12 mb-3 text-justify">
                <h5>Czy wiesz że...</h5>
                - w okresie od kwietnia 2021 do marca 2022 przynajmniej jedną książkę przeczytało tylko <b>38%
                Polaków?</b><br/>
                - czytelnikami w Polce są przede wszystkim <b>wysoko wykształcone kobiety?</b><br/>
                - posiadanie dzieci wpływa na zwyczaje czytelnicze Polaków. <b>Osoby posiadające dzieci czytają znacznie
                częściej?</b><br/>
                <p> Szczegółowe dane na temat czytelnictwa w Polsce przygotowała w specjalnym raporcie Biblioteka
                    Narodowa.
                    <a href={`https://www.bn.org.pl/download/document/1656416398.pdf`}>Zapoznaj się ze szczegółami
                        raportu</a></p>
            </div>
            <div className="col-12 mb-3 text-justify">
                <h5>#readwithIGA2023</h5>
                <p><i>„Książki to dla mnie najlepszy sposób na relaks, zaraz obok spędzania czasu nad wodą, a najlepsze
                    jest połączenie tych dwóch. Kiedy nie mam w codziennym życiu czasu na czytanie książek, to dla mnie
                    pierwszy znak, że straciłam równowagę i muszę zadbać o odpowiedni balans w życiu i w pracy”</i> –
                    mówiła <b>Iga Świątek</b> w wywiadzie udzielonym „Tenis Magazyn”.</p>
                <h6>„Czytaj z Igą”, czyli 12 książek w rok</h6>
                <p><i>„Chcę motywować samą siebie do tego, żeby czytać jak najwięcej, bo czytanie pozwala mi utrzymywać
                    równowagę między moim życiem a pracą. Chcę też dzielić się z Wami tą pasją i zachęcać do tego, żeby
                    czytać więcej” </i> pisze Iga Świątek.<br/>

                    <a href={`https://www.facebook.com/photo/?fbid=764246108395751&set=a.241872303966470`}>Czytaj z
                        Igą</a> bo używając takiego hashtagu możecie wziąć udział w inicjatywie, zachęca do przeczytania
                    w roku 2023 <b>minimum 12 książek</b>. Dołączacie? To, jak podkreśla tenisistka, tylko jedna książka
                    miesięcznie.</p>
            </div>

        </section>
    </>
}