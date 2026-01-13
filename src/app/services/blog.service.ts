import { Injectable } from '@angular/core';

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

  getPosts(): BlogPost[] {
    return this.posts;
  }

  getPostBySlug(slug: string): BlogPost | undefined {
    return this.posts.find(post => post.slug === slug);
  }
}
