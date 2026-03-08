import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from '../interfaces/blog-post.interface';



@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts: BlogPost[] = [
    {
      slug: 'kompletny-przewodnik-po-serwerach-mcp-model-context-protocol',
      title: 'Kompletny Przewodnik po Serwerach MCP (Model Context Protocol)',
      date: 'March 8, 2026',
      excerpt: 'W dobie dynamicznego rozwoju sztucznej inteligencji, jednym z największych wyzwań jest łączenie modeli językowych (LLM) z zewnętrznymi danymi i narzędziami. Odpowiedzią na to wyzwanie jest wchodzący na salony MCP (Model Context Protocol).',
      tags: ['AI', 'SystemArchitecture', 'MCP', 'LLM', 'Python', 'Integrations'],
      image: 'assets/img/png/mcp-servers-guide.png',
      content: `
        <p>W dobie dynamicznego rozwoju sztucznej inteligencji, jednym z największych wyzwań jest łączenie modeli językowych (LLM) z zewnętrznymi danymi i narzędziami. Odpowiedzią na to wyzwanie jest <strong>MCP (Model Context Protocol)</strong>. W tym artykule przyjrzymy się bliżej, czym jest MCP, jak z niego korzystać oraz jakie są kluczowe różnice między tradycyjnym podejściem a tym nowym standardem.</p>

        <h2>Co to jest MCP?</h2>

        <p><strong>Model Context Protocol (MCP)</strong> to otwarty standard opracowany w celu bezpiecznego i ujednoliczonego łączenia inteligentnych asystentów AI z zewnętrznymi źródłami danych i narzędziami. Pozwala on modelom językowym na dynamiczne odkrywanie i używanie funkcji we współpracujących aplikacjach w zautomatyzowany i przewidywalny sposób.</p>

        <p>Architektura MCP zazwyczaj obejmuje role:</p>
        <ul>
            <li><strong>Klienci (MCP Clients)</strong>: Aplikacje (np. Claude Desktop, Cursor, czy terminale ułatwiające dostęp do AI), w których użytkownik prowadzi konwersację z modelem LLM. Klient inicjuje komunikację, wysyłając zapytania – to na nim spada obowiązek uwzględniania i zaprezentowania modelowi dostępnych zasobów i narzędzi.</li>
            <li><strong>Serwery (MCP Servers)</strong>: Lekkie, uniwersalne węzły integracyjne dostarczające konkretne możliwości (np. odczyt baz danych, sprawdzanie pogody, interakcja z API).</li>
        </ul>

        <h2>Różnica między lokalnym Klientem MCP a Serwerem MCP</h2>

        <p>W środowisku MCP funkcjonują pojęcia klientów i serwerów. Należy tu rozróżnić dwie główne perspektywy:</p>

        <ol>
            <li><strong>Lokalny Klient MCP (Local MCP Host)</strong>:<br> To aplikacja na komputerze użytkownika (np. aplikacja desktopowa Claude, Cursor, rozszerzenia do IDE), z którą użytkownik wchodzi w bezpośrednią interakcję. Pełni ona rolę mostu – pośredniczy w wysyłaniu zapytań (do modelu LLM w chmurze lub lokalnie) oraz dba o wywoływanie narzędzi w ramach otrzymanego planu działania. Klient lokalny uruchamia swoje połączenia z jednym lub wieloma serwerami MCP.</li>
            <li><strong>Serwer MCP</strong>:<br> To program, posiadający dostęp do Twoich lokalnych stref bezpieczeństwa (np. systemu plików) bądź zewnętrznych usług IT. Zadaniem serwera jest "wystawienie" tych narzędzi do dyspozycji Klienta w ustandaryzowany sposób. Serwery działają najczęściej lokalnie z klientem (wówczas wymieniają paczki danych przez strumienie systemowe <code>stdio</code>), ale mogą też być hostowane zdalnie (używając zazwyczaj technologii komunikacyjnych zbliżonych do HTTP – na przykład Server-Sent Events).</li>
        </ol>

        <h2>Czym różni się Serwer MCP od standardowego REST API?</h2>

        <p>Początkujący programiści często zadają pytanie: <em>„Mamy już protokół HTTP i REST API – dlaczego powstało MCP?”</em> Głębokie różnice stają się widoczne, jeśli spojrzymy na filozofię samego dostępu:</p>

        <table class="table table-bordered my-4 text-white">
            <thead class="bg-dark">
                <tr>
                    <th>Cecha</th>
                    <th>REST API</th>
                    <th>Serwer MCP</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Przeznaczenie i Interakcja</strong></td>
                    <td>Komunikacja ogólnego przeznaczenia (front-end z back-endem, maszyna z maszyną). Wymaga jawnego instruowania (kodowania).</td>
                    <td>Komunikacja "AI do narzędzia". Zoptymalizowane specjalnie pod kątem samodzielnej nawigacji modeli LLM.</td>
                </tr>
                <tr>
                    <td><strong>Odkrywalność (Discovery)</strong></td>
                    <td>Wymaga specyfikacji (jak Swagger, OpenAPI), których przegląd nie jest naturalną pętlą wykonawczą.</td>
                    <td>Model językowy dostaje gotowe listy w ustandaryzowanych schematach JSON. Klient AI odpytuje serwer: "pokaż mi co masz w ofercie i czego potrzebujesz argumentem".</td>
                </tr>
                <tr>
                    <td><strong>Mechanizm Transportu</strong></td>
                    <td>Bazuje na HTTP/HTTPS. Aby wystawić usługę, zazwyczaj używamy portów sieciowych, co napotyka problemy z zaporami sieciowymi.</td>
                    <td>MCP domyślnie opiera swoją wymianę przy użyciu strumieni <code>stdio</code> (Standard I/O). Odpalamy lokalną usługę tak jak wykonanie lokalnego programu, obchodząc ewentualne zapory. Zdalne połączenie jest oparte o SSE z żądaniami POST, zaprojektowane specjalnie dla protokołu JSON-RPC.</td>
                </tr>
                <tr>
                    <td><strong>Elastyczność Zestawu Danych</strong></td>
                    <td>Czyste wywołania i odpowiedzi.</td>
                    <td>Serwer MCP domyślnie kategoryzuje swoją ofertę na "Zasoby", "Narzędzia" i "Prompty" (czytaj więcej w dalszej części).</td>
                </tr>
            </tbody>
        </table>

        <h2>Inne kluczowe standardy ujęte w ekosystemie MCP</h2>

        <p>Dobry przewodnik po MCP wyróżnia trzy podstawowe "prymitywy" (tzw. building blocks), które Serwer dostarcza Agentowi (Modelowi AI):</p>

        <ol>
            <li><strong>Zasoby (Resources)</strong>: Podobne do plików na wirtualnym dysku działające w trybie "tylko odczytu". Pozwalają serwerowi udostępnić dane do kontekstu modelu w formie ścieżek URI, np. wpisy z logów, schematy bazy danych, połączone notatki czy dokumentacja.</li>
            <li><strong>Narzędzia (Tools)</strong>: Najważniejsze elementy wykonywalne. Są to po prostu funkcje, za pomocą których model LLM może podjąć działania (np. wysłanie e-maila, usunięcie pliku lub integracja z zaawansowanym API zewnętrznym jak pogoda). Tylko używając narzędzi, sztuczna inteligencja zyskuje sprawczość wykraczającą poza udzielanie statycznych odpowiedzi.</li>
            <li><strong>Szablony Promptów (Prompts)</strong>: Serwer MCP może dostarczać interaktywne szablony, z których mogą skorzystać np. ustandaryzowane menu klientów w interfejsach graficznych. Te predefiniowane środowiska pozwalają asystentom wiedzieć "gdzie zacząć", gdy weryfikują konkretne zestawy logów, czy tworzą PR-y o ustandaryzowanej procedurze oceny.</li>
        </ol>

        <p>Drugim nieodłącznym elementem z zakresu wiedzy MCP staje się <strong>Bezpieczeństwo (Security &amp; Sandboxing)</strong>. Standaryzacja wymusza zasadę <strong>opt-in</strong> przy korzystaniu z narzędzi o potencjalnych zjawiskach destrukcyjnych lub operacjach wysłania zapytania na zewnątrz do API (serwer pyta użytkownika klienta, czy autoryzuje on wywołanie narzedzia przez bota).</p>

        <h2>Przykład w praktyce: Serwer dostarczający informacje o pogodzie</h2>

        <p>Aby unaocznić strukturę, weźmy uproszczony kod źródłowy serwera w języku Python. Demonstruje on serce podejścia do narzędzi, używając popularnej bilbioteki <code>FastMCP</code> (opartej zresztą na frameworku <code>FastAPI</code> lub bliźniaczych rozwiązaniach):</p>

<pre><code class="language-python">from mcp.server.fastmcp import FastMCP
import httpx

# 1. Inicjalizacja serwera - określenie nazwy usługi.
mcp = FastMCP("Weather")

# 2. Definiowanie narzędzia MCP:
# Dekorator @mcp.tool() konwertuje typową funkcję Pythona na funkcjonalne narzędzie dla Modelu Językowego.
@mcp.tool()
async def get_weather(latitude: float, longitude: float) -> str:
    """
    Pobiera aktualną pogodę na podstawie szerokości i długości geograficznej.
    LLM używa tego opisu by zdecydować kiedy użyć narzędzia.
    """
    url = f"https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&current=temperature_2m,wind_speed_10m"
    
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        response.raise_for_status()
        data = response.json()
        
        current = data.get("current", {})
        temp = current.get("temperature_2m", "brak danych")
        wind = current.get("wind_speed_10m", "brak danych")
        
        return f"Temperatura: {temp}°C, Prędkość wiatru: {wind} km/h"

# 3. Uruchamianie bramy komunikacyjnej
if __name__ == "__main__":
    mcp.run() # Serwer oczekuje na zapytania w kanale I/O (stdio)
</code></pre>

        <p>Warto zwrócić uwagę na kluczowe elementy:</p>
        <ul>
            <li>Przekazane tu <code>dockstringi</code> (<code>"""Pobiera aktualną pogodę..."""</code>) oraz pełne typowanie argumentów wejściowych (<code>latitude: float</code>) są traktowane na wagę złota. Posłużą one klientowi do zaprezentowania tych definicji AI – stając się swoistą instrukcją obsługi narzędzia "kiedy go użyć i jakie warunki musi spełniać argument".</li>
            <li>Od strony programistycznej odpada nam ręczne parsowanie formatów JSON – implementator (framework powiązany z MCP) martwi się całą brudną robotą związaną z komunikacją i błędami, mapując to po prostu do typowanych argumentów funkcji języka, w którym programujesz.</li>
        </ul>

        <h2>Porównanie: Narzędzia MCP a Narzędzia w frameworkach LangChain / Google Agent SDK</h2>

        <p>Wielu programistów pracujących z modelami językowymi spotkało się już z pojęciem "narzędzi" (Tools) w frameworkach aplikacyjnych, takich jak <strong>LangChain</strong> czy <strong>Google Agent SDK</strong>. Mimo że w obu tych przypadkach główny cel jest ten sam – wyposażenie asystenta AI w zdolność działania w realnym świecie – podejście i architektura zasadniczo się od siebie różnią.</p>

        <h3>Cechy wspólne</h3>
        <ol>
            <li><strong>Cel operacyjny:</strong> Obie koncepcje mają udostępnić modelowi (LLM) możliwość działania, a nie tylko generowania tekstu. Np. przeszukiwanie bazy danych, czytanie plików, modyfikację systemów zewnętrznych.</li>
            <li><strong>Mechanizm sterowania:</strong> Model otrzymuje do dyspozycji interfejsy narzędzi w postaci opisu tekstowego (tzw. <em>docstring</em>) oraz ustandaryzowanego formatu wejścia (schematu w formacie JSON Schema). Na tej podstawie AI samo weryfikuje, kiedy należy zawołać narzędzie.</li>
            <li><strong>Funkcjonalność pod spodem:</strong> To Ty określasz, co robi dany kawałek kodu (piszesz rzeczywistą funkcję do pobierania pogody czy wsadzania rzędu do bazy).</li>
        </ol>

        <h3>Kluczowe różnice</h3>

        <table class="table table-bordered my-4 text-white">
            <thead class="bg-dark">
                <tr>
                    <th>Cecha</th>
                    <th>Narzędzia LangChain / Google Agent SDK</th>
                    <th>Narzędzia protokołu MCP (Serwery)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Integracja</strong></td>
                    <td>Silnie sprzężone z kodem w logice Twojego agenta. Narzędzie, skrypt i LLM dzielą przeważnie to samo środowisko (jeden połączony proces i jeden język programowania np. Python).</td>
                    <td>Narzędzia działają jako odosobnione serwery mikrousługowe, oddzielone twardo od samego klienta, środowiska, a nawet języka programowania. Serwer np. w Pythonie i klient agentowy chociażby w Typescript uruchomiony na innej maszynie.</td>
                </tr>
                <tr>
                    <td><strong>Skalowalność i Przenośność</strong></td>
                    <td>Aby przenieść narzędzie z LangChain np. do Google Agent SDK, trzeba zazwyczaj tworzyć wrappery, adaptery lub przepisać znaczną część interfejsów połączeniowych od zera.</td>
                    <td>Prawdziwe rozwiązanie "Włącz i korzystaj" (Plug &amp; Play). Wyobraź sobie, że piszesz jedno narzędzie w serwerze MCP – może ono zostać pobrane jako gotowa wtyczka i natychmiast zadziała w Cursos, Claude, Agent SDK (obsługującym protokół) czy własnej aplikacji w dowolnej technologii – bez zmiany kodu operacyjnego narzędzia.</td>
                </tr>
                <tr>
                    <td><strong>Role systemowe</strong></td>
                    <td>Wewnątrz skryptu modelu językowego (funkcja natywna).</td>
                    <td>Protokół klient-serwer na bazie formatu JSON-RPC (przez SSE czy też strumienie <em>stdio</em>).</td>
                </tr>
            </tbody>
        </table>

        <h3>Przykłady</h3>

        <p>Przyjrzyjmy się, jak implementacja w modelu LangChain (czy jemu podobnym) różniłaby się na tle podejścia z użyciem MCP.</p>

        <p><strong>Podejście klasyczne – LangChain w kodzie aplikacji agentowej:</strong><br>
        Wywołanie narzędzia jest ścisłą połączoną częścią inicjalizacji całego potoku modelu LLM.</p>
<pre><code class="language-python">from langchain.tools import tool
from langchain.agents import initialize_agent, AgentType

# 1. Definicja narzędzia ściśle w kodzie LangChain
@tool
def get_weather(latitude: float, longitude: float) -> str:
    """Pobiera aktualną pogodę na podstawie szerokości i długości geograficznej."""
    # (Tutaj ukryta jest implementacja wywołania np. Requesta HTTP)
    return "20°C"

# 2. Narzędzie jest mocno powiązane z agentem i modelem językowym w jednym potoku wykonawczym Python.
agent = initialize_agent([get_weather], llm, agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION)
</code></pre>

        <p><strong>Podejście MCP – Rozdzielenie warstw (Własna funkcja klienta udostępnia logikę serwera):</strong><br>
        W architekturze MCP narzędzie działa na swoim serwerze (tak jak widziałeś uprzednio we własnym pliku <code>weather_mcp.py</code> w frameworku <strong>FastMCP</strong>). Aplikacja nie musi znać wewnętrznego kodu wywołań. Klienci komunikują mechanizm dostępu, wysyłając zapytanie o całą pulę ofert serwera poprzez czysty format wiadomości:</p>

        <p><strong>Zapytanie od lokalnego agenta klienta do serwera MCP (często na niewidocznym dla programisty kanale transakcyjnym I/O):</strong></p>
<pre><code class="language-json">{
  "jsonrpc": "2.0",
  "method": "tools/list",
  "id": 1,
  "params": {}
}
</code></pre>

        <p>Serwer po prostu oddaje manifest narzędzia jako abstrakcyjny obiekt, a do lokalnego agenta przypinamy po prostu samą nazwę programu bądź komendę uruchomieniową w configu – reszta procesu i protokołowanie dzieje się sama w pełni zautomatyzowanie, dając modelowi LLM kontrolę.<br>
        MCP przesuwa tym samym koncepcję narzędzi w agentach AI od "zintegrowanych lokalnych instrukcji" do otwartych standardów oddzielnych "klocków" na podobieństwo usług internetowych.</p>

        <h2>Podsumowanie</h2>

        <p>Możliwość zintegrowania każdego repozytorium systemowego i skryptu operacyjnego bezpośrednio pod naturalne zjawiska i interfejsy AI otwiera ogromne pole potencjału na automatyzację pracy. Model Context Protocol porządkuje ten dynamiczny obszar integracji, pozwalając na płynną, szybką analizę Twojego środowiska czy usług i oddzielając silnik asystenta od fizycznych barier wykonawczych. Ustanawia nowy most pomiędzy narzędziami (Tools) frameworków z przeszłości i przyszłości.</p>
      `
    },
    {
      slug: 'context-engineering-w-praktyce-agenty-llm',
      title: 'Context engineering w praktyce: jak budować agentów LLM bez przepełniania kontekstu',
      date: 'March 1, 2026',
      excerpt: 'Modele językowe, takie jak GPT-4, nie „rozumieją” świata. Przewidują kolejne tokeny na podstawie danych, które dostają w kontekście. Dlatego w systemach produkcyjnych nie wygrywa ten, kto napisze najładniejszy prompt. Wygrywa ten, kto najlepiej zaprojektuje całe środowisko informacyjne modelu.',
      tags: ['AI', 'ContextEngineering', 'LLM', 'LangChain', 'AgentArchitecture', 'Python', 'RAG'],
      image: 'assets/img/png/context_engineering_llm_agents.png',
      content: `
        <p>Modele językowe, takie jak GPT-4, nie „rozumieją” świata. Przewidują kolejne tokeny na podstawie danych, które dostają w kontekście.</p>

        <p>Dlatego w systemach produkcyjnych nie wygrywa ten, kto napisze najładniejszy prompt. Wygrywa ten, kto najlepiej zaprojektuje całe środowisko informacyjne modelu.</p>

        <p>Tym właśnie jest context engineering.</p>

        <p>W tym artykule:</p>
        <ul>
            <li>wyjaśnię, czym naprawdę jest context engineering,</li>
            <li>pokażę problem przepełnienia kontekstu w agentach,</li>
            <li>przejdziemy krok po kroku przez architekturę rozwiązania,</li>
            <li>zbudujemy działający przykład w Pythonie,</li>
            <li>podzielimy kod na fragmenty i omówimy każdy z nich.</li>
        </ul>

        <p><strong>Framework użyty w przykładzie:</strong> LangChain</p>

        <h3>Czym jest context engineering?</h3>

        <p>Context engineering to świadome projektowanie i kontrolowanie wszystkiego, co trafia do okna kontekstowego modelu:</p>
        <ul>
            <li>promptu,</li>
            <li>instrukcji systemowych,</li>
            <li>historii rozmowy,</li>
            <li>dokumentów (RAG),</li>
            <li>wyników narzędzi,</li>
            <li>formatu odpowiedzi,</li>
            <li>ograniczeń.</li>
        </ul>

        <p>Model działa wyłącznie na tym, co znajduje się w aktualnym kontekście.<br>Nie ma pamięci w klasycznym sensie.</p>

        <h4>Prompt engineering vs context engineering</h4>
        <table class="table table-bordered my-4 text-white">
            <thead class="bg-dark">
                <tr>
                    <th>Prompt engineering</th>
                    <th>Context engineering</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Optymalizuje pojedynczy prompt</td>
                    <td>Projektuje cały system</td>
                </tr>
                <tr>
                    <td>Skupia się na treści zapytania</td>
                    <td>Zarządza całym wejściem modelu</td>
                </tr>
                <tr>
                    <td>Często manualne</td>
                    <td>Często architektoniczne</td>
                </tr>
            </tbody>
        </table>

        <p>Context engineering to projektowanie architektury, nie tylko tekstu.</p>

        <h3>Problem: przepełnienie kontekstu w agentach</h3>

        <p>W systemach agentowych:</p>
        <ul>
            <li>model planuje,</li>
            <li>wykonuje kroki,</li>
            <li>wywołuje narzędzia,</li>
            <li>analizuje wyniki,</li>
            <li>zapisuje historię.</li>
        </ul>

        <p>Każdy krok zwiększa liczbę tokenów.<br>Po kilkunastu iteracjach:</p>
        <ul>
            <li>rosną koszty,</li>
            <li>spada jakość,</li>
            <li>przekraczamy limit kontekstu.</li>
        </ul>

        <p><strong>Kluczowa zasada:</strong><br>Model nie potrzebuje historii. Potrzebuje aktualnego stanu.</p>

        <h3>Architektura rozwiązania</h3>

        <p>Zamiast przekazywać całą historię, budujemy system z:</p>
        <ul>
            <li>plannerem,</li>
            <li>executorem,</li>
            <li>kompresorem stanu,</li>
            <li>pamięcią wektorową (RAG).</li>
        </ul>

        <p><strong>Schemat:</strong></p>
        <pre>User
  ↓
Planner (LLM)
  ↓
Executor (LLM + tools)
  ↓
State Compressor
  ↓
Vector Memory (RAG)</pre>

        <p>Każdy komponent widzi tylko to, czego potrzebuje.</p>

        <h3>Implementacja krok po kroku</h3>

        <p>Poniżej minimalna, ale poprawna architektonicznie implementacja.</p>

        <h4>1️⃣ Konfiguracja modelu</h4>
        <p>Zaczynamy od inicjalizacji modelu.</p>
        <pre><code class="language-python">from langchain.chat_models import ChatOpenAI

llm = ChatOpenAI(
    model="gpt-4",
    temperature=0
)</code></pre>
        <p>Dlaczego <code>temperature=0</code>?<br>Bo w systemach produkcyjnych chcemy przewidywalności.</p>

        <h4>2️⃣ Pamięć długoterminowa (Vector Store)</h4>
        <p>Oddzielamy pamięć roboczą od trwałej.</p>
        <pre><code class="language-python">from langchain.vectorstores import FAISS
from langchain.embeddings import OpenAIEmbeddings
from langchain.docstore.document import Document

embeddings = OpenAIEmbeddings()
vector_store = FAISS.from_documents([], embeddings)

def save_to_memory(text: str):
    vector_store.add_documents([Document(page_content=text)])

def retrieve_memory(query: str):
    docs = vector_store.similarity_search(query, k=3)
    return "\\n".join([d.page_content for d in docs])</code></pre>
        <p>Co tu się dzieje?</p>
        <ul>
            <li>Fakty zapisujemy w bazie wektorowej.</li>
            <li>Nie trzymamy ich w oknie kontekstowym.</li>
            <li>Pobieramy je tylko wtedy, gdy są potrzebne.</li>
        </ul>
        <p>To klasyczny wzorzec RAG.</p>

        <h4>3️⃣ Planner — oddzielny kontekst</h4>
        <p>Planner nie widzi historii. Widzi tylko cel.</p>
        <pre><code class="language-python">from langchain.schema import SystemMessage, HumanMessage

def create_plan(goal: str) -> str:
    response = llm([
        SystemMessage(content="Jesteś planerem. Twórz krótki plan kroków."),
        HumanMessage(content=f"Cel: {goal}")
    ])
    return response.content</code></pre>
        <p>Dlaczego osobny kontekst?<br>Bo planowanie i wykonanie to różne zadania poznawcze.</p>

        <h4>4️⃣ Executor — izolacja kroków</h4>
        <p>Każdy krok wykonywany jest w świeżym kontekście.</p>
        <pre><code class="language-python">def execute_step(step: str, state_summary: str) -> str:
    context = f"""
    Aktualny stan:
    {state_summary}

    Wykonaj krok:
    {step}

    Zwróć tylko kluczowe fakty.
    """

    response = llm([HumanMessage(content=context)])
    return response.content</code></pre>
        <p>Executor dostaje tylko:</p>
        <ul>
            <li>aktualny stan,</li>
            <li>pojedynczy krok,</li>
            <li>ewentualnie dane z pamięci.</li>
        </ul>
        <p>Nie widzi całej historii.</p>

        <h4>5️⃣ Rolling summary — kompresja stanu</h4>
        <p>Po każdym kroku kompresujemy stan.</p>
        <pre><code class="language-python">def compress_state(previous_summary: str, new_info: str) -> str:
    prompt = f"""
    Poprzedni stan:
    {previous_summary}

    Nowe informacje:
    {new_info}

    Zaktualizuj krótki stan zadania.
    """

    response = llm([HumanMessage(content=prompt)])
    return response.content</code></pre>
        <p>Zamiast rosnącej historii mamy:</p>
        <ul>
            <li>cel,</li>
            <li>kluczowe ustalenia,</li>
            <li>otwarte wątki.</li>
        </ul>
        <p>Redukcja kontekstu nawet o 70–90%.</p>

        <h4>6️⃣ Główna pętla agenta</h4>
        <p>Łączymy wszystko w jedną strukturę.</p>
        <pre><code class="language-python">def run_agent(goal: str):
    print("Cel:", goal)

    plan = create_plan(goal)
    steps = plan.split("\\n")

    state_summary = "Zadanie rozpoczęte."

    for step in steps:
        if not step.strip():
            continue

        # Pobranie faktów z pamięci długoterminowej
        memory_context = retrieve_memory(step)

        # Wykonanie kroku w izolowanym kontekście
        result = execute_step(step, state_summary + "\\n" + memory_context)

        # Kompresja stanu
        state_summary = compress_state(state_summary, result)

        # Zapis do pamięci wektorowej
        save_to_memory(result)

    print("Finalny stan:")
    print(state_summary)


if __name__ == "__main__":
    run_agent("Zbadaj rynek kursów AI i podsumuj trendy.")</code></pre>

        <p>Co ten system demonstruje?</p>
        <ul>
            <li>✔ Oddzielenie planowania od wykonania</li>
            <li>✔ Izolację kontekstu</li>
            <li>✔ Kompresję historii</li>
            <li>✔ Oddzielenie pamięci roboczej od trwałej</li>
            <li>✔ Kontrolę wzrostu tokenów</li>
        </ul>
        <p>To podstawy produkcyjnego context engineering.</p>

        <h3>Najważniejsze wzorce projektowe</h3>
        <ol>
            <li>
                <strong>State instead of history</strong><br>
                Nie przekazuj modelowi tego, co się wydarzyło. Przekazuj aktualny stan zadania.
            </li>
            <li>
                <strong>Selektywne przekazywanie wyników narzędzi</strong><br>
                Nie wrzucaj pełnych odpowiedzi API. Parsuj je i przekazuj tylko istotne fakty.
            </li>
            <li>
                <strong>Segmentacja zadań</strong><br>
                Rozbijaj złożone problemy na podzadania z osobnym kontekstem.
            </li>
            <li>
                <strong>Kontrola chain-of-thought</strong><br>
                W produkcji zapisuj wynik, nie pełne rozumowanie.
            </li>
        </ol>

        <h3>Pełny kod projektu</h3>
        <p>Pełna wersja przykładu (z:</p>
        <ul>
            <li>kontrolą liczby tokenów,</li>
            <li>structured output (JSON),</li>
            <li>retry policy,</li>
            <li>monitoringiem długości kontekstu,</li>
            <li>tańszym modelem do kompresji,</li>
            <li>asynchroniczną obsługą narzędzi)</li>
        </ul>
        <p>możesz umieścić w repozytorium, np.:<br>📂 <a href="https://github.com/tomaszjader/context-engineering-agent" target="_blank">https://github.com/tomaszjader/context-engineering-agent</a></p>

        <h3>Podsumowanie</h3>
        <p>Context engineering to nie kosmetyka promptów. To projektowanie środowiska informacyjnego modelu.</p>
        <p>Jeśli budujesz:</p>
        <ul>
            <li>chatboty,</li>
            <li>agentów,</li>
            <li>systemy analityczne,</li>
            <li>copilots,</li>
            <li>narzędzia automatyzujące pracę,</li>
        </ul>
        <p>to jakość Twojego systemu zależy bardziej od architektury kontekstu niż od samego modelu.</p>
        <p>Modele będą coraz większe. Okna kontekstowe będą rosły.</p>
        <p>Ale zasada pozostanie ta sama:</p>
        <p><strong>Model nie potrzebuje wszystkiego. Potrzebuje dokładnie tego, co jest istotne.</strong></p>
      `
    },
    {
      slug: 'budowa-agentow-ai-to-powazne-wyzwanie',
      title: 'Budowa agentów AI to już nie tylko "prompt engineering". To poważne wyzwanie architektoniczne. 🏗️',
      date: 'February 23, 2026',
      excerpt: 'W świecie Enterprise stajemy przed wyborem: postawić na korporacyjną stabilność Google ADK, czy na ogromną elastyczność ekosystemu LangChain/LangGraph?',
      tags: ['AI', 'GenerativeAI', 'GoogleCloud', 'LangChain', 'MachineLearning', 'SoftwareArchitecture', 'Agents'],
      image: 'assets/img/jpg/1771798369667.jpg',
      content: `
        <p>Budowa agentów AI to już nie tylko "prompt engineering". To poważne wyzwanie architektoniczne. 🏗️</p>
        
        <p>W świecie Enterprise stajemy przed wyborem: postawić na korporacyjną stabilność Google ADK, czy na ogromną elastyczność ekosystemu LangChain/LangGraph?</p>
        
        <p>Na moim blogu pojawiła się właśnie analiza porównawcza tych dwóch gigantów. Sprawdzam w niej:</p>
        <ul>
            <li>✅ Podejście Code-First vs. Grafy Stanowe.</li>
            <li>✅ Jak zarządzać zestawem 10+ narzędzi bez "przepalania" tokenów.</li>
            <li>✅ Kiedy determinizm Google ADK wygrywa z elastycznością open-source.</li>
        </ul>
        
        <p>Jeśli zastanawiasz się, który framework będzie fundamentem Twojego kolejnego projektu – ten artykuł jest dla Ciebie.</p>
        <img src="assets/img/jpg/1771798369667.jpg" alt="Meme">
        <p>🔗 <a href="https://lnkd.in/dVYtDyZt" target="_blank">https://lnkd.in/dVYtDyZt</a></p>
      `
    },
    {
      slug: 'adk-vs-langchain-wybor-frameworka-agenty-ai',
      title: 'ADK vs. LangChain: Wybór frameworka dla agentów AI klasy Enterprise',
      date: 'February 22, 2026',
      excerpt: 'Era prostych chatbotów przemija. Dziś projektujemy autonomiczne agenty AI, które planują, rozumują i korzystają z zewnętrznych narzędzi. Wybór fundamentu dla takiego systemu to decyzja między stabilnością korporacyjną a elastycznością open-source.',
      tags: ['AI', 'Enterprise', 'Agents', 'GoogleADK', 'LangChain', 'LangGraph', 'Architecture', 'Python'],
      image: 'assets/img/png/adk-vs-langchain.png',
      content: `
        <p>Era prostych chatbotów przemija. Dziś projektujemy autonomiczne agenty AI, które planują, rozumują i korzystają z zewnętrznych narzędzi. Wybór fundamentu dla takiego systemu to decyzja między stabilnością korporacyjną a elastycznością open-source. Porównajmy dwa najsilniejsze rozwiązania: Google Agent Development Kit (ADK) oraz duet LangChain/LangGraph.</p>

        <h3>Filozofia: Code-First kontra Grafy Stanowe</h3>
        <p>Główna różnica leży w podejściu do kontroli nad modelem:</p>
        <ul>
            <li><strong>Google ADK (Podejście Inżynierskie):</strong> Stawia na zasadę code-first. Logika agenta i narzędzia są definiowane bezpośrednio w kodzie, co ułatwia testowanie, typowanie i integrację CI/CD. To rozwiązanie dla tych, którzy cenią rygor klasycznej inżynierii oprogramowania.</li>
            <li><strong>LangChain/LangGraph (Podejście Elastyczne):</strong> Ewoluował z narzędzia do szybkiego prototypowania w stronę LangGraph – systemu opartego na stanowych grafach cyklicznych. Pozwala on budować złożone pętle rozumowania, gdzie agent może wracać do poprzednich kroków, by poprawić błędy.</li>
        </ul>

        <h3>Google ADK: Precyzyjna Orkiestracja i Ekosystem</h3>
        <p>ADK świetnie zarządza poziomem autonomii poprzez różne typy agentów:</p>
        <table class="table table-bordered my-4 text-white">
            <thead class="bg-dark">
                <tr>
                    <th>Typ Agenta</th>
                    <th>Charakterystyka</th>
                    <th>Zastosowanie</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>LLM Agent</td>
                    <td>Dynamiczny i kreatywny</td>
                    <td>Planowanie i rozumowanie.</td>
                </tr>
                <tr>
                    <td>Sequential</td>
                    <td>Pełny determinizm</td>
                    <td>Procesy krok po kroku (workflow).</td>
                </tr>
                <tr>
                    <td>Parallel</td>
                    <td>Praca równoległa</td>
                    <td>Szybka analiza wielu źródeł danych.</td>
                </tr>
                <tr>
                    <td>Loop</td>
                    <td>Iteracyjne pętle</td>
                    <td>Zadania powtarzalne do skutku.</td>
                </tr>
            </tbody>
        </table>
        <p><strong>Kluczowa zaleta:</strong> Choć zoptymalizowany pod Gemini i Google Cloud, ADK jest agnostyczny – dzięki LiteLLM obsłużysz nim także modele od OpenAI czy Anthropic.</p>

        <h3>Zarządzanie narzędziami: Jak uniknąć chaosu?</h3>
        <p>Gdy agent dostaje dostęp do 10+ narzędzi, pojawia się problem: koszty tokenów rosną, a precyzja wyboru spada. Jak radzą sobie z tym oba frameworki?</p>

        <h4>Strategie Google ADK:</h4>
        <ul>
            <li><strong>Toolsety i Filtrowanie:</strong> Grupowanie narzędzi i dynamiczne udostępnianie tylko tych, które są potrzebne w danej sesji.</li>
            <li><strong>Model Context Protocol (MCP):</strong> Natywne wsparcie dla "USB dla narzędzi AI" – pozwala łączyć się z zewnętrznymi serwerami udostępniającymi tysiące funkcji.</li>
            <li><strong>Metacognitive Prompting:</strong> Agent najpierw tworzy plan, a dopiero potem "wstrzykuje" do kontekstu definicje konkretnych narzędzi.</li>
        </ul>

        <h4>Strategie LangChain/LangGraph:</h4>
        <ul>
            <li><strong>Wzorzec Routera:</strong> System klasyfikuje zapytanie i kieruje je do wyspecjalizowanego sub-agenta z ograniczonym zestawem narzędzi (np. tylko do bazy danych).</li>
            <li><strong>Durable Execution:</strong> Dzięki "checkpointerom" stan agenta jest zapisywany w bazie (np. Redis). Jeśli system padnie, agent podejmie pracę dokładnie tam, gdzie przerwał.</li>
        </ul>

        <h3>Persystencja: Pamięć o użytkowniku</h3>
        <p><strong>ADK:</strong> Wykorzystuje SessionService i VertexAIMemoryBankService. Pozwala to nie tylko na zapis historii rozmowy w SQL, ale też na "pamiętanie" preferencji użytkownika między różnymi, oddalonymi w czasie sesjami.</p>
        <p><strong>LangGraph:</strong> Skupia się na trwałym zapisie stanu grafu. Każdy węzeł może modyfikować centralny obiekt State, co daje pełną kontrolę nad przepływem informacji.</p>

        <h3>Werdykt: Co wybrać?</h3>

        <h4>Wybierz Google ADK, jeśli:</h4>
        <ul>
            <li>Tworzysz rozwiązanie SaaS/Enterprise wewnątrz Google Cloud.</li>
            <li>Wymagasz silnego determinizmu (logika biznesowa nie może się zmieniać).</li>
            <li>Potrzebujesz natywnej i bezpiecznej integracji z Google Workspace (Gmail, Kalendarz).</li>
            <li>Cenisz czysty, testowalny kod ponad wizualne budowanie łańcuchów.</li>
        </ul>

        <h4>Wybierz LangChain/LangGraph, jeśli:</h4>
        <ul>
            <li>Stawiasz na szybkie prototypowanie i korzystasz z niszowych bibliotek open-source.</li>
            <li>Budujesz rozwiązanie Multi-cloud (nie chcesz przywiązania do jednego dostawcy).</li>
            <li>Twój proces wymaga skomplikowanych pętli zwrotnych i dynamicznego sterowania przepływem.</li>
            <li>Potrzebujesz zaawansowanej analityki ścieżek rozumowania (LangSmith).</li>
        </ul>

        <h3>Podsumowanie</h3>
        <p>Google ADK to "inżynierski młot" dla stabilnych systemów korporacyjnych, gdzie ryzyko błędu musi być minimalne. LangChain to "szwajcarski scyzoryk" dla innowatorów, którzy potrzebują maksymalnej elastyczności w eksperymentowaniu z nowymi paradygmatami AI.</p>
      `
    },
    {
      slug: 'szeptucha-szczegolowy-poradnik-dostepny',
      title: 'Szeptucha: Szczegółowy poradnik budowy asystenta głosowego już dostępny! 🛠️',
      date: 'February 16, 2026',
      excerpt: 'Jakiś czas temu podzieliłem się tutaj projektem „Szeptucha” – moim własnym narzędziem do notatek głosowych opartym na modelu Whisper od OpenAI. 🎙️ Post o tym, jak przestałem polegać na gotowych subskrypcjach...',
      tags: ['SztucznaInteligencja', 'Whisper', 'OpenAI', 'Python', 'Produktywność', 'Automatyzacja', 'Programowanie', 'BuildNotBuy'],
      image: 'assets/img/jpg/szeptucha-whisper.jpg',
      content: `
        <p>Jakiś czas temu podzieliłem się tutaj projektem „Szeptucha” – moim własnym narzędziem do notatek głosowych opartym na modelu Whisper od OpenAI. 🎙️</p>
        
        <p>Post o tym, jak przestałem polegać na gotowych subskrypcjach i napisałem własny system transkrypcji, odbił się szerokim echem (ponad 17 000 wyświetleń!). Zauważyłem, że temat budowania własnych, tanich narzędzi AI zamiast płacenia za drogie abonamenty bardzo Wam się spodobał.</p>
        
        <p>Dlatego postanowiłem pociągnąć ten wątek i przygotowałem coś konkretnego.</p>
        
        <p>Właśnie wrzuciłem na bloga szczegółowy poradnik, w którym krok po kroku opisuję, jak to rozwiązanie powstało „od kuchni”. Bez lania wody, same techniczne i praktyczne aspekty:</p>
        
        <ul>
            <li>✅ Jak wykorzystać model Whisper do błyskawicznej transkrypcji.</li>
            <li>✅ Jak spiąć wszystko prostym skryptem pod skrót klawiszowy.</li>
            <li>✅ Dlaczego przy moim użytkowaniu takie rozwiązanie jest ekonomicznie bezkonkurencyjne.</li>
        </ul>
        
        <p>Jeśli szukasz inspiracji do stworzenia własnego mikro-narzędzia, ten wpis jest dla Ciebie. 🛠️</p>
        
        <p>Link do poradnika znajdziesz tutaj: 👉 <a href="/blog/budowanie-wlasnego-asystenta-glosowego-szeptucha-python">Szeptucha - Szczegółowy Poradnik</a></p>
        
        <p>Dajcie znać w komentarzach, jakie inne narzędzia AI próbowaliście (lub chcielibyście) zastąpić własnymi skryptami!</p>
      `
    },
    {
      slug: 'budowanie-wlasnego-asystenta-glosowego-szeptucha-python',
      title: 'Budowanie własnego asystenta głosowego "Szeptucha" w Pythonie',
      date: 'February 15, 2026',
      excerpt: 'Wyobraź sobie narzędzie, które pozwala Ci dyktować notatki w dowolnym miejscu systemu Windows – w Wordzie, Notatniku, czy przeglądarce – za pomocą jednego skrótu klawiszowego. Takim narzędziem jest **Szeptucha**.',
      tags: ['Python', 'VoiceAssistant', 'OpenAI', 'Whisper', 'Automation', 'Tutorial'],
      image: 'assets/img/png/szeptucha-voice-assistant.png',
      content: `
        <p>Wyobraź sobie narzędzie, które pozwala Ci dyktować notatki w dowolnym miejscu systemu Windows – w Wordzie, Notatniku, czy przeglądarce – za pomocą jednego skrótu klawiszowego. Takim narzędziem jest <strong>Szeptucha</strong>.</p>

        <p>W tym poradniku przeanalizujemy kod źródłowy projektu "Szeptucha" i wyjaśnimy, jak zbudować własnego asystenta głosowego, który:</p>
        <ol>
            <li>Nagrywa Twój głos po naciśnięciu skrótu (np. Ctrl+Alt).</li>
            <li>Wyświetla eleganckie okno nagrywania "always-on-top".</li>
            <li>Transkrybuje mowę na tekst przy użyciu modelu <strong>OpenAI Whisper</strong> (przez API lub lokalnie).</li>
            <li>Automatycznie wkleja rozpoznany tekst w miejsce, gdzie znajduje się kursor.</li>
        </ol>

        <h2>Wymagania wstępne</h2>

        <p>Aby uruchomić lub zbudować taki projekt, potrzebujesz zainstalowanego Pythona (3.8+) oraz kilku kluczowych bibliotek:</p>

        <ul>
            <li><strong>PyAudio</strong>: Do obsługi mikrofonu i nagrywania dźwięku.</li>
            <li><strong>OpenAI</strong>: Do komunikacji z API Whisper (transkrypcja w chmurze).</li>
            <li><strong>Faster-Whisper</strong>: Do transkrypcji lokalnej (opcjonalnie, wymaga więcej RAM/GPU).</li>
            <li><strong>Pynput</strong>: Do obsługi globalnych skrótów klawiszowych i symulacji klawiatury.</li>
            <li><strong>Tkinter</strong>: Do stworzenia interfejsu graficznego (jest w standardowej bibliotece Pythona).</li>
            <li><strong>PyWin32</strong>: Do interakcji z oknami systemu Windows.</li>
        </ul>

        <p>Instalacja zależności:</p>
        <pre><code class="language-bash">pip install pyaudio openai pynput pyperclip pywin32 numpy
# Opcjonalnie dla lokalnego modelu:
pip install faster-whisper
</code></pre>

        <h2>Architektura Systemu</h2>

        <p>Projekt Szeptucha składa się z kilku niezależnych modułów, które współpracują ze sobą. Przeanalizujmy najważniejsze z nich.</p>

        <h3>1. Nagrywanie Dźwięku (audio_recorder.py)</h3>

        <p>Serce systemu to moduł odpowiedzialny za przechwytywanie dźwięku z mikrofonu. Wykorzystujemy bibliotekę <code>PyAudio</code> do strumieniowego pobierania danych i zapisywania ich do tymczasowego pliku WAV.</p>

        <p>Kluczowe fragmenty kodu:</p>

        <pre><code class="language-python">import pyaudio
import wave
import tempfile
import threading

class AudioRecorder:
    def __init__(self):
        self.audio = pyaudio.PyAudio()
        self.frames = []
        self.is_recording = False

    def start_recording(self):
        """Uruchamia nagrywanie w osobnym wątku."""
        self.is_recording = True
        self.frames = []
        threading.Thread(target=self._record_loop).start()

    def _record_loop(self):
        """Pętla nagrywania działająca w tle."""
        stream = self.audio.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True, frames_per_buffer=1024)
        while self.is_recording:
            data = stream.read(1024)
            self.frames.append(data)
        stream.stop_stream()
        stream.close()

    def stop_recording(self):
        """Zatrzymuje nagrywanie i zapisuje plik."""
        self.is_recording = False
        # ... zapisywanie self.frames do pliku WAV za pomocą biblioteki wave ...
        return "sciezka_do_pliku.wav"
</code></pre>

        <p>Dzięki użyciu osobnego wątku (<code>threading</code>), interfejs aplikacji nie zacina się podczas nagrywania.</p>

        <h3>2. Transkrypcja Mowy (transcription_service.py)</h3>

        <p>Szeptucha obsługuje dwa tryby: <strong>API</strong> (chmura) oraz <strong>Lokalny</strong>.</p>

        <ul>
            <li><strong>Tryb API</strong>: Wysyła plik audio do OpenAI. Jest szybki i lekki dla komputera, ale wymaga klucza API i połączenia z internetem.</li>
            <li><strong>Tryb Lokalny</strong>: Używa modelu <code>faster-whisper</code> uruchamianego na Twoim komputerze. Działa offline, ale wymaga mocniejszego sprzętu.</li>
        </ul>

        <p>Fragment implementacji obsługi API:</p>

        <pre><code class="language-python">from openai import OpenAI

class TranscriptionService:
    def __init__(self, api_key):
        self.client = OpenAI(api_key=api_key)

    def transcribe(self, file_path):
        """Wysyła plik do API OpenAI Whisper."""
        with open(file_path, "rb") as audio_file:
            transcript = self.client.audio.transcriptions.create(
                model="whisper-1",
                file=audio_file,
                language="pl" # Wymuszamy język polski
            )
        return transcript.text
</code></pre>

        <h3>3. Globalne Skróty Klawiszowe (hotkey_manager.py)</h3>

        <p>Aby aplikacja była użyteczna, musi działać "w tle" i reagować na skrót klawiszowy (np. Ctrl+Alt) niezależnie od tego, w jakim oknie aktualnie pracujemy. Do tego służy biblioteka <code>pynput</code>.</p>

        <pre><code class="language-python">from pynput import keyboard

class HotkeyManager:
    def __init__(self, callback):
        self.callback = callback # Funkcja wywoływana po wciśnięciu skrótu

    def start(self):
        """Uruchamia nasłuchiwanie skrótów."""
        # Definiujemy kombinację, np. '&lt;ctrl&gt;+&lt;alt&gt;'
        self.listener = keyboard.GlobalHotKeys({
            '&lt;ctrl&gt;+&lt;alt&gt;': self.callback
        })
        self.listener.start()
</code></pre>

        <h3>4. Interfejs Graficzny "Overlay" (recording_window.py)</h3>

        <p>Szeptucha wyświetla małe, zawsze widoczne okienko podczas nagrywania. Wykorzystujemy <code>Tkinter</code> z flagami <code>overrideredirect</code> (brak ramek systemowych) i <code>topmost</code> (zawsze na wierzchu).</p>

        <pre><code class="language-python">import tkinter as tk

class RecordingWindow:
    def show(self):
        self.window = tk.Toplevel()
        self.window.overrideredirect(True) # Brak paska tytułowego
        self.window.attributes('-topmost', True) # Zawsze na wierzchu
        
        # Rysowanie wizualizacji fali dźwiękowej na Canvas...
        self.canvas = tk.Canvas(self.window, bg='black')
        self.canvas.pack()
</code></pre>

        <p>Moduł ten zawiera również logikę rysowania animowanej fali dźwiękowej (waveform) w oparciu o głośność nagrywanego dźwięku.</p>

        <h3>5. Automatyczne Wklejanie Tekstu (text_processor.py)</h3>

        <p>Ostatni krok to wklejenie tekstu. Zamiast bawić się w skomplikowane API systemowe do wprowadzania tekstu, Szeptucha stosuje sprytny trik:</p>
        <ol>
            <li>Kopiuje rozpoznany tekst do schowka (<code>pyperclip</code>).</li>
            <li>Symuluje naciśnięcie kombinacji <code>Ctrl+V</code> (<code>pynput</code>).</li>
        </ol>

        <pre><code class="language-python">import pyperclip
from pynput.keyboard import Controller, Key

def paste_text(text):
    # 1. Kopiuj do schowka
    pyperclip.copy(text)
    
    # 2. Symuluj Ctrl+V
    keyboard = Controller()
    with keyboard.pressed(Key.ctrl):
        keyboard.press('v')
        keyboard.release('v')
</code></pre>

        <p>Dodatkowo, moduł ten sprawdza, czy aktywne okno w ogóle obsługuje wprowadzanie tekstu, analizując klasę okna za pomocą <code>win32gui</code>.</p>

        <h2>Podsumowanie</h2>

        <p>Szeptucha łączy kilka potężnych technologii w jedno proste narzędzie. Dzięki modularnej budowie łatwo można ją rozwijać, np. dodając obsługę innych modeli AI, tłumaczenie w czasie rzeczywistym czy komendy głosowe uruchamiające aplikacje.</p>

        <p>Cały kod źródłowy projektu Szeptucha jest świetnym przykładem, jak tworzyć praktyczne narzędzia desktopowe w Pythonie, integrujące AI z codzienną pracą.</p>

        <p><strong>Główne zalety takiego rozwiązania:</strong></p>
        <ul>
            <li><strong>Prywatność</strong> (w trybie lokalnym).</li>
            <li><strong>Uniwersalność</strong> (działa w każdym polu tekstowym).</li>
            <li><strong>Oszczędność czasu</strong> (dyktowanie jest szybsze niż pisanie).</li>
        </ul>

        <p>Zachęcam do eksperymentowania z kodem i dostosowania go do własnych potrzeb!</p>

        <h2>Kod źródłowy</h2>

        <p>Cały projekt jest dostępny na GitHubie: <a href="https://github.com/tomaszjader/szeptucha">https://github.com/tomaszjader/szeptucha</a>. Zapraszam do pobierania, testowania i gwiazdkowania!</p>
      `
    },
    {
      slug: 'jak-zbudowac-wlasny-system-rag',
      title: 'Jak zbudować własny system RAG? 🛠️',
      date: 'February 09, 2026',
      excerpt: 'Niedawno pokazywałem Wam, że mój blog zyskał nową funkcję – system RAG, który pozwala AI odpowiadać na pytania w oparciu o moje artykuły. Dziś czas zajrzeć pod maskę tej technologii.',
      tags: ['Python', 'RAG', 'ArtificialIntelligence', 'Qdrant', 'OpenAI', 'LLM', 'Programowanie', 'VectorDatabase', 'Wiedza'],
      image: 'assets/img/jpg/rag-source-of-truth.jpg',
      content: `
        <p>Niedawno pokazywałem Wam, że mój blog zyskał nową funkcję – system RAG, który pozwala AI odpowiadać na pytania w oparciu o moje artykuły. Dziś czas zajrzeć pod maskę tej technologii.</p>
        
        <img src="assets/img/jpg/rag-source-of-truth.jpg" alt="Meme: Spójrz na mnie. To ja jestem teraz źródłem prawdy dla LLM (dzięki RAG)" class="img-fluid my-4 rounded">

        <p>Zamiast ogólników, przygotowałem konkretny poradnik o tym, jak połączyć potęgę LLM z własną bazą wiedzy przy użyciu Pythona i bazy wektorowej Qdrant.</p>
        
        <p>W tym artykule na blogu pokazuję 3 kluczowe kroki:</p>
        <ul>
          <li><strong>Indeksowanie danych:</strong> Jak przetworzyć tekst na wektory i zapisać je w bazie Qdrant.</li>
          <li><strong>Wyszukiwanie semantyczne:</strong> Jak znaleźć w bazie fragmenty tekstu pasujące do znaczenia pytania użytkownika.</li>
          <li><strong>Generowanie odpowiedzi:</strong> Jak wykorzystać znaleziony kontekst, by model AI (np. GPT-4) odpowiadał precyzyjnie i bez halucynacji.</li>
        </ul>
        
        <p>To fundamenty, które pozwolą Ci stworzyć asystenta AI „czytającego” Twoje dokumenty.</p>
        
        <p>Dajcie znać, czy takie techniczne „deep dive’y” są dla Was przydatne! 👇</p>
      `
    },
    {
      slug: 'budowanie-wlasnego-systemu-rag-python',
      title: 'Budowanie własnego systemu RAG (Retrieval-Augmented Generation) w Pythonie',
      date: 'February 08, 2026',
      excerpt: 'Systemy RAG (Retrieval-Augmented Generation) łączą w sobie potęgę dużych modeli językowych (LLM) z własną bazą wiedzy. Dzięki temu możemy tworzyć asystentów AI, którzy odpowiadają na pytania w oparciu o specyficzne dane.',
      tags: ['RAG', 'Python', 'OpenAI', 'Qdrant', 'VectorDatabase', 'LLM', 'AI', 'Tutorial'],
      image: 'assets/img/png/rag-python-system.png',
      content: `
        <p>Systemy RAG (Retrieval-Augmented Generation) łączą w sobie potęgę dużych modeli językowych (LLM) z własną bazą wiedzy. Dzięki temu możemy tworzyć asystentów AI, którzy odpowiadają na pytania w oparciu o specyficzne dane, których model nie widział podczas treningu.</p>

        <p>W tym poradniku pokażę, jak zaimplementować kluczowe mechanizmy RAG przy użyciu Pythona, OpenAI API oraz bazy wektorowej Qdrant.</p>

        <h2>Wymagania wstępne</h2>
        <p>Zanim zaczniesz budować swój system RAG, upewnij się, że posiadasz zainstalowane następujące narzędzia oraz klucze dostępu:</p>
        <ul>
            <li><strong>Docker</strong>: Niezbędny do uruchomienia bazy wektorowej Qdrant w kontenerze.</li>
            <li><strong>Python</strong>: Język programowania, w którym napiszemy logikę aplikacji (zalecana wersja 3.8+).</li>
            <li><strong>Klucz API OpenAI</strong>: Niezbędny do generowania embeddingów oraz odpowiedzi modelu.</li>
        </ul>

        <h2>Uruchomienie Qdranta</h2>
        <p>Aby uruchomić bazę wektorową Qdrant, wykonaj poniższe polecenia w terminalu (wymagany Docker). Najpierw pobierz obraz:</p>
        <pre><code class="language-bash">docker pull qdrant/qdrant</code></pre>

        <p>Następnie uruchom kontener:</p>
        <pre><code class="language-bash">docker run -p 6333:6333 -p 6334:6334 \
    -v $(pwd)/qdrant_storage:/qdrant/storage \
    qdrant/qdrant</code></pre>

        <h2>1. Dodawanie wiedzy do bazy wektorowej</h2>
        <p>Pierwszym krokiem jest przetworzenie naszych danych tekstowych na wektory (tzw. embeddings) i zapisanie ich w bazie. Każdy fragment tekstu otrzymuje swoją reprezentację numeryczną, co pozwala na późniejsze wyszukiwanie semantyczne.</p>

        <p>Poniższy kod pokazuje funkcję <code>index_data</code>, która iteruje przez linie tekstu, generuje dla nich embeddingi i wysyła do Qdranta za pomocą funkcji <code>add_points</code>.</p>

        <pre><code class="language-python">
import hashlib
import requests

def add_points(url, json_data):
    """Wysyła punkty (wektory) do kolekcji w Qdrant."""
    response = requests.put(url=f"{url}/points", json=json_data)
    if response.status_code == 200:
        print("Punkty zostały dodane pomyślnie.")
    else:
        print(f"Błąd dodawania punktów: {response.text}")
    return response.text

def index_data(lines, url, client):
    """Indeksuje listę linii tekstu w bazie wektorowej."""
    for line in lines:
        # Tworzymy unikalne ID dla każdego punktu na podstawie treści
        point_id = hashlib.md5(line.encode()).hexdigest()
        
        # Generujemy wektor embeddingu (funkcja pomocnicza generate_embedding)
        vector = generate_embedding(client, line)
        
        json_data = {
            "points": [
                {
                    'id': point_id,
                    "payload": {'text': line},
                    "vector": vector
                }
            ]
        }
        add_points(url=url, json_data=json_data)
        </code></pre>

        <h2>2. Wyszukiwanie kontekstowe w bazie wektorowej</h2>
        <p>Gdy mamy już zaindeksowaną wiedzę, możemy ją przeszukiwać. Nie szukamy jednak po słowach kluczowych, ale po <em>znaczeniu</em> zapytania (podobieństwo wektorowe).</p>

        <p>Funkcja <code>search_collection_with_context</code> zamienia pytanie użytkownika na wektor, a następnie pyta bazę Qdrant o najbardziej pasujące fragmenty tekstu. Wyniki są łączone w jeden ciąg tekstowy, który posłuży jako kontekst dla AI.</p>

        <pre><code class="language-python">
def search_collection_with_context(url, query, client):
    """Wyszukuje najbardziej pasujące fragmenty tekstu dla danego zapytania."""
    # Zamieniamy pytanie użytkownika na wektor
    query_vector = generate_embedding(client, query)
    
    search_payload = {
        "vector": query_vector,
        "limit": 3,  # Pobieramy 3 najlepsze wyniki, aby zbudować szerszy kontekst
        "with_payload": True
    }
    
    response = requests.post(url=f'{url}/points/search', json=search_payload)
    
    if response.status_code == 200:
        results = response.json()
        # Łączymy znalezione fragmenty w jeden tekst kontekstu
        context = "\n".join([result['payload']['text'] for result in results['result']])
        return context
    else:
        print(f"Błąd wyszukiwania: {response.text}")
        return None
        </code></pre>

        <h2>3. Generowanie odpowiedzi z wykorzystaniem kontekstu (RAG)</h2>
        <p>Ostatnim etapem jest połączenie znalezionego kontekstu z zapytaniem użytkownika i przesłanie tego do modelu językowego (np. GPT-3.5 lub GPT-4).</p>

        <p>W funkcji <code>generate_answer_with_context</code> tworzymy prompt systemowy, który instruuje model, aby opierał się na dostarczonym kontekście. Dzięki temu odpowiedź jest precyzyjna i dotyczy naszych danych.</p>

        <pre><code class="language-python">
def generate_answer_with_context(client, query, context):
    """Generuje odpowiedź modelu AI w oparciu o znaleziony kontekst."""
    messages = [
        {
            "role": "system", 
            "content": "Jesteś pomocnym asystentem. Odpowiedz na pytanie użytkownika na podstawie dostarczonego kontekstu."
        },
        {
            "role": "user", 
            "content": f"Kontekst:\n{context}\n\nPytanie: {query}"
        }
    ]
    
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    
    return response.choices[0].message.content
        </code></pre>

        <h2>Podsumowanie</h2>
        <p>Powyższy kod stanowi fundament prostego systemu RAG. Cały proces zamyka się w pętli:</p>
        <ol>
            <li><strong>Indeksowanie</strong>: Tekst -> Embedding -> Baza Wektorowa.</li>
            <li><strong>Retrieval (Wyszukiwanie)</strong>: Pytanie -> Embedding -> Wyszukanie w bazie -> Kontekst.</li>
            <li><strong>Generation (Generowanie)</strong>: Kontekst + Pytanie -> LLM -> Odpowiedź.</li>
        </ol>

        <p>Mając te funkcje, możemy zbudować chatbota, który "czyta" nasze dokumenty i potrafi o nich rozmawiać.</p>

        <h2>Kod źródłowy</h2>
        <p>Cały przedstawiony kod jest dostępny w moim repozytorium na GitHubie: <a href="https://github.com/tomaszjader/RAG" target="_blank">tomaszjader/RAG</a>. Zachęcam do pobrania, testowania i rozwijania projektu!</p>
      `
    },
    {
      slug: 'rag-gpt4o-qdrant-assistant',
      title: '🚀 Od bazy wektorowej do inteligentnego asystenta – wdrożyłem RAG z wykorzystaniem GPT-4o!',
      date: 'February 01, 2026',
      excerpt: 'Ostatnio zastanawiałem się, jak nadać mojej bazie wektorowej drugie życie. Postanowiłem przejść od słów do czynów i rozbudować ją o możliwość interakcji z treściami. Efekt? Asystent AI w architekturze RAG.',
      tags: ['AI', 'RAG', 'GPT4o', 'OpenAI', 'LangChain', 'Qdrant', 'VectorDatabase', 'Python', 'FastAPI', 'Innovation', 'MachineLearning'],
      image: 'assets/img/png/rag-gpt4o.png',
      content: `
        <p>🚀 Od bazy wektorowej do inteligentnego asystenta – wdrożyłem RAG z wykorzystaniem GPT-4o!</p>
        
        <p>Ostatnio zastanawiałem się, jak nadać mojej bazie wektorowej drugie życie. Postanowiłem przejść od słów do czynów i rozbudować ją o możliwość interakcji z treściami.</p>
        
        <p>Efekt? Stworzyłem asystenta AI w architekturze RAG (Retrieval-Augmented Generation), który pozwala "rozmawiać" z moimi postami. Dzięki temu czytelnicy mogą błyskawicznie wyciągać konkretną wiedzę z archiwalnych treści.</p>
        
        <h4>Co potrafi to rozwiązanie?</h4>
        <ul>
            <li>Precyzyjnie odpowiada na pytania o technologie opisane w postach.</li>
            <li>Dzięki integracji z GPT-4o odpowiedzi są naturalne, merytoryczne i bardzo trafne.</li>
            <li>Pełna kontrola nad kontekstem: asystent bazuje wyłącznie na moich treściach – nie zmyśla, nie wychodzi poza ramy bloga.</li>
        </ul>

        <img src="assets/img/png/rag-gpt4o.png" alt="Meme: Baza wektorowa zwykła vs Baza wektorowa z LangChain i GPT-4o" class="img-fluid my-4 rounded">
        
        <h4>Mój tech-stack dla tego projektu:</h4>
        <ul>
            <li>🔹 <strong>OpenAI (GPT-4o)</strong> – jako "mózg" operacyjny i silnik rozumowania.</li>
            <li>🔹 <strong>LangChain</strong> – do orkiestracji agenta i przepływu danych.</li>
            <li>🔹 <strong>FastAPI</strong> – lekki i szybki backend.</li>
            <li>🔹 <strong>Qdrant</strong> – moja baza wektorowa, która trzyma wszystkie dane.</li>
        </ul>
        
        <p>Najbardziej cieszy mnie to, że system "wstał" niemal bezproblemowo za pierwszym razem. Zapraszam do testów – na moim blogu znajdziecie nowy dymek czatu, gotowy do rozmowy o moich artykułach!</p>
        
        <p>Jakie są Wasze doświadczenia z modelem GPT-4o w rozwiązaniach typu RAG? Zauważyliście dużą różnicę w jakości odpowiedzi względem starszych modeli? Chętnie podyskutuję w komentarzach! 👇</p>
      `
    },
    {
      slug: 'n8n-formularz-kontaktowy',
      title: 'Czy jako Frontendowiec męczy Cię konfigurowanie backendu tylko po to, by obsłużyć prosty formularz kontaktowy? 📩',
      date: 'January 25, 2026',
      excerpt: 'Ostatnio szukałem alternatywy dla gotowych rozwiązań typu EmailJS. Zazwyczaj wymagają one albo płatnej subskrypcji, albo stawiania dedykowanego serwera pocztowego. Pomyślałem: a co gdyby wykorzystać do tego n8n? 🤔',
      tags: ['n8n', 'automation', 'webdevelopment', 'frontend', 'nocode', 'javascript', 'selfhosted', 'productivity'],
      image: 'assets/img/png/n8n-form-meme.png',
      content: `
        <p>Czy jako Frontendowiec męczy Cię konfigurowanie backendu tylko po to, by obsłużyć prosty formularz kontaktowy? 📩</p>
        
        <p>Ostatnio szukałem alternatywy dla gotowych rozwiązań typu EmailJS. Zazwyczaj wymagają one albo płatnej subskrypcji, albo stawiania dedykowanego serwera pocztowego.</p>
        
        <p>Pomyślałem: a co gdyby wykorzystać do tego n8n? 🤔</p>
        
        <p>Przeszedłem od słów do czynów. Moje rozwiązanie działa już na produkcyjnej stronie i opiera się na prostym workflow:</p>
        
        <ol>
            <li>1️⃣ Webhook odbiera dane z formularza.</li>
            <li>2️⃣ Google Sheets zapisuje zgłoszenie w bazie.</li>
            <li>3️⃣ Noda Gmail wysyła automatyczne podziękowanie do klienta oraz powiadomienie do mnie.</li>
        </ol>
        
        <img src="assets/img/png/n8n-form-meme.png" alt="Meme: Konfigurowanie serwera pocztowego vs n8n do formularzy kontaktowych" class="img-fluid my-4 rounded">

        <h4>Dlaczego warto?</h4>
        <ul>
            <li>✅ <strong>Pełna kontrola:</strong> Nie zależysz od zewnętrznych dostawców i ich cenników.</li>
            <li>✅ <strong>Oszczędność:</strong> Przy własnej instancji n8n rozwiązanie jest darmowe (oszczędzasz ok. 9$ miesięcznie).</li>
            <li>✅ <strong>Skalowalność:</strong> Łatwo dodasz kolejne kroki, np. powiadomienie na Slacku.</li>
        </ul>
        
        <p>To prosta automatyzacja, która oszczędza mnóstwo frustracji przy konfiguracji.</p>
        
        <p>A Wy jakich narzędzi używacie do obsługi formularzy na landing page’ach? Stawiacie na gotowce, czy budujecie własne mikroserwisy? Dajcie znać w komentarzach! 👇</p>
      `
    },
    {
      slug: 'wyszukiwanie-semantyczne-qdrant-python-fastapi',
      title: 'Zainspirowałem się wyszukiwarką w "unknowNews" i postanowiłem stworzyć własne wyszukiwanie semantyczne',
      date: 'January 18, 2026',
      excerpt: 'Łatwo nie było, ale efekt końcowy daje mnóstwo satysfakcji! 🚀 Zamiast tradycyjnego szukania po słowach kluczowych, mój blog rozumie teraz intencje użytkownika.',
      tags: ['Python', 'VectorDatabase', 'Qdrant', 'FastAPI', 'SemanticSearch', 'AI', 'Programowanie', 'MachineLearning', 'WebDevelopment'],
      image: 'assets/img/png/semantic-search-meme.png',
      content: `
        <p>Zainspirowałem się wyszukiwarką w "unknowNews" i postanowiłem stworzyć własne wyszukiwanie semantyczne. Łatwo nie było, ale efekt końcowy daje mnóstwo satysfakcji! 🚀</p>
        
        <p>Zamiast tradycyjnego szukania po słowach kluczowych, mój blog rozumie teraz intencje użytkownika. Wpisujesz pytanie językiem naturalnym, a algorytm przeszukuje bazę wektorową i podaje 3 najbardziej trafne wpisy.</p>
        
        <h4>Jak to zbudowałem?</h4>
        <ul>
          <li><strong>Qdrant</strong> – jako silnik bazy wektorowej.</li>
          <li><strong>Python + FastAPI</strong> – do obsługi logiki i API.</li>
          <li><strong>ngrok</strong> – aby bezpiecznie wystawić usługę na zewnątrz.</li>
        </ul>
        
        <img src="assets/img/png/semantic-search-meme.png" alt="Meme: Wyszukiwanie tradycyjne vs semantyczne vs własna baza wektorowa" class="img-fluid my-4 rounded">

        <p>To była cenna lekcja pokory. Technologia potrafi dać w kość, zwłaszcza przy konfiguracji sieciowej i "wystawianiu na świat", ale warto było przez to przejść dla końcowego efektu.</p>
        
        <p>Zobacz jak to działa na żywo: <a href="https://tomaszjader.com/blog" target="_blank">https://tomaszjader.com/blog</a></p>
        
        <p>A Wy? Korzystacie już z wyszukiwania semantycznego w swoich projektach, czy zostajecie przy klasycznym SQL-owym LIKE? Dajcie znać w komentarzach!</p>
      `
    },
    {
      slug: 'agent-tomek-google-adk-automatyzacja-instagrama',
      title: 'Jak stworzyłem „Agenta Tomka" – asystenta AI do automatyzacji Instagrama i notatek, bazując na Google ADK.',
      date: 'January 17, 2026',
      excerpt: 'Udział w Kursie Umiejętności Jutra 2.0, zorganizowanym przez Google i SGH Warsaw School of Economics, oraz zdobycie certyfikatu potwierdzającego moje nowe kompetencje, zaowocowały pomysłem stworzenia własnego agenta AI.',
      tags: ['GoogleADK', 'Automatyzacja', 'Python', 'SztucznaInteligencja', 'ContentMarketing', 'Innowacje', 'TelegramBot', 'UmiejętnościJutra', 'AI'],
      image: 'assets/img/jpg/agent-tomek-google-adk.jpg',
      content: `
        <p>Jak stworzyłem „Agenta Tomka" – asystenta AI do automatyzacji Instagrama i notatek, bazując na Google ADK.</p>
        
        <p>Udział w Kursie Umiejętności Jutra 2.0, zorganizowanym przez Google i SGH Warsaw School of Economics, oraz zdobycie certyfikatu potwierdzającego moje nowe kompetencje, zaowocowały pomysłem stworzenia własnego agenta AI.</p>
        
        <p>Moim celem było zbudowanie wirtualnego asystenta, który potrafiłby publikować posty na Instagramie, tworzyć proste notatki na komputerze, a także wyszukiwać podstawowe informacje, takie jak pogoda.</p>
        
        <p>Zabrałem się do pracy. Finalnie, po wielu bojach, udało się ukończyć ten projekt i okiełznać krnąbrnego asystenta, którego nazwałem Agentem Tomkiem.</p>
        
        <p>Kluczowe rozwiązanie polega na wykorzystaniu Telegrama. Dzięki normalnej konwersacji jestem w stanie wydawać mu polecenia. Na przykład, przed publikacją posta na Instagramie, Agent Tomek pomaga mi stworzyć optymalne tagi i angażujący tytuł. Wszystko odbywa się w formie naturalnego dialogu, co uważam za dużo przyjemniejsze i szybsze niż korzystanie z natywnego interfejsu Instagrama.</p>
        
        <img src="assets/img/jpg/agent-tomek-google-adk.jpg" alt="Meme: Programista vs Agent Tomek - negocjacje" class="img-fluid my-4 rounded">

        <p>Najzabawniejszym aspektem projektu było testowanie. Początkowo Agent Tomek bywał bardzo uparty – nie chciał słuchać moich poleceń! Wiele razy musiałem go prosić, by wykonał proste zadanie, np. usunął niepotrzebną frazę z tytułu czy opublikował post. Zdarzało się, że musiałem ponawiać komendę nawet pięć razy! Choć problem został finalnie rozwiązany, te pierwsze, komiczne „negocjacje" z asystentem wspominam z największym sentymentem.</p>
        
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
      image: 'assets/img/jpg/hodowla-kur-balkon.jpg',
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
        
        <img src="assets/img/jpg/hodowla-kur-balkon.jpg" alt="Obrazek: Kury na balkonie" class="img-fluid my-4 rounded">

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
      image: 'assets/img/jpg/vibe-coding-success.jpg',
      content: `
        <p>✨ Moje pierwsze kroki w vibe codingu zakończyły się sukcesem! ✨</p>
        
        <p>Udało mi się stworzyć aplikację do śledzenia nawyków, idealnie dopasowaną do moich potrzeb. 🚀</p>
        
        <p>Cały proces był fascynującym doświadczeniem – pełnym wyzwań, nauki i nieoczekiwanych problemów.</p>
        
        <p>👉 Spotkałem się m.in. z:</p>
        <ul>
            <li>🔧 awarią wibracji po miesiącu działania,</li>
            <li>🎨 zniknięciem funkcjonalności po zmianie wyglądu na styl iOS.</li>
        </ul>
        
        <img src="assets/img/jpg/vibe-coding-success.jpg" alt="Meme: How it started vs How it's going with AI" class="img-fluid my-4 rounded">

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
      image: 'assets/img/jpg/android-dyslexia-app.jpg',
      content: `
        <p>💥 Moja Walka z Literówkami: Jak Dysleksja Popchnęła Mnie do Stworzenia Aplikacji na Androida</p>
        
        <p>Nie wiem, czy też tak macie, ale poprawianie literówek potrafi doprowadzić mnie do szału. Zwłaszcza gdy wiem, co chcę napisać… a ekran uparcie pokazuje coś innego. 😅</p>
        
        <p>Z mojej frustracji z dysleksją narodził się pomysł: 👉 stworzę aplikację, która sama poprawia błędy w tekście.</p>
        
        <p>Brzmi prosto? Tylko brzmi. 😅</p>
        
        <img src="assets/img/jpg/android-dyslexia-app.jpg" alt="Meme: Expectation vs Reality - Ja po skompilowaniu aplikacji po raz pierwszy vs Aplikacja: [crash sound]" class="img-fluid my-4 rounded">

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
      image: 'assets/img/jpg/n8n-programista-opinion.jpg',
      content: `
        <p>Od „Psa do Jeża” do Agenta Automatyzacji – Moja Prawda o N8N jako Programisty 🐾🦔</p>
        
        <p>Słyszałem wiele pozytywnych opinii o narzędziach low-code, które rzekomo pozwalają bardzo szybko stworzyć ciekawe projekty.</p>
        
        <p>Ale, powiedzmy to szczerze: jako programista, podchodziłem do tematu jak pies do jeża. Przerzucenie się na narzędzia wizualne, takie jak N8N, wydawało mi się stratą czasu w porównaniu do pisania czystego kodu.</p>
        
        <img src="assets/img/jpg/n8n-programista-opinion.jpg" alt="Meme: One does not simply connect n8n to telegram without https on local machine" class="img-fluid my-4 rounded">

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
      image: 'assets/img/jpg/weather-assistant-n8n.jpg',
      content: `
        <p>Jak w 5 minut stworzyć własnego Asystenta Pogodowego? 🌤️</p>
        
        <p>n8n to potężne narzędzie! Ostatnio szukałem pomysłu na kolejny mały projekt automatyzacyjny i postanowiłem rozwiązać swój wieczny problem: zapominanie o sprawdzeniu pogody.</p>
        
        <p>Udało mi się stworzyć prostą, ale efektywną automatyzację, która codziennie o 8:00 rano wysyła mi prognozę prosto na Telegram.</p>
        
        <img src="assets/img/jpg/weather-assistant-n8n.jpg" alt="Meme: Jak wstajesz rano i widzisz powiadomienie z Telegrama, ale Ty sam sobie wysłałeś to powiadomienie" class="img-fluid my-4 rounded">

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
      image: 'assets/img/jpg/gymtracker-vibe-coding.jpg',
      content: `
        <p>👨💻💪 Drugie podejście do vibe codingu, ale wreszcie się udało!</p>
        
        <p>Od dawna marzyłem o tym, żeby mieć własną aplikację do śledzenia postępów na siłowni. Za pierwszym razem – brak czasu i motywacji. Za drugim podejściem, już z vibe codingiem wspieranym przez AI i odrobiną uporu… i jest! 🚀</p>
        
        <p>👉 Tak powstał <strong>GymTracker</strong> – webowa aplikacja napisana w Angularze 20, z integracją z Google Sheets, która pozwala śledzić treningi, statystyki i postępy na wykresach.</p>
        
        <img src="assets/img/jpg/gymtracker-vibe-coding.jpg" alt="Meme: AI Fixing the bug vs Programista z debuggerem" class="img-fluid my-4 rounded">

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
      image: 'assets/img/jpg/autocenzura-vibe-coding.jpg',
      content: `
        <p>Autocenzura pod kontrolą: Czy Narzędzie Cenzurujące Słowa „Niewygodne” Ocali Twórców? 🤔</p>
        <p>Podejście do Vibe Codingu, numer 3.</p>

        <p>Od dawna zastanawiałem się nad rosnącym problemem: cenzurą algorytmiczną na platformach takich jak YouTube. Inspiracją do działania był jeden z odcinków podcastu „Na Wschód od Bliskiego Wschodu” Wojciecha Szewko. Postawiłem sobie za cel: stworzyć narzędzie, które chroni zasięgi twórców przed automatycznymi blokerami.</p>
        
        <p>Jaka była idea?</p>
        <p>Chciałem, aby narzędzie identyfikowało słowa "niewygodne" (takie jak np. „kurde”, które mogłoby zostać błędnie zinterpretowane) i automatycznie zastępowało je dźwiękiem cenzury. W ten sposób treść pozostaje nienaruszona merytorycznie, a twórca nie traci cennych wyświetleń i przychodów.</p>
        
        <img src="assets/img/jpg/autocenzura-vibe-coding.jpg" alt="Meme: Algorytm YouTube nie może ocenzurować słowa, jeśli nigdy go nie usłyszy" class="img-fluid my-4 rounded">

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
      image: 'assets/img/jpg/python-instagram-automation.jpg',
      content: `
        <p>Miałem ostatnio pomysł na mały projekt po godzinach – prostą automatyzację publikowania postów. 🚀</p>
        
        <p>Na początku próbowałem podejść do tematu przez oficjalną aplikację na platformie Meta, żeby połączyć się z Instagramem. Niestety, szybko się poddałem – proces konfiguracji okazał się bardziej skomplikowany, niż zakładałem.</p>
        
        <p>Drugie podejście zrobiłem w Pythonie – i tym razem się udało 🎉</p>
        
        <p>Bez tworzenia aplikacji w Meta, tylko przez symulację logowania w przeglądarce.</p>
        
        <img src="assets/img/jpg/python-instagram-automation.jpg" alt="Meme: To chociaż prosta automatyzacja - This is fine dog with fire" class="img-fluid my-4 rounded">

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
      image: 'assets/img/jpg/habits-automation.jpg',
      content: `
        <p>Zapominasz o dobrych nawykach? Kluczem jest automatyzacja! 🚀</p>
        
        <p>Wszyscy chcemy wprowadzać pozytywne zmiany, ale często zderzamy się z jednym problemem: zapominaniem.</p>
        
        <p>Moja własna walka z wdrożeniem nawyku wdzięczności była tego najlepszym przykładem. Nie chodziło o to, że nie miałem pomysłu na zmianę. Problem polegał na braku jasno zdefiniowanej, wymuszonej pory jej wykonania.</p>
        
        <img src="assets/img/jpg/habits-automation.jpg" alt="Meme: Ja vs Moje Nawyki vs Pilne Zadania" class="img-fluid my-4 rounded">

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
      image: 'assets/img/jpg/ai-journal.jpg',
      content: `
        <p>Zainspirowany wykładem Franciszek Bazyli Georgiew 高傅安 w ramach kursu Umiejętności Jutra, postanowiłem pójść o krok dalej i stworzyć własne narzędzie.</p>
        <p>Wierzę, że AI może realnie wspierać nas w codziennym rozwoju i refleksji nad sobą.</p>
        <p>Tak powstał projekt <strong>AI Journal</strong> – proste narzędzie do prowadzenia dziennika z pomocą sztucznej inteligencji, które w pełni realizuje tę ideę.</p>
        
        <img src="assets/img/jpg/ai-journal.jpg" alt="AI Journal Meme: Ja prowadzący dziennik vs AI Journal" class="img-fluid my-4 rounded">

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
      image: 'assets/img/jpg/ctrl-q-typo-fix.jpg',
      content: `
        <p>🚀 Mały skrypt, duża różnica!</p>
        
        <p>Ostatnio stworzyłem prosty skrypt, który pozwala jednym skrótem klawiszowym (CTRL+Q) poprawiać literówki w zaznaczonym tekście – nie zmieniając przy tym słów. Idealny dla osób z dysleksją lub tych, którzy często robią literówki.</p>
        
        <p>Działa w języku polskim i angielskim, a wszystko, czego potrzebujesz, to darmowy dostęp do Gemini od Google. Żadnych kosztów, a oszczędza mnóstwo czasu przy codziennym pisaniu.</p>
        
        <img src="assets/img/jpg/ctrl-q-typo-fix.jpg" alt="Before vs After Typon Fix - CTRL+Q" class="img-fluid my-4 rounded">

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
      image: 'assets/img/jpg/szeptucha-whisper.jpg',
      content: `
        <p>Z przyjemnością prezentuję projekt, który narodził się z frustracji i potrzeby. Nazwałem go Szeptucha.</p>
        
        <p>Inspiracją był post 🔥 Jakub Mrugalski, opisujący niedoskonałości domyślnie wbudowanych systemów do tworzenia notatek głosowych. Mowa tu o systemowym narzędziu Text To Speech w Windowsie, które nie działało do końca tak, jakbym tego oczekiwał.</p>
        
        <p>Postanowiłem stworzyć własne, skuteczne i ekonomiczne rozwiązanie: prosty program, który za pomocą skrótu klawiszowego automatycznie uruchamia transkrypcję mowy na tekst.</p>
        
        <img src="assets/img/jpg/szeptucha-whisper.jpg" alt="Meme: Używanie wbudowanej funkcji Text To Speech w Windowsie vs Zbudowanie własnej 'Szeptuchy'" class="img-fluid my-4 rounded">

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
      image: 'assets/img/jpg/switomir-n8n.jpg',
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
        
        <img src="assets/img/jpg/switomir-n8n.jpg" alt="Świtomir n8n workflow" class="img-fluid my-4 rounded">
        
        <p>A Ty, co ostatnio zautomatyzowałeś w n8n? Podziel się swoim projektem w komentarzu!</p>
      `
    },
    {
      slug: 'second-brain-n8n-ai-agent',
      title: 'Jak połączyć Second Brain z N8N i AI, by stworzyć Osobistego Agenta do Burzy Mózgów?',
      date: 'January 15, 2026',
      excerpt: 'Ostatnio zainspirował mnie Second Brain, czyli idea Drugiego Mózgu. Zamiast budować kolejny system do notatek, pomyślałem: dlaczego by nie dać „pamięci” mojemu agentowi do automatyzacji w N8N?',
      tags: ['SecondBrain', 'Automatyzacja', 'N8N', 'AI', 'Produktywność', 'LowCode', 'GoogleDocs', 'ContentMarketing'],
      image: 'assets/img/jpg/second-brain-n8n.jpg',
      content: `
        <p>Ostatnio zainspirował mnie Second Brain, czyli idea Drugiego Mózgu, prezentowana na wydarzeniu Mindstone prowadzonym przez Kamila Dąbrowska. Zamiast budować kolejny system do notatek, pomyślałem: dlaczego by nie dać „pamięci” mojemu agentowi do automatyzacji w N8N?</p>
        
        <p>Efekt? Stworzyłem osobistego asystenta do burzy mózgów, który faktycznie zna moje cele, priorytety i tożsamość. To krok dalej niż zwykłe promptowanie.</p>
        
        <img src="assets/img/jpg/second-brain-n8n.jpg" alt="Meme: Agent AI używa Twoich celów z Second Brain" class="img-fluid my-4 rounded">
        
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
      image: 'assets/img/jpg/mem2.jpg',
      content: `
        <p>Zauważyłem u siebie dziwną zależność – jestem najbardziej zdyscyplinowany, gdy mój kalendarz pęka w szwach. Gdy przychodzi wolny weekend, często dopada mnie paraliż decyzyjny i czas „przecieka mi przez palce”.</p>
        
        <p>Zamiast z tym walczyć, postanowiłem to zautomatyzować. 🤖</p>
        
        <img src="assets/img/jpg/mem2.jpg" alt="Meme: Ja buduję system n8n żeby zaplanować spacer" class="img-fluid my-4 rounded">

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
      image: 'assets/img/jpg/mem1.jpg',
      content: `
        <p>Kontynuując rozwój mojej strony-portfolio, zdecydowałem się na wdrożenie sekcji blogowej. Moim celem jest nie tylko prezentacja gotowych projektów, ale przede wszystkim dokumentowanie procesu ich powstawania i pogłębianie technicznych detali.</p>
        
        <p>Co udało mi się zaimplementować?</p>
        
        <h4>Architektura:</h4>
        <p>Projekt oparty na Angularze i TypeScript, wykorzystujący arkusze stylów SCSS.</p>
        
        <h4>Zarządzanie treścią:</h4>
        <p>Posty przechowywane są w czystym formacie JSON. To proste, ale skuteczne rozwiązanie pozwoliło mi na łatwe wdrożenie pełnej wielojęzyczności strony.</p>
        
        <h4>User Experience:</h4>
        <p>Dodałem funkcję wyszukiwania oraz dynamicznego filtrowania postów po tagach.</p>
        
        <img src="assets/img/jpg/mem1.jpg" alt="Meme: Kiedy w końcu zaimplementujesz wielojęzyczność i wyszukiwanie" class="img-fluid my-4 rounded">

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
      image: 'assets/img/jpg/n8n-meme.jpg',
      content: `
        <p>Przez długi czas zmagałem się z jednym problemem: jak utrzymać nawyk nauki, gdy wieczorem brakuje już sił?</p>
        <p>Moje trzy filary – słuchanie, mówienie i powtórki w Anki – często lądowały na samym końcu listy "to-do". Robiłem je tuż przed snem, byle tylko odhaczyć punkt w kalendarzu. Efekt? Mała skuteczność i poczucie winy.</p>
        <p>Postanowiłem to zmienić, wykorzystując n8n.</p>
        
        <img src="assets/img/jpg/n8n-meme.jpg" alt="Meme: Ja myślący że mam ochotę na angielski vs mój workflow w n8n" class="img-fluid my-4 rounded">

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
      image: 'assets/img/jpg/results.jpg',
      content: `
        <p>Dziś nietypowo, bo czas na krótkie podsumowanie roku. Rok temu zacząłem dzielić się swoimi perypetiami przy hobbystycznych projektach.</p>
        
        <p>Efekt?</p>
        
        <img src="assets/img/jpg/results.jpg" alt="Statystyki podsumowujące rok" class="img-fluid my-4 rounded">

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
    const url = this.isDevMode()
      ? "/search"
      : "https://search.tomaszjader.com/search";

    const payload = {
      query: query,
      limit: limit
    };
    return this.http.post<any>(url, payload);
  }

  private isDevMode(): boolean {
    return !window.location.hostname.includes('tomaszjader.com') &&
      !window.location.hostname.includes('netlify.app');
  }
}
