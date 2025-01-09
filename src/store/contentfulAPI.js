import { createClient } from 'contentful';

// Configura il client di Contentful
const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

// Funzione per recuperare le traduzioni
export const fetchTranslations = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'translationEN', // Sostituisci con il content type corretto
    });

    // Mappa i dati in un formato utile
    const translations = response.items.reduce((acc, item) => {
      acc[item.fields.slug] = item.fields.json;
      return acc;
    }, {});

    return translations;
  } catch (error) {
    throw new Error(`Contentful API error: ${error.message}`);
  }
};
