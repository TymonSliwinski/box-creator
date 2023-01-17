const randRGB = () => Math.random() * 255;

    /**
     * @param {number} amount amount of boxes to add
     */
    const createBoxes = (amount) => {
        try {
            parseInt(amount);
        } catch { return }

        const boxCount = document.querySelectorAll('.box').length;
        // start at boxCount to not start from the small box if there are any
        for (let i = boxCount; i < +amount + boxCount; i++) {
            const box = document.createElement('div');
            Object.assign(box.style, {
                'width': `${30 + i * 10}px`,
                'height': `${30 + i * 10}px`,
                'backgroundColor': `rgb(${randRGB()}, ${randRGB()}, ${randRGB()})`
            });
            box.className = 'box';
            document.querySelector('#boxes').appendChild(box);
        }
    };

    const destroyBoxes = () => {
        document.querySelector('#boxes').innerHTML = '';
    };

    Array.from(document.querySelectorAll('button')).forEach(button => {
        const action = button?.dataset.action;

        switch (action) {
            case 'create':
                button.addEventListener('click', () => createBoxes(document.querySelector('input').value));
                break;
            case 'destroy':
                button.addEventListener('click', destroyBoxes);
            default:
                break;
        }
    });