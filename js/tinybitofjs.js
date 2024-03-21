// SLIDERS VOOR DE GROTE VAN HET VUURWERK
const groteInnerring = document.getElementById('grote-innerring');
const groteInnerboom = document.getElementById('grote-innerboom');
const groteOuterboom = document.getElementById('grote-outerboom');

// SLIDERS VOOR DE DIKTE VAN HET VUURWERK
const dikteInnerboom = document.getElementById('Dikte-innerboom');
const dikteOuterboom = document.getElementById('Dikte-outerboom');

// SLIDERS VOOR DE VERTE VAN HET MIDDEN
const verteInnerboom = document.getElementById('Verte-innerboom');
const verteOuterboom = document.getElementById('Verte-outerboom');

// Functie om de waarde van de range sliders in te stellen als custom properties
function setCustomProperty() {
    // SLIDERS VOOR DE GROTE VAN HET VUURWERK
    const innerringValue = groteInnerring.value;
    const innerboomValue = groteInnerboom.value;
    const outerboomValue = groteOuterboom.value;

    // SLIDERS VOOR DE GROTE VAN HET VUURWERK
    const dikteInnerboomValue = dikteInnerboom.value;
    const dikteOuterboomValue = dikteOuterboom.value;

    // SLIDERS VOOR DE VERTE VAN HET VUURWERK
    const verteInnerboomValue = verteInnerboom.value;
    const verteOuterboomValue = verteOuterboom.value;

    // SLIDERS VOOR DE GROTE VAN HET VUURWERK
    document.documentElement.style.setProperty('--inner-ring-width', `${innerringValue}px`);
    document.documentElement.style.setProperty('--inner-boom-height', `${innerboomValue}px`);
    document.documentElement.style.setProperty('--outer-boom-height', `${outerboomValue}px`);

    // SLIDERS VOOR DE DIKTE VAN HET VUURWERK
    document.documentElement.style.setProperty('--inner-boom-width', `${dikteInnerboomValue}px`);
    document.documentElement.style.setProperty('--outer-boom-width', `${dikteOuterboomValue}px`);

    // SLIDERS VOOR DE VERTE VAN HET MIDDEN
    document.documentElement.style.setProperty('--inner-boom-translateY', `-${verteInnerboomValue}px`);
    document.documentElement.style.setProperty('--outer-boom-translateY', `-${verteOuterboomValue}px`);
    
}

// Roep de functie aan wanneer de waarde van de range sliders verandert
groteInnerring.addEventListener('input', setCustomProperty);
groteInnerboom.addEventListener('input', setCustomProperty);
groteOuterboom.addEventListener('input', setCustomProperty);
dikteInnerboom.addEventListener('input', setCustomProperty);
dikteOuterboom.addEventListener('input', setCustomProperty);
verteInnerboom.addEventListener('input', setCustomProperty);
verteOuterboom.addEventListener('input', setCustomProperty);

// Roep de functie aan bij het laden van de pagina om de initiële waarden in te stellen
setCustomProperty();
