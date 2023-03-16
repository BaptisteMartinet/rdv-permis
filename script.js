const Millisecond = 1;
const Seconde = Millisecond * 1000;
const Minute = Seconde * 60;

const FetchingIntervalMs = 10 * Minute;
const CountyCode = '077';

setInterval(async () => {
  const slots = await fetch(`https://candidat.permisdeconduire.gouv.fr/api/v1/candidat/creneaux?code-departement=${CountyCode}`).then(data => data.json()).catch((e => console.error(e)));
  const now = new Date();
  console.info(now, slots);
  localStorage.setItem(now.getDate().toString(), slots?.toString());
}, FetchingIntervalMs);

console.info('Fetching slots...');
