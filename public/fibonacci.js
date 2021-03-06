export default function createSequence(length) {
    let lengthNumber = Number(length);

    if (lengthNumber === NaN || lengthNumber <= 0)
        return '';

    if (lengthNumber > 1000)
        lengthNumber = 1000;

    const sequence = [];

    for (let n = 0; n < Math.floor(lengthNumber); n++) {
        if (n < 2)
            sequence.push(n);
        else {
            sequence.push(sequence[n - 1] + sequence[n - 2]);
        }
    }

    return sequence.join(', ');
}