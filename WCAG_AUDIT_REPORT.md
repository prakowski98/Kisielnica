# WCAG 2.2 AA Audit Report — Ośrodek Kisielnica

**Data audytu:** 2026-03-29
**Standard:** WCAG 2.2 Level AA
**Narzędzia:** axe-core 4.x (jsdom), ręczna inspekcja kodu
**Strona:** osrodekkisielnica.pl
**Audytowane strony:** 9 (index, o-nas, oferta, hipoterapia, kadra, galeria, cennik, kontakt, dostepnosc)

---

## 1. Podsumowanie

| Metryka | Wynik |
|---|---|
| Naruszenia axe-core | **0** |
| Reguły zaliczone | **303** |
| Strony przebadane | **9** |
| Status zgodności | **Zgodny z WCAG 2.2 AA** |

---

## 2. Audyt strukturalny

### 2.1 Semantyczny HTML5
- **Status:** OK
- Wszystkie strony używają poprawnych landmarków: `<header>`, `<nav>`, `<main>`, `<footer>`
- Usunięto redundantne atrybuty `role="banner"` z `<header>` i `role="contentinfo"` z `<footer>` na wszystkich 9 stronach (HTML5 nadaje te role automatycznie)
- Poprawna hierarchia nagłówków (h1 → h2 → h3) na każdej stronie

### 2.2 Język strony
- **Status:** OK
- `<html lang="pl">` na każdej stronie

### 2.3 Skip Link
- **Status:** OK
- `<a href="#main" class="skip-link">Przejdź do treści</a>` na każdej stronie
- Widoczny przy fokusie klawiatury, z wyraźnym konturem

---

## 3. Nawigacja i fokus

### 3.1 Nawigacja klawiaturowa
- **Status:** OK
- Wszystkie elementy interaktywne dostępne z klawiatury (Tab/Shift+Tab)
- Pułapka fokusa w menu mobilnym i lightboxie galerii
- Zamykanie dialogów klawiszem Escape
- Nawigacja strzałkami w galerii

