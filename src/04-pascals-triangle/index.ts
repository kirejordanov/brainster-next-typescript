export function getPascalsTriangleRow(rowIndex: number): number[] {
  if (rowIndex < 0) {
    throw new Error('Row index should be a non-negative integer.')
  }

  const row: number[] = [1]

  for (let i = 1; i <= rowIndex; i++) {
    const newRow: number[] = []
    newRow[0] = 1

    for (let j = 1; j < i; j++) {
      newRow[j] = row[j - 1] + row[j]
    }

    newRow[i] = 1
    row.length = 0
    row.push(...newRow)
  }

  return row
}

/*
Прво се прави проверка дали влезниот параметар rowIndex е не-негативен цел број (поголем или еднаков на 0). 
Ако rowIndex е негативен, функцијата враќа грешка со порака 'Row index should be a non-negative integer.'
Се иницијализира почетниот ред на Паскаловиот триаголник, кој е само еден елемент - бројот 1.
Се користи for циклус за обиколување на сите редови до дадениот индекс rowIndex. Во секој чекор се генерира нов ред на триаголникот.
Во секој чекор се користи newRow за генерирање на нов ред. Првиот и последниот елемент во секој ред е 1, а сите останати елементи се збир на соодветните елементи од претходниот ред (row).
По генерирањето на новиот ред, стариот ред (row) се брише (row.length = 0), а потоа се додаваат сите елементи од новиот ред (row.push(...newRow)).
На крај, кога ќе се заврши циклусот, функцијата го враќа генерираниот ред на Паскаловиот триаголник за дадениот индекс rowIndex.
*/
