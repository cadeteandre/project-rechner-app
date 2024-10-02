const form = document.querySelector('.form');
const aufschlagen = document.querySelector('#aufschlagen') as HTMLInputElement;
const abziehen = document.querySelector('#abziehen') as HTMLInputElement;
const nettobetragTitle = document.querySelectorAll('.nettobetrag-title');
const bruttobetragTitle = document.querySelectorAll('.bruttobetrag-title');


abziehen.addEventListener('click', function changeCalc() {
    for(const betragTitle of nettobetragTitle) {
        betragTitle.style.display = 'none';
    }
    for(const betragTitle of bruttobetragTitle) {
        betragTitle.style.display = 'block';
    }
})

aufschlagen.addEventListener('click', function changeCalc2() {
    for(const betragTitle of nettobetragTitle) {
        betragTitle.style.display = 'block';
    }
    for(const betragTitle of bruttobetragTitle) {
        betragTitle.style.display = 'none';
    }
})


if(form) {
    form.addEventListener('submit', function berechnen() {
        const operation = document.getElementsByName('operation');
        const wert = document.getElementsByName('wert');
        const nettobetrag = document.querySelector('#nettobetrag') as HTMLInputElement;
        const vat = document.querySelector('.vat');
        const grossAmount = document.querySelector('.gross-amount');
        let selectedOperation = '';
        let selectedWert = '';
        
        
        if(operation && wert && nettobetrag && vat && grossAmount) {
            for(const radio of operation) {
                if(radio.checked) {
                    selectedOperation = radio.value;
                    break;
                }
            }
            if(selectedOperation === 'aufschlagen') {
                for(const radio of wert) {
                    if(radio.checked) {
                        selectedWert = radio.value;
                        break;
                    }
                }
                if(selectedWert === '19') {
                    const vatResult: number = Number(nettobetrag.value) * 0.19;
                    const grossAmountResult: number = Number(nettobetrag.value) + vatResult;
                    vat.textContent = `${vatResult.toFixed(2)} €`;
                    grossAmount.textContent = `${grossAmountResult.toFixed(2)} €`;
                } else if (selectedWert === '7') {
                    console.log('Também deu certo');
                    const vatResult: number = Number(nettobetrag.value) * 0.07;
                    const grossAmountResult: number = Number(nettobetrag.value) + vatResult;
                    vat.textContent = `${vatResult.toFixed(2)} €`;
                    grossAmount.textContent = `${grossAmountResult.toFixed(2)} €`;
                } else {
                    console.log('Valor nao selecionado');
                }
            } else if(selectedOperation === 'abziehen') {
                for(const radio of wert) {
                    if(radio.checked) {
                        selectedWert = radio.value;
                        break;
                    }
                }
                if(selectedWert === '19') {
                    const vatResult: number = (Number(nettobetrag.value) / 1.19) * 0.19;
                    const grossAmountResult: number = Number(nettobetrag.value) - vatResult;
                    vat.textContent = `${vatResult.toFixed(2)} €`;
                    grossAmount.textContent = `${grossAmountResult.toFixed(2)} €`;
                } else if (selectedWert === '7') {
                    const vatResult: number = (Number(nettobetrag.value) / 1.19) * 0.07;
                    const grossAmountResult: number = Number(nettobetrag.value) - vatResult;
                    vat.textContent = `${vatResult.toFixed(2)} €`;
                    grossAmount.textContent = `${grossAmountResult.toFixed(2)} €`;
                } else {
                    console.log('Valor nao selecionado2');
                }
            } else {
                console.log('Selecione alguma coisa, pelamor!');
            }
        }
    })
}