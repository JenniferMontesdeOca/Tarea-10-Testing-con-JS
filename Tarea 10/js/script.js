// TAREA 13: Arregla el código roto
const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.';
    }
    if (percentSharedDNA >= 35) {
        return 'You are likely parent and child or full siblings.';
    }
    if (percentSharedDNA >= 14) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.';
    }
    if (percentSharedDNA >= 6) {
        return 'You are likely 1st cousins.';
    }
    if (percentSharedDNA >= 3) {
        return 'You are likely 2nd cousins.';
    }
    if (percentSharedDNA >= 1) {
        return 'You are likely 3rd cousins.';
    }
    return 'You are likely not related.';
};

const displayRelation = () => {
    const percentSharedDNA = parseInt(document.getElementById('dnaInput').value);
    const result = whatRelation(percentSharedDNA);
    document.getElementById('dnaResult').innerText = result;
};

// TAREA 14: Calculadora de propinas
const tipCalculator = (quality, total) => {
    switch (quality.toLowerCase()) {
        case 'malo':
            return total * 0.05;
        case 'ok':
            return total * 0.15;
        case 'bueno':
            return total * 0.20;
        case 'excelente':
            return total * 0.30;
        default:
            return total * 0.18;
    }
};

const calculateTip = () => {
    const quality = document.getElementById('qualityInput').value;
    const total = parseFloat(document.getElementById('totalInput').value);
    const tip = tipCalculator(quality, total);
    document.getElementById('tipResult').innerText = `La propina es: ${tip}`;
};

// TAREA 15: toEmoticon
const toEmoticon = (string) => {
    switch (string.toLowerCase()) {
        case 'shrug':
            return '|_{"}_|';
        case 'smiley face':
            return ':)';
        case 'frowny face':
            return ':(';
        case 'winky face':
            return ';)';
        case 'heart':
            return '<3';
        default:
            return '|_(* ~ *)_|';
    }
};

const displayEmoticon = () => {
    const text = document.getElementById('emoticonInput').value;
    const emoticon = toEmoticon(text);
    document.getElementById('emoticonResult').innerText = emoticon;
};
