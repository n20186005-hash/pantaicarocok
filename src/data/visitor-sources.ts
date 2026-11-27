import type { Lang } from './content';

// Dated publications support context; current services are checked with local staff.
export const visitorSources = {
  coast: { url: 'https://berita.pesisirselatankab.go.id/berita/detail/pemerintah-kabupaten-pesisir-selatan-bangun-pagar-pembatas-di-pantai-carocok-painan', id: 'Pemerintah Pesisir Selatan · kawasan Carocok · 13 November 2025', en: 'Pesisir Selatan government · Carocok area · 13 November 2025' },
  island: { url: 'https://berita.pesisirselatankab.go.id/berita/detail/pulau-cingkuak-objek-wisata-nan-indah-miliki-nilai-sejarah', id: 'Pemerintah Pesisir Selatan · Cingkuak dan Batu Kereta · 16 Agustus 2020', en: 'Pesisir Selatan government · Cingkuak and Batu Kereta · 16 August 2020' },
  transport: { url: 'https://disparpora.pesisirselatankab.go.id/news/pantai-carocok-painan-pesisir-selatan', id: 'Dinas Pariwisata · lokasi dan jarak dari Padang · 3 Desember 2018', en: 'Tourism office · location and distance from Padang · 3 December 2018' },
  tickets: { url: 'https://www.puskesmaspasarbaru.pesisirselatankab.go.id/penduduk/file/PERDA_PDRD_NOMOR_9_TAHUN_20231.pdf', id: 'Perda Pesisir Selatan No. 9/2023 · Lampiran XI · tarif masuk Carocok', en: 'Pesisir Selatan Regulation No. 9/2023 · Annex XI · Carocok admission rates' },
  payment: { url: 'https://berita.pesisirselatankab.go.id/berita/detail/digitalisasi-retribusi-carocok-pariwisata-pessel-bangkit-dan-kian-tertata', id: 'Pemerintah Pesisir Selatan · retribusi · 30 Maret 2026', en: 'Pesisir Selatan government · ticketing · 30 March 2026' },
  food: { url: 'https://berita.pesisirselatankab.go.id/berita/detail/makanan-pinukuik-mesti-dilestarikan-dan-diperkenalkan-pada-setiap-even-dan-pameran', id: 'Pemerintah Pesisir Selatan · pinukuik · 8 Agustus 2019', en: 'Pesisir Selatan government · pinukuik · 8 August 2019' },
  hills: { url: 'https://pesisirselatankab.go.id/berita/libur-panjang-pantai-carocok-ramai-pengunjung', id: 'Pemerintah Pesisir Selatan · laporan lama Carocok dan Langkisau', en: 'Pesisir Selatan government · historical Carocok and Langkisau report' },
  stays: { url: 'https://berita.pesisirselatankab.go.id/berita/detail/rumah-singgah-kampung-jao-di-carocok-painan--miliki-pelayanan', id: 'Pemerintah Pesisir Selatan · akomodasi Kampung Jao · 2018', en: 'Pesisir Selatan government · Kampung Jao accommodation · 2018' },
};
export function topicContext(slug: string, group: string, lang: Lang) {
  const keys: (keyof typeof visitorSources)[] = ['coast'];
  if (['tiket-dan-biaya', 'wisata-hemat', 'parkir-dan-pintu-masuk', 'kunjungan-keluarga'].includes(slug)) keys.push('tickets', 'payment');
  if (['dari-padang', 'dari-pusat-painan', 'area-menginap', 'penginapan-carocok'].includes(slug)) keys.push('transport');
  if ((group === 'pulau' && !slug.includes('langkisau')) || slug.includes('cingkuak') || slug === 'foto-sunset') keys.push('island');
  if (slug.includes('langkisau')) keys.push('hills');
  if (slug.includes('menginap') || slug.includes('penginapan')) keys.push('stays');
  if (['oleh-oleh', 'makan-di-carocok', 'kuliner-painan', 'sarapan', 'jajanan-dan-snack'].includes(slug)) keys.push('food');
  const place = slug.includes('cingkuak') ? 'Pulau Cingkuak, Painan' : slug.includes('langkisau') ? 'Bukit Langkisau, Painan' : slug === 'pulau-batu-kareta' ? 'Pulau Batu Kereta, Pantai Carocok Painan' : group === 'makan' ? 'Painan, Pesisir Selatan' : 'Pantai Carocok, Painan';
  return { place, map: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`, sources: keys.map(key => ({ label: visitorSources[key][lang], url: visitorSources[key].url })) };
}
