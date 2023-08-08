/**
 * Función que devuelve una carta como elemento HTML
 * @param {String} carta carta que se va a dibujar
 * @return {HTMLElement}
 */
export const crearCarta = (carta) => {

    if(!carta) throw new Error('La carta es un argumento obligatorio');
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}