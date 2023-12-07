async function shellSort() {
    console.log('In shellSort()');
    const ele = document.querySelectorAll(".bar");
    const n = ele.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            console.log('In ith loop');
            let temp = ele[i].style.height;
            let j = i;

            ele[i].style.background = 'blue';

            while (j >= gap && parseInt(ele[j - gap].style.height) > parseInt(temp)) {
                console.log('In while loop');
                ele[j].style.background = 'red';
                ele[j - gap].style.background = 'red';

                await waitforme(delay);

                ele[j].style.height = ele[j - gap].style.height;

                ele[j].style.background = 'cyan';
                ele[j - gap].style.background = 'cyan';

                j -= gap;
            }

            await waitforme(delay);

            ele[j].style.height = temp;
            ele[j].style.background = 'green';
        }
    }
}

const shellSortBtn = document.querySelector(".shellSort");
shellSortBtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await shellSort();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
