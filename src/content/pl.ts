export const brand = {
  name: 'Heliora',
  tagline: 'Inżynieria komfortu w domu',
};

export const contacts = {
  office: { label: 'Biuro', phone: '+48 123 456 789', email: 'biuro@heliora.example' },
  hvac: { label: 'HVAC – Anna Wiśniewska', phone: '+48 123 456 780', email: 'hvac@heliora.example' },
  supervision: { label: 'Nadzór – Marek Zieliński', phone: '+48 123 456 781', email: 'nadzor@heliora.example' },
};

export const nav = [
  { href: '#uslugi', label: 'Usługi' },
  { href: '#salon', label: 'Salon' },
  { href: '#cennik', label: 'Cennik' },
  { href: '#kontakt', label: 'Kontakt' },
];

export const hero = {
  title: 'Komfort w domu przez cały rok.',
  text: 'Projektujemy, montujemy i serwisujemy klimatyzację, wentylację, pompy ciepła i fotowoltaikę. Warszawa i okolice.',
  primaryCta: 'Wyślij zapytanie',
  secondaryCta: 'Zadzwoń',
};

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, '')}`;

export const stripItems = [
  'Klimatyzacja',
  'Wentylacja i rekuperacja',
  'Pompy ciepła',
  'Fotowoltaika',
  'Kostka brukowa i tarasy',
  'Nadzór budowlany',
];

export const services = [
  { id: 'klimatyzacja', title: 'Klimatyzacja', text: 'Dobór, montaż i serwis klimatyzacji do domów i mieszkań.' },
  { id: 'rekuperacja', title: 'Wentylacja i rekuperacja', text: 'Wentylacja z odzyskiem ciepła, czyste powietrze w domu i niższe straty energii.' },
  { id: 'pompy', title: 'Pompy ciepła', text: 'Instalacja i serwis pomp ciepła do ogrzewania domu.' },
  { id: 'fotowoltaika', title: 'Fotowoltaika', text: 'Instalacje fotowoltaiczne dla domów jednorodzinnych.' },
  { id: 'kostka', title: 'Kostka brukowa i tarasy', text: 'Kostka brukowa i tarasy. Wzory obejrzysz w naszym salonie.' },
  { id: 'nadzor', title: 'Nadzór budowlany', text: 'Nadzór nad przebiegiem budowy, prowadzony przez naszego inspektora.' },
] as const;

export type ServiceId = (typeof services)[number]['id'];

export const financing = {
  eyebrow: 'Dofinansowanie',
  title: 'Czyste Powietrze i termomodernizacja',
  text: 'Pompa ciepła, fotowoltaika czy wentylacja z odzyskiem ciepła mogą kwalifikować się do dofinansowania z programu Czyste Powietrze. Pomagamy dobrać urządzenia do domu. Warunki i kwoty dotacji określa program.',
  cta: 'Zapytaj o dofinansowanie',
};

export const showroom = {
  eyebrow: 'Salon wystawowy',
  title: 'Zobacz kostkę i tarasy na żywo',
  text: 'Przyjedź do naszego salonu i obejrzyj próbki materiałów. Porozmawiamy o Twoim projekcie.',
  address: ['ul. Przykładowa 12', 'Warszawa'],
  hours: [
    { days: 'Poniedziałek – piątek', time: '8:30 – 18:00' },
    { days: 'Sobota', time: '10:00 – 14:00' },
  ],
  mapHref: 'https://www.google.com/maps/search/?api=1&query=Warszawa',
  mapLabel: 'Wyznacz trasę',
};

export const pricing = {
  eyebrow: 'Cennik serwisu',
  title: 'Przejrzyste ceny serwisu',
  note: 'Przykładowe ceny serwisu. Filtry do centrali wyceniamy osobno.',
  rows: [
    { service: 'Serwis klimatyzacji, 1 urządzenie', price: '240 zł' },
    { service: 'Serwis klimatyzacji, 2 urządzenia', price: '420 zł' },
    { service: 'Serwis klimatyzacji, 3 urządzenia', price: '590 zł' },
    { service: 'Każde kolejne urządzenie klimatyzacji', price: '+120 zł' },
    { service: 'Serwis centrali wentylacyjnej do 600 m³/h', price: '320 zł' },
    { service: 'Serwis pompy ciepła', price: '480 zł' },
  ],
};

export const form = {
  eyebrow: 'Kontakt',
  title: 'Opisz, czego potrzebujesz',
  text: 'Odpowiemy możliwie szybko. Możesz też po prostu zadzwonić.',
  labels: { name: 'Imię i nazwisko', email: 'E-mail', phone: 'Telefon', service: 'Usługa', message: 'Wiadomość' },
  servicePlaceholder: 'Wybierz usługę',
  consent: 'Wyrażam zgodę na przetwarzanie moich danych w celu odpowiedzi na zapytanie (zgoda).',
  submit: 'Wyślij zapytanie',
  sending: 'Wysyłanie…',
  successTitle: 'Dziękujemy za wiadomość',
  successText: 'Odezwiemy się najszybciej, jak to możliwe.',
  sendError: 'Nie udało się wysłać wiadomości. Spróbuj ponownie lub zadzwoń do nas.',
  demoNote: 'Wersja demonstracyjna: formularz nie wysyła jeszcze wiadomości.',
  errors: {
    name: 'Podaj imię i nazwisko.',
    emailRequired: 'Podaj adres e-mail.',
    emailInvalid: 'Podaj poprawny adres e-mail.',
    service: 'Wybierz usługę.',
    message: 'Napisz kilka słów o swoim zapytaniu.',
    consent: 'Zgoda jest wymagana.',
  },
};

export const concept = 'Projekt koncepcyjny. Firma, dane kontaktowe i ceny są fikcyjne, zdjęcia pochodzą z Unsplash.';
export const hours = 'Pon.–pt. 8:30–18:00, sob. 10:00–14:00';
