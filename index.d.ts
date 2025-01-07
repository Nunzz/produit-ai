declare module 'produit-ai' {
  interface ProduitResponse {
    titre: string;
    descriptif: string;
    prix: number;
    url?: string[];
    json?: boolean;
  }

  class ProduitAI {
    constructor(apiKey: string);
    
    /**
     * Génère une description structurée d'un produit à partir d'URLs d'images
     * @param urls - Tableau d'URLs des images du produit à analyser
     * @returns Une promesse contenant les informations structurées du produit
     */
    contenu(urls: string[]): Promise<ProduitResponse>;
  }

  export default ProduitAI;
} 
