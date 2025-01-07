import OpenAI from 'openai';

class ProduitAI {
  constructor(apiKey) {
    this.openai = new OpenAI({
      apiKey: apiKey
    });
  }

  async contenu(urls) {
    let messages = [
        {
            role: "user",
            content: [
                {
                    type: "text",
                    text: "Pour un boutique en ligne, créer un titre, une description et un prix pour le produit en analysant les photos. La réponse doit être juste le titre, la description et le prix sous forme de JSON avec les champs suivants : {titre: 'titre', descriptif: 'descriptif', categorie: 'categorie', emojis: ['emoji1', 'emoji2'], prix: 'prix (format number sans les centimes)'}. il ne doit pas y avoir de balise de code markdown."
                },
            ],
        },
    ];
    
    urls.forEach(url => {
        messages[0].content.push({
            type: "image_url",
            image_url: {
                url: url,
            },
        });
    });

    const completion = await this.openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: messages,
        max_tokens: 300,
        response_format: { type: "json_object" },
    });

    // Convertir la réponse en objet JSON
    try {
        const response = JSON.parse(completion.choices[0].message.content);
        response.url = urls;
        response.json = true;

        return response;
    } catch (error) {
        const response = {details: completion.choices[0].message.content};
        response.url = urls;
        response.json = false;
        return response;
    }
}
}

export default ProduitAI; 