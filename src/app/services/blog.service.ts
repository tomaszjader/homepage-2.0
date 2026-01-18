import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts: BlogPost[] = [
    {
      slug: 'agent-tomek-google-adk-automatyzacja-instagrama',
      title: 'Jak stworzyłem „Agenta Tomka” – asystenta AI do automatyzacji Instagrama i notatek, bazując na Google ADK.',
      date: 'January 17, 2026',
      excerpt: 'Udział w Kursie Umiejętności Jutra 2.0, zorganizowanym przez Google i SGH Warsaw School of Economics, oraz zdobycie certyfikatu potwierdzającego moje nowe kompetencje, zaowocowały pomysłem stworzenia własnego agenta AI.',
      tags: ['GoogleADK', 'Automatyzacja', 'Python', 'SztucznaInteligencja', 'ContentMarketing', 'Innowacje', 'TelegramBot', 'UmiejętnościJutra', 'AI'],
      content: `
        <p>Jak stworzyłem „Agenta Tomka” – asystenta AI do automatyzacji Instagrama i notatek, bazując na Google ADK.</p>
        
        <p>Udział w Kursie Umiejętności Jutra 2.0, zorganizowanym przez Google i SGH Warsaw School of Economics, oraz zdobycie certyfikatu potwierdzającego moje nowe kompetencje, zaowocowały pomysłem stworzenia własnego agenta AI.</p>
        
        <p>Moim celem było zbudowanie wirtualnego asystenta, który potrafiłby publikować posty na Instagramie, tworzyć proste notatki na komputerze, a także wyszukiwać podstawowe informacje, takie jak pogoda.</p>
        
        <p>Zabrałem się do pracy. Finalnie, po wielu bojach, udało się ukończyć ten projekt i okiełznać krnąbrnego asystenta, którego nazwałem Agentem Tomkiem.</p>
        
        <p>Kluczowe rozwiązanie polega na wykorzystaniu Telegrama. Dzięki normalnej konwersacji jestem w stanie wydawać mu polecenia. Na przykład, przed publikacją posta na Instagramie, Agent Tomek pomaga mi stworzyć optymalne tagi i angażujący tytuł. Wszystko odbywa się w formie naturalnego dialogu, co uważam za dużo przyjemniejsze i szybsze niż korzystanie z natywnego interfejsu Instagrama.</p>
        
        <img src="assets/img/agent-tomek-google-adk.jpg" alt="Meme: Programista vs Agent Tomek - negocjacje" class="img-fluid my-4 rounded">

        <p>Najzabawniejszym aspektem projektu było testowanie. Początkowo Agent Tomek bywał bardzo uparty – nie chciał słuchać moich poleceń! Wiele razy musiałem go prosić, by wykonał proste zadanie, np. usunął niepotrzebną frazę z tytułu czy opublikował post. Zdarzało się, że musiałem ponawiać komendę nawet pięć razy! Choć problem został finalnie rozwiązany, te pierwsze, komiczne „negocjacje” z asystentem wspominam z największym sentymentem.</p>
        
        <p>Całość rozwiązania bazuje na języku Python, Google ADK (Agent Development Kit) oraz API Telegrama. Projekt ten był doskonałym praktycznym zwieńczeniem wiedzy, którą zdobyłem na kursie Umiejętności Jutra 2.0.</p>
        
        <p>A Wy, jak wykorzystujecie potencjał Google ADK i innych narzędzi AI? Dajcie znać w komentarzu, jakie projekty automatyzacyjne wzbudzają Waszą ciekawość! 👇</p>
      `
    },
    {
      slug: 'hodowla-kur-na-balkonie-claude-ai-eksperyment',
      title: 'Czy zastanawiałeś się kiedyś nad hodowlą kur… na balkonie? 🐔🌿',
      date: 'January 17, 2026',
      excerpt: 'Brzmi absurdalnie, prawda? A jednak taki pomysł pojawił się u mnie – nie dlatego, że planuję zamienić balkon w kurnik, ale dlatego, że testowałem Claude AI od Anthropic do generowania stron internetowych.',
      tags: ['AI', 'Claude', 'Anthropic', 'WebDev', 'Eksperyment', 'Kreatywność', 'Absurd'],
      content: `
        <p>Czy zastanawiałeś się kiedyś nad hodowlą kur… na balkonie? 🐔🌿</p>
        
        <p>Brzmi absurdalnie, prawda? A jednak taki pomysł pojawił się u mnie – nie dlatego, że planuję zamienić balkon w kurnik, ale dlatego, że testowałem Claude AI od Anthropic do generowania stron internetowych.</p>
        
        <p>I co się okazało? Większość moich znajomych w ogóle nie zakwestionowała samej idei. Zamiast tego zaczęli zastanawiać się:</p>
        <ul>
            <li>🐔 Jak by to mogło działać?</li>
            <li>🥚 Ile jajek można by „wyprodukować” w miesiącu?</li>
            <li>💰 Czy to faktycznie się opłaca?</li>
        </ul>
        
        <p>Nie zatrzymali się na absurdzie, tylko weszli głębiej w logikę pomysłu – a nawet zaczęli liczyć wyniki w kalkulatorze.</p>
        
        <img src="assets/img/hodowla-kur-balkon.jpg" alt="Obrazek: Kury na balkonie" class="img-fluid my-4 rounded">

        <p>I to mnie rozbawiło, ale i zainspirowało.</p>
        
        <p>👉 Czasem właśnie absurd otwiera kreatywność bardziej niż rozsądek.</p>
        <p>👉 Eksperymenty z nietypowymi scenariuszami potrafią dać świeże spojrzenie – i w AI, i w biznesie.</p>
        <p>👉 Absurdalne pytania często prowadzą do najbardziej sensownych odpowiedzi.</p>
        
        <p>📌 Link do strony wrzucam w komentarzu.</p>
        
        <p>A teraz pytanie do Ciebie: Kiedy ostatnio pozwoliłeś sobie potraktować absurd całkiem serio? 🤔</p>
      `
    },
    {
      slug: 'moje-pierwsze-kroki-vibe-coding-sukces',
      title: '✨ Moje pierwsze kroki w vibe codingu zakończyły się sukcesem! ✨',
      date: 'January 17, 2026',
      excerpt: 'Udało mi się stworzyć aplikację do śledzenia nawyków, idealnie dopasowaną do moich potrzeb. 🚀 Cały proces był fascynującym doświadczeniem – pełnym wyzwań, nauki i nieoczekiwanych problemów.',
      tags: ['WebDevelopment', 'Coding', 'Projekt', 'Aplikacja', 'Programowanie', 'AI', 'VibeCoding'],
      content: `
        <p>✨ Moje pierwsze kroki w vibe codingu zakończyły się sukcesem! ✨</p>
        
        <p>Udało mi się stworzyć aplikację do śledzenia nawyków, idealnie dopasowaną do moich potrzeb. 🚀</p>
        
        <p>Cały proces był fascynującym doświadczeniem – pełnym wyzwań, nauki i nieoczekiwanych problemów.</p>
        
        <p>👉 Spotkałem się m.in. z:</p>
        <ul>
            <li>🔧 awarią wibracji po miesiącu działania,</li>
            <li>🎨 zniknięciem funkcjonalności po zmianie wyglądu na styl iOS.</li>
        </ul>
        
        <img src="assets/img/vibe-coding-success.jpg" alt="Meme: How it started vs How it's going with AI" class="img-fluid my-4 rounded">

        <p>Zamiast się poddać, potraktowałem to jako okazję do nauki i doskonalenia umiejętności. 💡</p>
        
        <p>Ten projekt był moim marzeniem od lat, ale dopiero teraz – dzięki wsparciu sztucznej inteligencji – mogłem go zrealizować sprawniej i skuteczniej niż kiedykolwiek. Jestem naprawdę dumny, że udało mi się doprowadzić go do końca. 🙌</p>
      `
    },
    {
      slug: 'moja-walka-z-literowkami-aplikacja-android',
      title: '💥 Moja Walka z Literówkami: Jak Dysleksja Popchnęła Mnie do Stworzenia Aplikacji na Androida',
      date: 'January 17, 2026',
      excerpt: 'Nie wiem, czy też tak macie, ale poprawianie literówek potrafi doprowadzić mnie do szału. Zwłaszcza gdy wiem, co chcę napisać… a ekran uparcie pokazuje coś innego. 😅 Z mojej frustracji z dysleksją narodził się pomysł.',
      tags: ['AndroidDev', 'MobileDevelopment', 'Dysleksja', 'EdTech', 'Accessibility', 'PersonalProject', 'WłasnyProjekt'],
      content: `
        <p>💥 Moja Walka z Literówkami: Jak Dysleksja Popchnęła Mnie do Stworzenia Aplikacji na Androida</p>
        
        <p>Nie wiem, czy też tak macie, ale poprawianie literówek potrafi doprowadzić mnie do szału. Zwłaszcza gdy wiem, co chcę napisać… a ekran uparcie pokazuje coś innego. 😅</p>
        
        <p>Z mojej frustracji z dysleksją narodził się pomysł: 👉 stworzę aplikację, która sama poprawia błędy w tekście.</p>
        
        <p>Brzmi prosto? Tylko brzmi. 😅</p>
        
        <img src="assets/img/android-dyslexia-app.jpg" alt="Meme: Expectation vs Reality - Ja po skompilowaniu aplikacji po raz pierwszy vs Aplikacja: [crash sound]" class="img-fluid my-4 rounded">

        <h4>🔧 Droga od pomysłu do prototypu</h4>
        <p>Drugie podejście. Tym razem — Android.</p>
        <ul>
            <li>💥 Pierwsze uruchomienie? Nic nie działa.</li>
            <li>🌥️ Drugie? Działa... ale tylko trochę.</li>
            <li>❄️ Trzecie? Zawiesza się przy każdym zaznaczeniu tekstu.</li>
        </ul>
        
        <p>I tak przez wiele dni. Poprawki, testy, kolejne błędy.</p>
        
        <p>W końcu powstał pierwszy działający prototyp – aplikacja, która poprawia literówki, zanim zdążę się zdenerwować. 🙌</p>
        
        <h4>😂 Najzabawniejszy moment?</h4>
        <p>Google uznało moją aplikację za… wirusa. Serio. Nie mogłem jej nawet wrzucić na własny Dysk Google.</p>
        
        <p>To był ten moment, gdy pomyślałem: “Skoro Google myśli, że to wirus, to znaczy, że aplikacja jest potężna.” 💪</p>
        
        <h4>💡 Co dalej?</h4>
        <ul>
            <li>🔹 aplikacja działa lokalnie na Androidzie</li>
            <li>🔹 wysyła tekst do modelu korekcyjnego</li>
            <li>🔹 zwraca poprawioną wersję</li>
            <li>🔹 w planach: publikacja w Google Play</li>
        </ul>
        
        <p>🚀 Potrzebuję Waszej opinii. Jak Wy radzicie sobie z dysleksją w codziennej komunikacji? 💬 Dajcie znać w komentarzu!</p>
      `
    },
    {
      slug: 'n8n-okiem-programisty-agent-automatyzacji',
      title: 'Od „Psa do Jeża” do Agenta Automatyzacji – Moja Prawda o N8N jako Programisty',
      date: 'January 17, 2026',
      excerpt: 'Słyszałem wiele pozytywnych opinii o narzędziach low-code, które rzekomo pozwalają bardzo szybko stworzyć ciekawe projekty. Ale, powiedzmy to szczerze: jako programista, podchodziłem do tematu jak pies do jeża.',
      tags: ['Automatyzacja', 'N8N', 'LowCode', 'Programowanie', 'DeveloperLife', 'IntegracjeAPI', 'Digitalizacja'],
      content: `
        <p>Od „Psa do Jeża” do Agenta Automatyzacji – Moja Prawda o N8N jako Programisty 🐾🦔</p>
        
        <p>Słyszałem wiele pozytywnych opinii o narzędziach low-code, które rzekomo pozwalają bardzo szybko stworzyć ciekawe projekty.</p>
        
        <p>Ale, powiedzmy to szczerze: jako programista, podchodziłem do tematu jak pies do jeża. Przerzucenie się na narzędzia wizualne, takie jak N8N, wydawało mi się stratą czasu w porównaniu do pisania czystego kodu.</p>
        
        <img src="assets/img/n8n-programista-opinion.jpg" alt="Meme: One does not simply connect n8n to telegram without https on local machine" class="img-fluid my-4 rounded">

        <h4>Pierwsze podejście? Porażka.</h4>
        <p>Próba uruchomienia N8N na lokalnej maszynie napotkała na problem z integracją Telegrama. Wymagało to HTTPS-a, co wymuszało instalację dodatkowych narzędzi. Zniechęciłem się i poddałem za pierwszym razem.</p>
        
        <h4>Drugie podejście: Czas na "Mikrusa"</h4>
        <p>Dałem N8N drugą szansę. Tym razem postawiłem go na kupionym serwerze, tzw. "Mikrusie" od 🔥 Jakub Mrugalski. Po wielu bojach w końcu nadszedł sukces!</p>
        
        <p>Udało mi się stworzyć pierwszego, prostego agenta automatyzacji, który zarządza moimi sprawami z poziomu Telegrama:</p>
        <ul>
            <li>✉️ Wysyła e-maile z Gmaila.</li>
            <li>📅 Dodaje nowe wydarzenia do Kalendarza Google.</li>
            <li>🔎 Sprawdza, jakie mam wydarzenia dzisiaj lub w konkretnym przedziale czasowym.</li>
        </ul>
        
        <p>Cały system działa tak, że piszę przez Telegram, a asystent dopytuje o szczegóły i wykonuje podane czynności. Takie narzędzie daje realną wolność!</p>
        
        <h4>Czego nauczyłem się w boju?</h4>
        <p>Wracam honor! N8N to naprawdę fajne narzędzie. Pozwala szybko zobaczyć efekt pracy.</p>
        
        <p>Największe problemy sprawiło mi nie samo N8N, lecz... podpięcie Google API. To nie jest proste i zajęło najwięcej czasu. Po tym, było już z górki.</p>
        
        <p>Low-code wymaga przełamania barier mentalnych. Mimo to, wciąż uważam, że dla zaawansowanych rzeczy czysty kod jest (na razie) szybszy.</p>
        
        <p>A Ty? Jakie są Twoje doświadczenia z narzędziami low-code/no-code? W jakich projektach widzisz dla nich największy potencjał? 👇</p>
      `
    },
    {
      slug: 'asystent-pogodowy-n8n-telegram-api',
      title: 'Jak w 5 minut stworzyć własnego Asystenta Pogodowego? 🌤️',
      date: 'January 17, 2026',
      excerpt: 'n8n to potężne narzędzie! Ostatnio szukałem pomysłu na kolejny mały projekt automatyzacyjny i postanowiłem rozwiązać swój wieczny problem: zapominanie o sprawdzeniu pogody.',
      tags: ['n8n', 'Automatyzacja', 'WeatherAPI', 'Telegram', 'SideProject', 'LowCode'],
      content: `
        <p>Jak w 5 minut stworzyć własnego Asystenta Pogodowego? 🌤️</p>
        
        <p>n8n to potężne narzędzie! Ostatnio szukałem pomysłu na kolejny mały projekt automatyzacyjny i postanowiłem rozwiązać swój wieczny problem: zapominanie o sprawdzeniu pogody.</p>
        
        <p>Udało mi się stworzyć prostą, ale efektywną automatyzację, która codziennie o 8:00 rano wysyła mi prognozę prosto na Telegram.</p>
        
        <img src="assets/img/weather-assistant-n8n.jpg" alt="Meme: Jak wstajesz rano i widzisz powiadomienie z Telegrama, ale Ty sam sobie wysłałeś to powiadomienie" class="img-fluid my-4 rounded">

        <p>Wiem, że większość aplikacji to robi, ale satysfakcja z posiadania własnego, działającego rozwiązania, które nie wymaga skomplikowanej konfiguracji serwera, jest bezcenna!</p>
        
        <h4>Co jest potrzebne do stworzenia takiego workflow?</h4>
        <ul>
            <li>🔹 Platforma do automatyzacji: <strong>n8n</strong></li>
            <li>🔹 Źródło danych: <strong>OpenWeatherMap API</strong></li>
            <li>🔹 Kanał komunikacji: <strong>Telegram</strong></li>
        </ul>
        
        <p>A co było najzabawniejsze? Dziś rano obudziłem się, usłyszałem powiadomienie i pomyślałem, że ktoś do mnie napisał. Dopiero po chwili zorientowałem się, że to... moja własna automatyzacja! 😅</p>
        
        <p>Prosta rzecz, a tak cieszy!</p>
        
        <p>A Ty? Jakie najciekawsze drobne automatyzacje stworzyłeś ostatnio dla własnych potrzeb? Podziel się w komentarzu! 👇</p>
      `
    },
    {
      slug: 'gymtracker-vibe-coding-drugie-podejscie',
      title: '👨💻💪 Drugie podejście do vibe codingu, ale wreszcie się udało! GymTracker is here!',
      date: 'January 17, 2026',
      excerpt: 'Od dawna marzyłem o tym, żeby mieć własną aplikację do śledzenia postępów na siłowni. Za pierwszym razem – brak czasu i motywacji. Za drugim podejściem, już z vibe codingiem wspieranym przez AI i odrobiną uporu… i jest! 🚀',
      tags: ['VibeCoding', 'AI', 'Angular', 'GoogleSheets', 'GymTracker', 'SideProject', 'WebDev'],
      content: `
        <p>👨💻💪 Drugie podejście do vibe codingu, ale wreszcie się udało!</p>
        
        <p>Od dawna marzyłem o tym, żeby mieć własną aplikację do śledzenia postępów na siłowni. Za pierwszym razem – brak czasu i motywacji. Za drugim podejściem, już z vibe codingiem wspieranym przez AI i odrobiną uporu… i jest! 🚀</p>
        
        <p>👉 Tak powstał <strong>GymTracker</strong> – webowa aplikacja napisana w Angularze 20, z integracją z Google Sheets, która pozwala śledzić treningi, statystyki i postępy na wykresach.</p>
        
        <img src="assets/img/gymtracker-vibe-coding.jpg" alt="Meme: AI Fixing the bug vs Programista z debuggerem" class="img-fluid my-4 rounded">

        <p>Najfajniejsza część? Podczas pracy zdarzały się typowo programistyczne „przygody”. Wrzucam log błędu do AI, odpowiedź: „wszystko naprawione”. Odpalam ponownie… i dokładnie ten sam błąd 🙃 To był moment, w którym zrozumiałem, że AI to świetny partner, ale nie zrobi wszystkiego za nas.</p>
        
        <p>Cała ta przygoda pokazała mi, że:</p>
        <ul>
            <li>✅ nawet jeśli zaczynasz od zera, da się stworzyć coś działającego,</li>
            <li>✅ AI potrafi ogromnie przyspieszyć proces,</li>
            <li>✅ satysfakcja z własnego projektu to najlepsza nagroda.</li>
        </ul>
        
        <p>🔗 Repozytorium i szczegóły aplikacji znajdziesz tutaj: <a href="https://lnkd.in/dKy-A4Ek" target="_blank">https://lnkd.in/dKy-A4Ek</a></p>
        
        <p>Ciekaw jestem – kto z Was też próbował budować swoje projekty z pomocą AI? 🤔</p>
      `
    },
    {
      slug: 'autocenzura-pod-kontrola-vibe-coding-3',
      title: 'Autocenzura pod kontrolą: Czy Narzędzie Cenzurujące Słowa „Niewygodne” Ocali Twórców?',
      date: 'January 17, 2026',
      excerpt: 'Podejście do Vibe Codingu, numer 3. Od dawna zastanawiałem się nad rosnącym problemem: cenzurą algorytmiczną na platformach takich jak YouTube. Inspiracją do działania był jeden z odcinków podcastu „Na Wschód od Bliskiego Wschodu”.',
      tags: ['AI', 'OpenAI', 'ContentCreators', 'YouTubeCreators', 'Algorytmy', 'MachineLearning', 'VibeCoding', 'Coding'],
      content: `
        <p>Autocenzura pod kontrolą: Czy Narzędzie Cenzurujące Słowa „Niewygodne” Ocali Twórców? 🤔</p>
        <p>Podejście do Vibe Codingu, numer 3.</p>

        <p>Od dawna zastanawiałem się nad rosnącym problemem: cenzurą algorytmiczną na platformach takich jak YouTube. Inspiracją do działania był jeden z odcinków podcastu „Na Wschód od Bliskiego Wschodu” Wojciecha Szewko. Postawiłem sobie za cel: stworzyć narzędzie, które chroni zasięgi twórców przed automatycznymi blokerami.</p>

        <p>Jaka była idea?</p>
        <p>Chciałem, aby narzędzie identyfikowało słowa "niewygodne" (takie jak np. „kurde”, które mogłoby zostać błędnie zinterpretowane) i automatycznie zastępowało je dźwiękiem cenzury. W ten sposób treść pozostaje nienaruszona merytorycznie, a twórca nie traci cennych wyświetleń i przychodów.</p>

        <img src="assets/img/autocenzura-vibe-coding.jpg" alt="Meme: Algorytm YouTube nie może ocenzurować słowa, jeśli nigdy go nie usłyszy" class="img-fluid my-4 rounded">

        <p>Po kilkunastu iteracjach udało mi się osiągnąć zadowalające rezultaty.</p>

        <h4>Kluczowe etapy projektu:</h4>
        <ul>
            <li>🤖 <strong>Implementacja AI:</strong> Wykorzystanie modelu Whisper od OpenAI (zarówno lokalnie, jak i przez API) do precyzyjnej transkrypcji i identyfikacji słów.</li>
            <li>🐛 <strong>"Zabawna" Usterka:</strong> W pierwszej iteracji narzędzie, z nieznanych mi przyczyn, dodawało cenzurę zupełnie losowo! Był to humorystyczny, ale pouczający błąd w procesie debugowania.</li>
            <li>✅ <strong>Testy Skuteczności:</strong> Testy przeprowadzone na piosence „Dni, których nie znamy” Marka Grechuty wykazały skuteczność w zakresie 80-90%. Spodziewam się, że w przypadku podcastów i prostszych nagrań, efektywność będzie jeszcze wyższa.</li>
        </ul>

        <p>Projekt Vibe Coding #3 udowadnia, że za pomocą AI możemy tworzyć inteligentne rozwiązania dla realnych problemów, z którymi mierzą się twórcy w sieci.</p>

        <p>A Wy, z jakimi problemami związanymi z algorytmami YouTube zmagacie się na co dzień? Jakie "niewygodne" słowa najczęściej Was blokują? Dajcie znać w komentarzu! 👇</p>

        <p>Pełen kod źródłowy projektu Vibe Coding #3 znajdziecie w pierwszym komentarzu poniżej. Jestem otwarty na Wasz feedback i Pull Requesty!</p>
      `
    },
    {
      slug: 'automatyzacja-instagrama-python-google-sheets',
      title: 'Miałem ostatnio pomysł na mały projekt po godzinach – prostą automatyzację publikowania postów.',
      date: 'January 17, 2026',
      excerpt: 'Na początku próbowałem podejść do tematu przez oficjalną aplikację na platformie Meta. Niestety, szybko się poddałem – proces konfiguracji okazał się bardziej skomplikowany, niż zakładałem. Drugie podejście zrobiłem w Pythonie – i tym razem się udało 🎉',
      tags: ['Python', 'Automation', 'SideProject', 'Instagram', 'GoogleSheets', 'Telegram', 'Coding', 'DevLife'],
      content: `
        <p>Miałem ostatnio pomysł na mały projekt po godzinach – prostą automatyzację publikowania postów. 🚀</p>
        
        <p>Na początku próbowałem podejść do tematu przez oficjalną aplikację na platformie Meta, żeby połączyć się z Instagramem. Niestety, szybko się poddałem – proces konfiguracji okazał się bardziej skomplikowany, niż zakładałem.</p>
        
        <p>Drugie podejście zrobiłem w Pythonie – i tym razem się udało 🎉</p>
        
        <p>Bez tworzenia aplikacji w Meta, tylko przez symulację logowania w przeglądarce.</p>
        
        <img src="assets/img/python-instagram-automation.jpg" alt="Meme: To chociaż prosta automatyzacja - This is fine dog with fire" class="img-fluid my-4 rounded">

        <p>Efekt?</p>
        <ul>
            <li>👉 Skrypt, który pobiera dane z arkusza Google i w wybrane dni publikuje posty na Instagramie – z tytułem, tagami i zdjęciem.</li>
            <li>👉 Dodatkowo po udanej publikacji wysyła powiadomienie na Telegram, żebym miał od razu feedback, że wszystko działa.</li>
        </ul>
        
        <p>Mały side-project, a jednak daje dużo satysfakcji 🚀</p>
      `
    },
    {
      slug: 'automatyzacja-nawykow-n8n-wdziecznosc',
      title: 'Zapominasz o dobrych nawykach? Kluczem jest automatyzacja!',
      date: 'January 17, 2026',
      excerpt: 'Wszyscy chcemy wprowadzać pozytywne zmiany, ale często zderzamy się z jednym problemem: zapominaniem. Moja własna walka z wdrożeniem nawyku wdzięczności była tego najlepszym przykładem.',
      tags: ['Automatyzacja', 'Produktywność', 'Nawyki', 'n8n', 'TechForGood'],
      content: `
        <p>Zapominasz o dobrych nawykach? Kluczem jest automatyzacja! 🚀</p>
        
        <p>Wszyscy chcemy wprowadzać pozytywne zmiany, ale często zderzamy się z jednym problemem: zapominaniem.</p>
        
        <p>Moja własna walka z wdrożeniem nawyku wdzięczności była tego najlepszym przykładem. Nie chodziło o to, że nie miałem pomysłu na zmianę. Problem polegał na braku jasno zdefiniowanej, wymuszonej pory jej wykonania.</p>
        
        <img src="assets/img/habits-automation.jpg" alt="Meme: Ja vs Moje Nawyki vs Pilne Zadania" class="img-fluid my-4 rounded">

        <p>Zawsze odkładałem proste zapisywanie, za co jestem wdzięczny danego dnia. Skutek był ten sam: nawyk nie mógł się utrzymać.</p>
        
        <p>Wpadłem na pomysł, jak wykorzystać technologię, by rozwiązać ten problem. Stworzyłem prostą automatyzację w n8n.</p>
        
        <h4>Oto, jak to działa:</h4>
        <ul>
            <li>⏰ <strong>Codziennie o 20:00:</strong> n8n wysyła mi wiadomość na Telegramie z pytaniem: "Za co jesteś dzisiaj wdzięczny?".</li>
            <li>🛑 <strong>Wymuszona reakcja:</strong> Muszę na to pytanie odpowiedzieć. W ten sposób nawyk zostaje zrealizowany.</li>
            <li>📊 <strong>Podsumowanie miesiąca:</strong> Na początku każdego miesiąca dostaję zbiorczy raport z moimi odpowiedziami.</li>
        </ul>
        
        <p>Pomaga mi to w sposób świadomy docenić każdy dzień, a na koniec miesiąca zobaczyć pełen obraz pozytywnych doświadczeń. To prosta zmiana, ale udowadnia, że automatyzacja może być potężnym narzędziem w służbie samo rozwoju.</p>
        
        <p>A Ty? Czy masz nawyk, który uratowałeś dzięki automatyzacji? Podziel się w komentarzu! 👇</p>
      `
    },
    {
      slug: 'ai-journal-dziennik-wspomagany-przez-llm',
      title: '💭 AI w służbie samoświadomości: wypuściłem AI Journal – dziennik wspomagany przez LLM!',
      date: 'January 17, 2026',
      excerpt: 'Zainspirowany wykładem Franciszka Bazylego Georgiew, postanowiłem pójść o krok dalej i stworzyć własne narzędzie. Wierzę, że AI może realnie wspierać nas w codziennym rozwoju i refleksji nad sobą.',
      tags: ['Programowanie', 'OpenSource', 'SztucznaInteligencja', 'LLM', 'Rozwój', 'SideProject', 'TworzenieOprogramowania'],
      content: `
        <p>Zainspirowany wykładem Franciszek Bazyli Georgiew 高傅安 w ramach kursu Umiejętności Jutra, postanowiłem pójść o krok dalej i stworzyć własne narzędzie.</p>
        <p>Wierzę, że AI może realnie wspierać nas w codziennym rozwoju i refleksji nad sobą.</p>
        <p>Tak powstał projekt <strong>AI Journal</strong> – proste narzędzie do prowadzenia dziennika z pomocą sztucznej inteligencji, które w pełni realizuje tę ideę.</p>

        <img src="assets/img/ai-journal.jpg" alt="AI Journal Meme: Ja prowadzący dziennik vs AI Journal" class="img-fluid my-4 rounded">

        <h4>🧠 Jak działa AI Journal?</h4>
        <p>AI Journal to intuicyjna aplikacja działająca jak chat. W tym interfejsie możesz codziennie zapisywać swoje przemyślenia, cele, trudności czy wątpliwości.</p>

        <p>Wsparcie AI polega na tym, że:</p>
        <ul>
            <li>pomaga w głębszej refleksji,</li>
            <li>zadaje trafne pytania, które prowadzą do ciekawszych wniosków,</li>
            <li>automatycznie generuje miesięczne podsumowania (ta funkcja jest jeszcze w fazie testów!).</li>
        </ul>

        <p>Obecnie intensywnie testuję rozwiązanie, by sprawdzić jego realną użyteczność. W kolejnych tygodniach będę dzielić się postępami i wnioskami z testów!</p>

        <h4>💡 Dla programistów:</h4>
        <p>Ponieważ to projekt open source, cały kod jest dostępny na GitHubie. Jeśli ciekawi Cię, jak to działa od środka – zapraszam!</p>

        <p>👉 <a href="https://lnkd.in/d3d-_VYJ" target="_blank">https://lnkd.in/d3d-_VYJ</a></p>

        <p>Zostaw ⭐, jeśli doceniasz pomysł, albo podziel się w komentarzu, jak Ty wykorzystujesz AI w swoich niszowych projektach!</p>
      `
    },
    {
      slug: 'maly-skrypt-duza-roznica-ctrl-q-autokorekta',
      title: '🚀 Mały skrypt, duża różnica! (CTRL+Q Autokorekta)',
      date: 'January 17, 2026',
      excerpt: 'Ostatnio stworzyłem prosty skrypt, który pozwala jednym skrótem klawiszowym (CTRL+Q) poprawiać literówki w zaznaczonym tekście – nie zmieniając przy tym słów. Idealny dla osób z dysleksją lub tych, którzy często robią literówki.',
      tags: ['Python', 'Scripting', 'Produktywność', 'Gemini', 'Google', 'OpenSource', 'Programowanie'],
      content: `
        <p>🚀 Mały skrypt, duża różnica!</p>
        
        <p>Ostatnio stworzyłem prosty skrypt, który pozwala jednym skrótem klawiszowym (CTRL+Q) poprawiać literówki w zaznaczonym tekście – nie zmieniając przy tym słów. Idealny dla osób z dysleksją lub tych, którzy często robią literówki.</p>
        
        <p>Działa w języku polskim i angielskim, a wszystko, czego potrzebujesz, to darmowy dostęp do Gemini od Google. Żadnych kosztów, a oszczędza mnóstwo czasu przy codziennym pisaniu.</p>
        
        <img src="assets/img/ctrl-q-typo-fix.jpg" alt="Before vs After Typon Fix - CTRL+Q" class="img-fluid my-4 rounded">

        <p>📂 Kod udostępniłem na GitHubie, więc każdy może wypróbować: <a href="https://lnkd.in/d-vvM9nY" target="_blank">https://lnkd.in/d-vvM9nY</a></p>
        
        <p>Czasem najprostsze narzędzia okazują się najbardziej przydatne – zaznacz tekst, naciśnij CTRL+Q i gotowe!</p>
      `
    },
    {
      slug: 'szeptucha-notatki-glosowe-whisper',
      title: '"Szeptucha": Jak stworzyłem własne narzędzie do notatek głosowych z transkrypcją oparte na Whisper (i dlaczego to się opłaca)',
      date: 'January 17, 2026',
      excerpt: 'Z przyjemnością prezentuję projekt, który narodził się z frustracji i potrzeby. Nazwałem go Szeptucha. Inspiracją był post Jakuba Mrugalskiego, opisujący niedoskonałości domyślnie wbudowanych systemów do tworzenia notatek głosowych.',
      tags: ['Programowanie', 'OpenAI', 'Whisper', 'AI', 'Produktywność', 'Narzędzia', 'Developer', 'VibeKodowania'],
      content: `
        <p>Z przyjemnością prezentuję projekt, który narodził się z frustracji i potrzeby. Nazwałem go Szeptucha.</p>
        
        <p>Inspiracją był post 🔥 Jakub Mrugalski, opisujący niedoskonałości domyślnie wbudowanych systemów do tworzenia notatek głosowych. Mowa tu o systemowym narzędziu Text To Speech w Windowsie, które nie działało do końca tak, jakbym tego oczekiwał.</p>
        
        <p>Postanowiłem stworzyć własne, skuteczne i ekonomiczne rozwiązanie: prosty program, który za pomocą skrótu klawiszowego automatycznie uruchamia transkrypcję mowy na tekst.</p>
        
        <img src="assets/img/szeptucha-whisper.jpg" alt="Meme: Używanie wbudowanej funkcji Text To Speech w Windowsie vs Zbudowanie własnej 'Szeptuchy'" class="img-fluid my-4 rounded">

        <h4>W projekcie wykorzystałem płatną wersję modelu Whisper od OpenAI.</h4>
        
        <p>Główną motywacją było obniżenie kosztów. Analizując ceny komercyjnych rozwiązań, szybko zdałem sobie sprawę, że przy moim regularnym (choć nie intensywnym) użytkowaniu, musiałbym przejść na płatne plany, co byłoby nieuzasadnione ekonomicznie. Stworzenie własnego narzędzia okazało się dużo szybsze i w dłuższej perspektywie znacznie tańsze w eksploatacji. Udało mi się go w pełni zrealizować w tym stylu.</p>
        
        <p><strong>Ciekawostka:</strong> Cały ten post, po niezbędnych korektach, został wstępnie podyktowany i przetranskrybowany właśnie za pomocą Szeptuchy.</p>
        
        <p>Co Wy myślicie o tworzeniu własnych narzędzi zamiast korzystania z gotowych, ale drogich subskrypcji? Dajcie znać w komentarzu!</p>
      `
    },
    {
      slug: 'poranny-automat-raportowy-switomir',
      title: 'Jak przerobiłem asystenta pogodowego na "Świtomira" – Asystenta Poranka',
      date: 'January 16, 2026',
      excerpt: 'Zastanawiałem się, jak rozwinąć swój projekt w n8n, by stworzyć spersonalizowany i w pełni automatyczny poranny raport. Oto jak powstał "Świtomir" – mój Asystent Poranka!',
      tags: ['n8n', 'Automatyzacja', 'Workflow', 'LowCode', 'Produktywność', 'OpenAI', 'Programowanie'],
      content: `
        <p>Zastanawiałem się, jak rozwinąć swój projekt w n8n, by stworzyć spersonalizowany i w pełni automatyczny poranny raport. Oto jak powstał "Świtomir" – mój Asystent Poranka!</p>

        <h4>🗓️ Poranny Automat Raportowy – n8n Workflow</h4>
        <p>Ten workflow w n8n automatycznie wysyła codzienne poranne raporty prosto na Telegram. Zbiera dane z kilku źródeł, generuje czytelny podsumowujący komunikat i wysyła go o stałej godzinie. Pełna automatyzacja porannej rutyny!</p>
        
        <h4>🔧 Co robi workflow?</h4>
        <ul>
            <li>⏰ <strong>Uruchamia się codziennie o 07:07</strong> dzięki Schedule Trigger.</li>
            <li>🤖 <strong>Pobiera żart z OpenAI.</strong></li>
            <li>📅 <strong>Pobiera dzisiejsze wydarzenia z Google Calendar.</strong></li>
            <li>⛅ <strong>Pobiera bieżącą pogodę z OpenWeatherMap.</strong></li>
            <li>📝 <strong>Pobiera zadania z Google Tasks.</strong></li>
            <li>🗃 <strong>Łączy dane z DataTable</strong> (ID czatu Telegram).</li>
            <li>🧩 <strong>Składa wszystko w raport</strong> w kodzie JavaScript.</li>
            <li>📤 <strong>Wysyła wiadomość na Telegram</strong> w formacie Markdown.</li>
        </ul>
        
        <h4>📄 Co znajduje się w raporcie?</h4>
        <ul>
            <li>Pogoda dla wskazanego miasta (Temperatura, odczuwalna, ciśnienie, wiatr).</li>
            <li>Lista wydarzeń z kalendarza (z godzinami).</li>
            <li>Lista zadań do wykonania.</li>
            <li>"Żart dnia" prosto z AI.</li>
        </ul>
        
        <h4>🎯 Cel:</h4>
        <p>Jeden, spersonalizowany raport, codziennie, bez żadnej interakcji. Oczywiście, nie obyło się bez wpadki! Pierwszego dnia podczas testów obudziłem się bez powiadomienia. Okazało się, że popełniłem trywialny błąd w workflow. Taki to już jest n8n, man! 😉</p>
        
        <img src="assets/img/switomir-n8n.jpg" alt="Świtomir n8n workflow" class="img-fluid my-4 rounded">
        
        <p>A Ty, co ostatnio zautomatyzowałeś w n8n? Podziel się swoim projektem w komentarzu!</p>
      `
    },
    {
      slug: 'second-brain-n8n-ai-agent',
      title: 'Jak połączyć Second Brain z N8N i AI, by stworzyć Osobistego Agenta do Burzy Mózgów?',
      date: 'January 15, 2026',
      excerpt: 'Ostatnio zainspirował mnie Second Brain, czyli idea Drugiego Mózgu. Zamiast budować kolejny system do notatek, pomyślałem: dlaczego by nie dać „pamięci” mojemu agentowi do automatyzacji w N8N?',
      tags: ['SecondBrain', 'Automatyzacja', 'N8N', 'AI', 'Produktywność', 'LowCode', 'GoogleDocs', 'ContentMarketing'],
      content: `
        <p>Ostatnio zainspirował mnie Second Brain, czyli idea Drugiego Mózgu, prezentowana na wydarzeniu Mindstone prowadzonym przez Kamila Dąbrowska. Zamiast budować kolejny system do notatek, pomyślałem: dlaczego by nie dać „pamięci” mojemu agentowi do automatyzacji w N8N?</p>
        
        <p>Efekt? Stworzyłem osobistego asystenta do burzy mózgów, który faktycznie zna moje cele, priorytety i tożsamość. To krok dalej niż zwykłe promptowanie.</p>

        <img src="assets/img/second-brain-n8n.jpg" alt="Meme: Agent AI używa Twoich celów z Second Brain" class="img-fluid my-4 rounded">
        
        <h4>Architektura pamięci dla Agenta</h4>
        <p>Aby agent AI mógł prowadzić ze mną merytoryczne dyskusje i proponować trafne rozwiązania, musiałem wyposażyć go w kontekst.</p>
        
        <p>Oto kluczowe elementy tej implementacji:</p>
        <ul>
            <li><strong>Agent w N8N:</strong> Wykorzystanie standardowego środowiska automatyzacji do zarządzania logiką.</li>
            <li><strong>Baza Danych:</strong> Dwa arkusze Google Docs przechowujące zbiór danych na mój temat: od najważniejszych celów, przez opis mojej roli, aż po kluczowe projekty.</li>
            <li><strong>Serwer MCP:</strong> Służy jako mechanizm łączący agenta z dynamicznymi danymi.</li>
            <li><strong>Dynamiczna Aktualizacja:</strong> Możliwość szybkiego dodawania i aktualizowania tych danych (np. zmiana celu) bezpośrednio z poziomu serwera.</li>
        </ul>
        
        <p>Cała konfiguracja pozwala agentowi na błyskawiczne odniesienie się do moich danych, dzięki czemu burza mózgów jest precyzyjna, a propozycje — zawsze zgodne z moimi priorytetami.</p>
        
        <h4>🔥 Pora na eksperymenty!</h4>
        <p>Czy macie doświadczenia z łączeniem narzędzi do automatyzacji z koncepcjami zarządzania wiedzą, takimi jak Second Brain?</p>
        <p>Podzielcie się w komentarzu swoimi pomysłami lub pytaniami technicznymi!</p>
      `
    },
    {
      slug: 'paradoks-produktywnosci-weekend-planner',
      title: 'Paradoks produktywności: Dlaczego im więcej mamy czasu, tym trudniej go sensownie wykorzystać?',
      date: 'January 14, 2026',
      excerpt: 'Zauważyłem u siebie dziwną zależność – jestem najbardziej zdyscyplinowany, gdy mój kalendarz pęka w szwach. Gdy przychodzi wolny weekend, często dopada mnie paraliż decyzyjny i czas „przecieka mi przez palce”.',
      tags: ['Automatyzacja', 'n8n', 'OpenAI', 'Productivity', 'BuildInPublic', 'NoCode', 'TechCommunity', 'Innovation'],
      content: `
        <p>Zauważyłem u siebie dziwną zależność – jestem najbardziej zdyscyplinowany, gdy mój kalendarz pęka w szwach. Gdy przychodzi wolny weekend, często dopada mnie paraliż decyzyjny i czas „przecieka mi przez palce”.</p>
        
        <p>Zamiast z tym walczyć, postanowiłem to zautomatyzować. 🤖</p>
        
        <img src="assets/img/mem2.jpg" alt="Meme: Ja buduję system n8n żeby zaplanować spacer" class="img-fluid my-4 rounded">

        <p>Stworzyłem <strong>Weekend Planner</strong> – osobistego asystenta, który dba o to, bym wycisnął z wolnego czasu to, co najlepsze, bez marnowania godziny na zastanawianie się „co by tu dzisiaj zrobić”.</p>
        
        <h4>Jak to działa od strony technicznej?</h4>
        <p>System opiera się na prostym, ale skutecznym workflow:</p>
        
        <ul>
            <li><strong>1️⃣ Baza danych (Google Sheets):</strong> Dwie listy – miejsca, które chcę odwiedzić (backlog marzeń) oraz aktywności cykliczne/sportowe.</li>
            <li><strong>2️⃣ Logika (n8n):</strong> Serce systemu. Workflow pobiera dane z arkuszy i analizuje dostępne opcje.</li>
            <li><strong>3️⃣ Mózg (OpenAI API):</strong> Model analizuje moje preferencje i generuje spójny, atrakcyjny plan na nadchodzący weekend.</li>
            <li><strong>4️⃣ Interfejs (Telegram):</strong> Bot wysyła mi gotową propozycję.</li>
        </ul>
        
        <p>Klikam „Akceptuję” ✅ -> plan ląduje w kalendarzu.<br>
        Klikam „Generuj nowy” 🔄 -> n8n prosi AI o inną konfigurację.</p>
        
        <h4>Dlaczego n8n, a nie gotowa aplikacja?</h4>
        <p>Bo daje pełną kontrolę nad logiką i pozwala na łatwą rozbudowę (np. o prognozę pogody czy rezerwację biletów przez API). To klasyczny przykład tego, jak narzędzia low-code i AI mogą rozwiązywać realne, codzienne problemy.</p>
        
        <p>Ciekaw jestem Waszego podejścia – automatyzujecie takie „życiowe” procesy, czy w weekendy wolicie całkowity analog i spontan? 👇</p>
      `
    },
    {
      slug: 'czysty-kod-to-tylko-polowa-sukcesu',
      title: 'Czysty kod to tylko połowa sukcesu. Prawdziwą wartością jest umiejętność dzielenia się wiedzą.',
      date: 'January 13, 2026',
      excerpt: 'Kontynuując rozwój mojej strony-portfolio, zdecydowałem się na wdrożenie sekcji blogowej. Moim celem jest nie tylko prezentacja gotowych projektów, ale przede wszystkim dokumentowanie procesu ich powstawania.',
      tags: ['Angular', 'TypeScript', 'WebDevelopment', 'Frontend', 'Programming', 'PersonalBrand', 'Portfolio', 'OpenSource'],
      content: `
        <p>Kontynuując rozwój mojej strony-portfolio, zdecydowałem się na wdrożenie sekcji blogowej. Moim celem jest nie tylko prezentacja gotowych projektów, ale przede wszystkim dokumentowanie procesu ich powstawania i pogłębianie technicznych detali.</p>
        
        <p>Co udało mi się zaimplementować?</p>
        
        <h4>Architektura:</h4>
        <p>Projekt oparty na Angularze i TypeScript, wykorzystujący arkusze stylów SCSS.</p>
        
        <h4>Zarządzanie treścią:</h4>
        <p>Posty przechowywane są w czystym formacie JSON. To proste, ale skuteczne rozwiązanie pozwoliło mi na łatwe wdrożenie pełnej wielojęzyczności strony.</p>
        
        <h4>User Experience:</h4>
        <p>Dodałem funkcję wyszukiwania oraz dynamicznego filtrowania postów po tagach.</p>
        
        <img src="assets/img/mem1.jpg" alt="Meme: Kiedy w końcu zaimplementujesz wielojęzyczność i wyszukiwanie" class="img-fluid my-4 rounded">

        <p>Obecnie pracuję nad uzupełnieniem bazy wpisów. Docelowo każdy projekt otrzyma rozbudowany opis, merytoryczne wnioski oraz bezpośrednie odnośniki do repozytoriów na GitHubie.</p>
        
        <p>Wierzę, że transparentność w pokazywaniu „kuchni” programisty to najlepszy sposób na budowanie zaufania i wymianę doświadczeń z community.</p>
        
        <p>Jakie sekcje w portfolio dewelopera uważacie za najbardziej wartościowe z perspektywy rekrutacji i biznesu? Dajcie znać w komentarzach! 👇</p>
      `
    },
    {
      slug: 'jak-przestalem-oszukiwac-samego-siebie-w-nauce-angielskiego',
      title: 'Jak przestałem oszukiwać samego siebie w nauce angielskiego? (Automatyzacja nawyków)',
      date: 'January 7, 2026',
      excerpt: 'Przez długi czas zmagałem się z jednym problemem: jak utrzymać nawyk nauki, gdy wieczorem brakuje już sił? Postanowiłem to zmienić, wykorzystując n8n.',
      tags: ['Automatyzacja', 'n8n', 'Productivity', 'English Learning'],
      content: `
        <p>Przez długi czas zmagałem się z jednym problemem: jak utrzymać nawyk nauki, gdy wieczorem brakuje już sił?</p>
        <p>Moje trzy filary – słuchanie, mówienie i powtórki w Anki – często lądowały na samym końcu listy "to-do". Robiłem je tuż przed snem, byle tylko odhaczyć punkt w kalendarzu. Efekt? Mała skuteczność i poczucie winy.</p>
        <p>Postanowiłem to zmienić, wykorzystując n8n.</p>
        
        <img src="assets/img/n8n-meme.jpg" alt="Meme: Ja myślący że mam ochotę na angielski vs mój workflow w n8n" class="img-fluid my-4 rounded">

        <p>Zamiast polegać na silnej woli, stworzyłem automatycznego asystenta na Telegramie, który dostarcza mi konkretne zadania w idealnych momentach dnia:</p>
        
        <h4>🚀 Mój codzienny workflow:</h4>
        <ul>
          <li><strong>07:30 (Pasywne słuchanie):</strong> Dostaję bezpośredni link do najnowszego podcastu BBC Learning English. Idealne do kawy.</li>
          <li><strong>08:30 (Aktywne powtarzanie):</strong> Przypomnienie o sesji w AnkiDroid. Zanim wejdę w wir pracy.</li>
          <li><strong>20:00 (Konwersacje):</strong> Zaproszenie do rozmowy z Google Gemini. Przełamuję barierę językową w bezpiecznym środowisku AI.</li>
        </ul>
        
        <h4>Dlaczego to działa?</h4>
        <p>Zasada jest prosta: im mniejszy opór przed wykonaniem zadania, tym łatwiej przy nim wytrwać. Dzięki automatyzacji nie szukam materiałów – one same znajdują mnie.</p>
        
        <h4>Technicznie:</h4>
        <p>Wykorzystałem Schedule Triggers, n8n DataTables do zarządzania bazą i Telegram Node do wysyłki sformatowanych powiadomień HTML. Proste, a skuteczne.</p>
        
        <p>A Ty jak radzisz sobie z regularnością? Ufasz swojej pamięci czy wspierasz się technologią?</p>
        
        <p>#Automatyzacja #n8n #Productivity #NaukaAngielskiego #EnglishLearning #LowCode #HabitBuilding #PersonalDevelopment</p>
      `
    },
    {
      slug: 'moje-hobby-podsumowanie-roku',
      title: 'Nigdy nie sądziłem, że moje hobby doprowadzi mnie do tego miejsca. 🚀',
      date: 'January 4, 2026',
      excerpt: 'Dziś nietypowo, bo czas na krótkie podsumowanie roku. Rok temu zacząłem dzielić się swoimi perypetiami przy hobbystycznych projektach. Efekt? Ponad 100 000 wyświetleń.',
      tags: ['Podsumowanie', 'Hobby', 'Projekty', 'Rozwój', 'Community', 'Mikroinfluencer'],
      content: `
        <p>Dziś nietypowo, bo czas na krótkie podsumowanie roku. Rok temu zacząłem dzielić się swoimi perypetiami przy hobbystycznych projektach.</p>
        
        <p>Efekt?</p>
        
        <img src="assets/img/results.jpg" alt="Statystyki podsumowujące rok" class="img-fluid my-4 rounded">

        <ul>
          <li>Ponad 100 000 wyświetleń.</li>
          <li>Dotarcie do 17 000 unikalnych odbiorców.</li>
          <li>Status mikroinfluencera, o którym nawet nie marzyłem.</li>
        </ul>

        <p>To dowód na to, że warto dzielić się swoją pasją, nawet jeśli wydaje nam się, że "to tylko małe projekty". Każda historia ma swojego odbiorcę.</p>
        
        <p>Dziękuję, że jesteście częścią tej podróży! A Ty? Jaki był Twój najważniejszy projekt w zeszłym roku? Podziel się w komentarzu! 👇</p>
      `
    },
  ];

  constructor(private http: HttpClient) { }

  getPosts(): BlogPost[] {
    return this.posts;
  }

  getPostBySlug(slug: string): BlogPost | undefined {
    return this.posts.find(post => post.slug === slug);
  }

  searchPosts(query: string, limit: number = 3): Observable<any> {
    // In development (ng serve), use proxy path
    // In production (Netlify), use full ngrok URL to avoid 404
    // TODO: Replace ngrok URL with your permanent backend URL when available
    const url = this.isDevMode()
      ? "/search"  // Proxied in dev via proxy.conf.json
      : "https://d2fbb4e6abb7.ngrok-free.app/search";  // Direct URL in production

    const payload = {
      query: query,
      limit: limit
    };
    return this.http.post<any>(url, payload);
  }

  private isDevMode(): boolean {
    // Check if we're running in development mode
    return !window.location.hostname.includes('tomaszjader.com') &&
      !window.location.hostname.includes('netlify.app');
  }
}
