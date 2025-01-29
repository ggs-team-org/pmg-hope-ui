# repozytorium PUBLICZNE
jeżeli będzie prywatne, nie będzie działał CDN jsdelivr.com \
generowanie linków: https://www.jsdelivr.com/github \
czyszczenie cache: https://www.jsdelivr.com/tools/purge

# pliki CSS
- dist/assets/css/hope-ui.css - oryginalny CSS dostarczony przez Hope UI (używamy jako szablon)
- dist/assets/css/customizations/[color]-[color].css - kopie hope-ui.css dostosowane do potrzeb klienta
## customizacja:
- dodać wartość --bs-sidebar-header-height (wysokość sidebar-header + margin)

# pliki JS
- dist/assets/js/customizations/[color]-[color].js - plik zawierające wszystkie dynamicznie wstawiane elementy, które używamy na stronie (szablony, które należy dostosować do konkretnego zastosowania, znajdują się w folderze charts)

# przykłady struktur HTML
- https://github.com/iqonicdesignofficial/hope-ui-html-admin-dashboard/tree/main/dist
- https://github.com/iqonicdesignofficial/hope-ui-design-system
- 
# dokumentacja Hope UI
- https://templates.iqonic.design/hope-ui/documentation/html/dist/main/ - strona główna dokumentacji

# dokumentacja Hope UI w wersji PRO
- https://templates.iqonic.design/hope-ui/pro/documentation/html/pages/main/gettingstarted.html

# Budowanie paczek

## zustand
https://bundlejs.com/?q=zustand%405.0.2%2Fvanilla%2Czustand%405.0.2%2Fvanilla%2Fshallow&treeshake=%5B*%5D%2C%5B*%5D&config=%7B%22esbuild%22%3A%7B%22format%22%3A%22iife%22%2C%22minify%22%3Afalse%2C%22globalName%22%3A%22zustand%22%7D%7D
## sweetalerts2
https://bundlejs.com/?q=zustand%405.0.2%2Fvanilla%2Czustand%405.0.2%2Fvanilla%2Fshallow&treeshake=%5B*%5D%2C%5B*%5D&config=%7B%22esbuild%22%3A%7B%22format%22%3A%22iife%22%2C%22minify%22%3Afalse%2C%22globalName%22%3A%22zustand%22%7D%7D
## Datatables

https://datatables.net/download/
Wybierz:
* Bootstrap v5
* Buttons
  * Column visibility
* Fixed columns

Następnie kliknij "Download" i rozpakuj pobrany plik. Skopiuj plik `datatables.js` do `vendor/datatable_ver_2.js`.
Plików `*.css` nie trzeba kopiować.
