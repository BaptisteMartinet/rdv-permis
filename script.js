const Millisecond = 1;
const Seconde = Millisecond * 1000;
const Minute = Seconde * 60;

const FetchingIntervalMs = 2 * Minute;
const CountyCodes = ['001', '002', '003', '004', '005', '006', '007', '008', '009', '010', '011', '012', '013', '014', '015', '016', '017', '018', '019', '021', '022', '023', '024', '025', '026', '027', '028', '029', '02A', '02B', '030', '031',  '032', '033', '034', '035', '036', '037', '038', '039', '040', '041', '042', '043', '044', '045', '046', '047', '048', '049', '050', '051', '052', '053', '054', '055', '056', '057', '058', '059', '060', '061', '062', '063', '064', '065', '066', '067', '068', '069', '070', '071', '072', '073', '074', '075', '076', '077', '078', '079', '080', '081', '082', '083', '084', '085', '086', '087', '088', '089', '090', '091', '092', '093', '094', '095', '971', '972', '973', '974', '976'];

let idx = 0;
setInterval(async () => {
  const countyCode = CountyCodes[idx];
  const slots = await fetch(`https://candidat.permisdeconduire.gouv.fr/api/v1/candidat/creneaux?code-departement=${countyCode}`).then(data => data.json()).catch((e => console.error(e)));
  const now = new Date();
  console.info(`[${countyCode}] (${now.toLocaleString()})`, slots);
  idx = (idx + 1) % CountyCodes.length;
}, FetchingIntervalMs);
