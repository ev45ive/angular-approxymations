# YDP Javascript/HMTL-SPA Recruitment task #
 
## Opis ##
Napisz program w jêzyka JAvaScript/HTML/CSS pokazuj¹cy obliczenia przybli¿aj¹ce wartoœæ znanych sta³ych matematycznych.
 
* Program powinien byæ Single Page Application, logika powinna byæ po stronie klient'a
* Inicjalnie program pokazuje u¿ytkownikowi tytu³, krótki opis tego co robi oraz:
** Wybór algorytmu i generowanej liczby (np. &pi; - Newton), pierwsza opcja wybrana domyœlnie
** Wybór maksymalnej dok³adnoœci (wybierany), pierwsza opcja wybrana domyœlnie
** Wybór sposobu przedstawienia obliczeñ (Tabelka, Wykres).
** Przycisk 'Oblicz'.
* Po wybraniu przycisku oblicz pokazywana jest wybrana wizualizacja
** Tabelka
*** Nag³ówek w postaci: Tabela z obliczeniam '<jaka liczba>' w/g '<nazwa algorytmu>', wartoœæ rzeczywista 'liczba'.
*** Wiersze tabeli zawieraj¹ numer kroku oraz wartoœæ przybli¿enia tej liczby.
** Wykres
*** Nag³ówek w postaci: Wykres z obliczeniam '<jaka liczba>' w/g '<nazwa algorytmu>', wartoœæ rzeczywista 'liczba'.
*** Wykres prezentuj¹cy wartoœæ przybli¿enia danej liczby w odpowiednium kroku, wykres nie musi zawieraæ opisanych osi
    liczbowych, dodatkowo na wykresie powinna znajdowaæ siê pozioma linia reporezentuj¹ca rzeczywist¹ wartoœæ
    obliczanej liczby np.:
    |=============
    |  _____-----
    | /
    |/
    ---------------
 
Przekazany projekt zawiera przyk³adowy algorytm generowania liczby &pi; w/g Newtona i powinien byæ rozwijany a¿ do
osi¹gniecia prawid³owej dzia³aj¹cej aplikacji.
 
Aplikacja bêdzie testowana na:
* Chrome 27.X
* przegl¹darce na urz¹dzeniu mobilnym (Safari lub chrome android, do wyboru)
 
Propozycje ci¹gów mo¿na znaleŸæ tutaj: http://en.wikipedia.org/wiki/Taylor_series#List_of_Maclaurin_series_of_some_common_functions
np.: e i ln(2). Trzy algorytmy w sumie wystarcz¹.
 
Aplikacja powinna zawieraæ animacjê CSS'ow¹ obracaj¹cej siê litery PI w rogu strony.
Aplikacja powinna zostaæ napisaæ zgodnie ze standardami responsive design.
 
Pamiêtaj, ¿e wa¿niejsze jest pokazanie zrozumienia problemu oraz umiejêtnego ujêcia go w odpowiednie praktyki programowania. 
Je¿eli obawiasz siê, ¿e nie starczy Tobie czasu nie skupiaj siê na implementacji poszczególnych algorytmów a na ogólnej budowie aplikacji 
i prawid³owym jej przetestowaniu (tak¿e automatycznym).
 
## Build with grunt: ##
    npm install -g grunt-cli
    npm install
    grunt typescript
or:
    grunt test
or:
       grunt
 
## Project layout ##
./app/ts/pi.ts - znajduje siê tam algorytm generowania liczby PI
./app/js/compiled/pi.js - j/w w JavaScript (uzywanie TypeScript'a nie jest obowi¹zkowê)
./lib - pliki nag³ówkowe do typescript. biblioteki potrzebne w trakcie kompiplacji
./test/unit - unit testy dla algorytmu Pi
./build/test - j.w. w JavaScript
