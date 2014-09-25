# YDP Javascript/HMTL-SPA Recruitment task #
 
## Opis ##
Napisz program w j�zyka JAvaScript/HTML/CSS pokazuj�cy obliczenia przybli�aj�ce warto�� znanych sta�ych matematycznych.
 
* Program powinien by� Single Page Application, logika powinna by� po stronie klient'a
* Inicjalnie program pokazuje u�ytkownikowi tytu�, kr�tki opis tego co robi oraz:
** Wyb�r algorytmu i generowanej liczby (np. &pi; - Newton), pierwsza opcja wybrana domy�lnie
** Wyb�r maksymalnej dok�adno�ci (wybierany), pierwsza opcja wybrana domy�lnie
** Wyb�r sposobu przedstawienia oblicze� (Tabelka, Wykres).
** Przycisk 'Oblicz'.
* Po wybraniu przycisku oblicz pokazywana jest wybrana wizualizacja
** Tabelka
*** Nag��wek w postaci: Tabela z obliczeniam '<jaka liczba>' w/g '<nazwa algorytmu>', warto�� rzeczywista 'liczba'.
*** Wiersze tabeli zawieraj� numer kroku oraz warto�� przybli�enia tej liczby.
** Wykres
*** Nag��wek w postaci: Wykres z obliczeniam '<jaka liczba>' w/g '<nazwa algorytmu>', warto�� rzeczywista 'liczba'.
*** Wykres prezentuj�cy warto�� przybli�enia danej liczby w odpowiednium kroku, wykres nie musi zawiera� opisanych osi
    liczbowych, dodatkowo na wykresie powinna znajdowa� si� pozioma linia reporezentuj�ca rzeczywist� warto��
    obliczanej liczby np.:
    |=============
    |  _____-----
    | /
    |/
    ---------------
 
Przekazany projekt zawiera przyk�adowy algorytm generowania liczby &pi; w/g Newtona i powinien by� rozwijany a� do
osi�gniecia prawid�owej dzia�aj�cej aplikacji.
 
Aplikacja b�dzie testowana na:
* Chrome 27.X
* przegl�darce na urz�dzeniu mobilnym (Safari lub chrome android, do wyboru)
 
Propozycje ci�g�w mo�na znale�� tutaj: http://en.wikipedia.org/wiki/Taylor_series#List_of_Maclaurin_series_of_some_common_functions
np.: e i ln(2). Trzy algorytmy w sumie wystarcz�.
 
Aplikacja powinna zawiera� animacj� CSS'ow� obracaj�cej si� litery PI w rogu strony.
Aplikacja powinna zosta� napisa� zgodnie ze standardami responsive design.
 
Pami�taj, �e wa�niejsze jest pokazanie zrozumienia problemu oraz umiej�tnego uj�cia go w odpowiednie praktyki programowania. 
Je�eli obawiasz si�, �e nie starczy Tobie czasu nie skupiaj si� na implementacji poszczeg�lnych algorytm�w a na og�lnej budowie aplikacji 
i prawid�owym jej przetestowaniu (tak�e automatycznym).
 
## Build with grunt: ##
    npm install -g grunt-cli
    npm install
    grunt typescript
or:
    grunt test
or:
       grunt
 
## Project layout ##
./app/ts/pi.ts - znajduje si� tam algorytm generowania liczby PI
./app/js/compiled/pi.js - j/w w JavaScript (uzywanie TypeScript'a nie jest obowi�zkow�)
./lib - pliki nag��wkowe do typescript. biblioteki potrzebne w trakcie kompiplacji
./test/unit - unit testy dla algorytmu Pi
./build/test - j.w. w JavaScript
