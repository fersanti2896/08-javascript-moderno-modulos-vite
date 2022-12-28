
/**
 * Función que pide una carta del deck
 * @param {Array<string>} deck Ejemplo: ['C','D','H','S']
 * @returns {string} Devuelve una carta del deck
 */

export const pedirCarta = ( deck ) => {
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    
    const carta = deck.pop();

    return carta;
}