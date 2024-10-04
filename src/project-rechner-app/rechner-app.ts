const aufschlagen = document.querySelector('#aufschlagen') as HTMLInputElement;
const abziehen = document.querySelector('#abziehen') as HTMLInputElement;
const vatRate19 = document.querySelector('.vat__rate__19') as HTMLInputElement;
const vatRate7 = document.querySelector('.vat__rate__7') as HTMLInputElement;
const nettoZuBrutto = document.querySelector('.nettoZuBrutto') as HTMLElement;
const nettoZuBruttoResult = document.querySelector('.nettoZuBrutto__result') as HTMLElement;
const button = document.querySelector('button') as HTMLElement;
const toggleTitle = document.querySelector('.toggle__title') as HTMLElement;
const toggleResult = document.querySelector('.toggle__result') as HTMLElement;

if(
    aufschlagen && 
    abziehen && 
    vatRate19 && 
    vatRate7 && 
    nettoZuBrutto && 
    nettoZuBruttoResult &&
    button
) {
    abziehen.addEventListener('click', () => {
        toggleTitle.innerHTML = 'Bruttobetrag (Preis inkliusive Mehrwertsteuer) in Euro<span class="required">*</span>'
        toggleResult.textContent = 'Nettobetrag';
    })
    aufschlagen.addEventListener('click', () => {
        toggleTitle.innerHTML = 'Nettobetrag (Preis ohne Mehrwertsteuer) in Euro<span class="required">*</span>'
        toggleResult.textContent = 'Bruttobetrag (Endpreis)';
    })
    button.addEventListener('click', () => {
        const nettobetrag = document.querySelector('#nettobetrag') as HTMLInputElement;
        const vat = document.querySelector('.vat')as HTMLElement;
        const grossAmount = document.querySelector('.gross-amount') as HTMLElement;
        const adjustedUserInput: number = Number(nettobetrag.value.replace(',', '.'));
        
        switch(true) {
            case aufschlagen.checked:
                if(vatRate19.checked) {
                    const vatResult: number = adjustedUserInput * 0.19;
                    const grossAmountResult: number = adjustedUserInput + vatResult;
                    vat.textContent = `${vatResult.toFixed(2)} €`;
                    grossAmount.textContent = `${grossAmountResult.toFixed(2)} €`;
                } else if(vatRate7.checked) {
                    const vatResult: number = adjustedUserInput * 0.07;
                    const grossAmountResult: number = adjustedUserInput + vatResult;
                    vat.textContent = `${vatResult.toFixed(2)} €`;
                    grossAmount.textContent = `${grossAmountResult.toFixed(2)} €`;
                }
                break;
            case abziehen.checked:
                if(vatRate19.checked) {
                    const vatResult: number = (adjustedUserInput / 1.19) * 0.19;
                    const grossAmountResult: number = adjustedUserInput - vatResult;
                    vat.textContent = `${vatResult.toFixed(2)} €`;
                    grossAmount.textContent = `${grossAmountResult.toFixed(2)} €`;
                } else if(vatRate7.checked) {
                    const vatResult: number = (adjustedUserInput / 1.19) * 0.07;
                    const grossAmountResult: number = adjustedUserInput - vatResult;
                    vat.textContent = `${vatResult.toFixed(2)} €`;
                    grossAmount.textContent = `${grossAmountResult.toFixed(2)} €`;
                }
                break;
            default: console.log('Bitte, wählen Sie die Optionen für die Berechnung.');
        }
    })
}