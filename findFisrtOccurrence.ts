function findFisrtOccurrence(data: number[], target: number): number {
    let low: number = 0;
    let high: number = data.length - 1;
    let result: number = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (data[mid] == target) {
            result = mid;
            high = mid -1;
        }
        else if (data[mid] > target) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return result;
}
let data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let index: number = findFisrtOccurrence(data, 8);
if (index !== -1) {
    console.log(index);
}
else {
    console.log('khong tim thay');

}