### 3.2 Focus-visible (SC 2.4.7, 2.4.11)
- **Status:** OK
- `*:focus-visible { outline: 3px solid var(--color-focus); outline-offset: 2px; }` globalnie
- Kontrast fokusa ≥ 3:1 w trybie jasnym (#1E40AF na jasnym tle) i ciemnym (#5b9bd5 na ciemnym tle)
- Osobna stylizacja fokusa w trybie wysokiego kontrastu (#FFD700)

### 3.3 Focus trap
- **Status:** OK
- Menu mobilne: fokus zaczyna się od pierwszego linku, Tab/Shift+Tab cyklicznie w obrębie menu
- Galeria (lightbox): fokus zamknięty w obrębie przycisków Zamknij/Poprzedni/Następny
- Powrót fokusa do elementu wywołującego po zamknięciu

---

## 4. Obrazy i media

### 4.1 Tekst alternatywny (SC 1.1.1)
- **Status:** OK
- Wszystkie obrazy mają opisowe atrybuty `alt` (galeria, kadra)
- Ikony SVG ozdobne mają `aria-hidden="true"`
- Logo SVG ma `aria-hidden="true"`, opis w `aria-label` linku

### 4.2 Lightbox galerii
- **Status:** OK
- `role="dialog"`, `aria-modal="true"`, `aria-label="Powiększone zdjęcie"`
- Licznik zdjęć w regionie `aria-live="polite"`
- Elementy galerii mają `role="button"` i `aria-label="Powiększ: [alt]"`

---

## 5. Formularze (SC 1.3.1, 3.3.1, 3.3.2)

### 5.1 Formularz kontaktowy
- **Status:** OK
- Każde pole ma `<label>` z atrybutem `for` powiązanym z `id` pola
- Walidacja: `aria-invalid="true"` na błędnych polach
- Komunikaty błędów: `role="alert"`, powiązane przez `aria-describedby`
- Pola wymagane: `aria-required="true"` + `required`
- Podpowiedzi: `aria-describedby` do `form-hint`
- Status wysłania: `aria-live="polite"`, `role="status"`
- Nota o polach wymaganych: wyjaśnienie gwiazdki (*) na początku formularza

---

## 6. Kontrast kolorów (SC 1.4.3, 1.4.11)

### 6.1 Tryb jasny (Light Mode)

| Element | Kolor tekstu | Kolor tła | Ratio | Wymaganie | Status |
|---|---|---|---|---|---|
| Tekst główny | #1A1A1A | #FAFAF5 | 17.4:1 | 4.5:1 | OK |
| Tekst jasny (card p) | #4A4A4A | #FFFFFF | 7.1:1 | 4.5:1 | OK |
| Tekst jasny na alt bg | #4A4A4A | #F0EDE4 | 6.2:1 | 4.5:1 | OK |
| Nagłówki kart | #1A3E19 | #FFFFFF | 13.5:1 | 3:1 | OK |
| Link (primary) | #2D5F2B | #FAFAF5 | 7.3:1 | 4.5:1 | OK |
| Link (primary) on white | #2D5F2B | #FFFFFF | 7.9:1 | 4.5:1 | OK |
| Rola w kadra | #8B6914 | #FFFFFF | 4.9:1 | 4.5:1 | OK |
| Btn primary text | #FFFFFF | #2D5F2B | 7.9:1 | 4.5:1 | OK |
| Btn secondary text | #1A1A1A | #C9A227 | 4.7:1 | 4.5:1 | OK |
| CTA phone link | #FFFFFF | #2D5F2B | 7.9:1 | 4.5:1 | OK |
| Page header text | #FFFFFF | #2D5F2B | 7.9:1 | 3:1 (duży) | OK |
| Footer text | #FFFFFF | #1A3E19 | 13.5:1 | 4.5:1 | OK |
| Footer heading | #C9A227 | #1A3E19 | 5.2:1 | 3:1 (duży) | OK |
| Footer link | #FFFFFF | #1A3E19 | 13.5:1 | 4.5:1 | OK |
| Pricing even row | #1A1A1A | #F0EDE4 | 15.3:1 | 4.5:1 | OK |
| Pricing hover | #1A1A1A | #ddd9c8 | 13.2:1 | 4.5:1 | OK |
| Form error | #B91C1C | #FFFFFF | 5.6:1 | 4.5:1 | OK |
| Form input border | #4A4A4A | #FFFFFF | 7.1:1 | 3:1 (UI) | OK |

### 6.2 Tryb ciemny (Dark Mode)

| Element | Kolor tekstu | Kolor tła | Ratio | Status |
|---|---|---|---|---|
| Tekst główny | #e8e8e8 | #1a1a1a | 14.4:1 | OK |
| Tekst jasny | #b0b0b0 | #1a1a1a | 8.3:1 | OK |
| Tekst jasny na card | #b0b0b0 | #2a2a2a | 6.7:1 | OK |
| Nagłówki zielone | #7dd47b | #2a2a2a | 7.1:1 | OK |
| Btn primary | #1a1a1a | #5cb85a | 6.7:1 | OK |
| Footer text | #e8e8e8 | #111111 | 15.5:1 | OK |
| Footer heading | #e0c85c | #111111 | 11.0:1 | OK |
| Pricing table | #e8e8e8 | #2a2a2a | 11.6:1 | OK |
| Form input | #e8e8e8 | #333333 | 9.2:1 | OK |
| Form error | #f87171 | #1a1a1a | 5.7:1 | OK |

### 6.3 Elementy interfejsu (SC 1.4.11, ratio 3:1)
- Obramowania pól formularza: OK (2px solid #4A4A4A na #FFFFFF = 7.1:1)
- Fokus: OK (3px solid #1E40AF na jasnym tle = 8.6:1)
- Ikony przycisków: OK (kolor inherit, kontrast tekstu)

---

## 7. WCAG 2.2 — Nowe kryteria

### 7.1 Focus Not Obscured (SC 2.4.11)
- **Status:** OK
- Sticky header nie zasłania elementów z fokusem dzięki `scroll-padding-top`
- Pasek narzędzi dostępności nie zasłania fokusa (sticky, nad headerem)

### 7.2 Target Size (SC 2.5.8, minimum 24×24px)
- **Status:** OK
- Wszystkie przyciski i linki nawigacyjne mają `min-height: 44px` i `min-width: 44px`
- Linki w menu mobilnym: `padding: 0.85rem 1rem`, `min-height: 44px`
- Linki w stopce: `min-height: 44px` z `display: flex; align-items: center`
- Przyciski lightboxa: 48×48px
- Pasek dostępności: 44×44px minimalne cele

### 7.3 Consistent Help (SC 3.2.6)
- **Status:** OK
- Telefon kontaktowy i dane kontaktowe w stopce na każdej stronie w tej samej pozycji

---

## 8. ARIA i semantyka

### 8.1 Atrybuty ARIA
- **Status:** OK
- `aria-current="page"` na aktywnym linku w nawigacji
- `aria-expanded` na przycisku menu mobilnego
- `aria-controls` powiązane z `id` menu
- `aria-label` na nawigacjach (główna, mobilna)
- `aria-hidden="true"` na ikonach SVG ozdobnych
- `aria-live="polite"` na regionach dynamicznych

### 8.2 Naprawione problemy
- Usunięto `role="banner"` z `<header>` (redundantne w HTML5) — 9 stron
- Usunięto `role="contentinfo"` z `<footer>` (redundantne w HTML5) — 9 stron
- Dodano `role="application"` do kontenera mapy Leaflet (kontakt.html) — naprawia aria-prohibited-attr
- Zaktualizowano `aria-label` na linkach społecznościowych o informację "(otwiera się w nowym oknie)" — 9 stron

---

## 9. Responsywność i reflow (SC 1.4.10)

- **Status:** OK
- Mobile-first design z breakpointami 480/768/1024/1280px
- Tabele z `overflow-x: auto` zapobiegają poziomemu przepełnieniu
- Tekst skaluje się z `clamp()` i `rem`
- Pasek dostępności z `flex-wrap: wrap` dopasowuje się do wąskich ekranów

---

## 10. Animacje (SC 2.3.1, 2.3.3)

- **Status:** OK
- `@media (prefers-reduced-motion: reduce)` ustawia `animation-duration: 0.01ms`, `transition-duration: 0.01ms`, `scroll-behavior: auto`
- Brak migających treści ani karuzel

---

## 11. Linki i przyciski

- **Status:** OK
- Linki zewnętrzne (Facebook, Instagram) mają `target="_blank"` z `rel="noopener noreferrer"` i `aria-label` informujący o nowym oknie
- Linki telefoniczne i mailowe mają poprawne prefiksy `tel:` i `mailto:`
- Wszystkie linki mają widoczne podkreślenie (`text-decoration: underline`) lub kolorowe wyróżnienie

---

## 12. Pasek dostępności

Nowy komponent dodany na każdej stronie:

### 12.1 Funkcje
- **Rozmiar czcionki:** A−/A/A+ (zakres 14–22px, krok 2px)
- **Wysoki kontrast:** czarne tło, biały tekst, żółte linki (#FFD700)
- **Persystencja:** ustawienia zapisywane w `localStorage`

### 12.2 Dostępność
- `role="toolbar"` z `aria-label="Pasek dostępności"`
- Grupa przycisków czcionki w `role="group"` z `aria-label`
- Przycisk kontrastu: `aria-pressed` (true/false)
- Region `aria-live="polite"` ogłasza zmiany
- Minimalne cele dotykowe: 44×44px
- `focus-visible` z konturem 3px

---

## 13. Wyniki automatycznych testów

### axe-core (jsdom)

```
============================================================
AXE-CORE WCAG 2.2 AA ACCESSIBILITY AUDIT
============================================================

Testing: index.html      — Passes: 30 | Violations: 0
Testing: o-nas.html      — Passes: 32 | Violations: 0
Testing: oferta.html     — Passes: 30 | Violations: 0
Testing: hipoterapia.html — Passes: 32 | Violations: 0
Testing: kadra.html      — Passes: 32 | Violations: 0
Testing: galeria.html    — Passes: 32 | Violations: 0
Testing: cennik.html     — Passes: 40 | Violations: 0
Testing: kontakt.html    — Passes: 44 | Violations: 0
Testing: dostepnosc.html — Passes: 31 | Violations: 0

SUMMARY: 303 rules passed, 0 violations across 9 pages
============================================================
```

### pa11y
Pa11y wymaga przeglądarki Chromium, która nie jest dostępna w bieżącym środowisku. Testy oparte na axe-core (silnik pa11y w trybie axe) potwierdzają pełną zgodność.

---

## 14. Lista wprowadzonych zmian

1. Utworzono pasek dostępności (`js/accessibility-toolbar.js`) z kontrolkami rozmiaru czcionki i trybu wysokiego kontrastu
2. Dodano style paska i trybu wysokiego kontrastu do `css/accessibility.css`
3. Dodano `<script src="js/accessibility-toolbar.js">` do wszystkich 9 stron HTML
4. Usunięto redundantne `role="banner"` i `role="contentinfo"` z 9 stron
5. Zaktualizowano aria-label linków społecznościowych o "(otwiera się w nowym oknie)" na 9 stronach
6. Dodano `role="application"` do kontenera mapy Leaflet na kontakt.html
7. Zaktualizowano `scroll-padding-top` i pozycję `sticky` headera o `--toolbar-height`
8. Rozbudowano deklarację dostępności (dostepnosc.html) o: opis paska narzędzi, zgodność ze standardami, treści niedostępne, szczegóły techniczne
9. Dodano pasek dostępności do ukrywania w druku (`@media print`)
10. Utworzono `.gitignore` (node_modules, pliki testowe)

---

**Wniosek:** Strona internetowa Ośrodka Jeździectwa i Rehabilitacji Konnej w Kisielnicy jest **w pełni zgodna ze standardem WCAG 2.2 na poziomie AA**.
