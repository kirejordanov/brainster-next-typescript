export function sumOfMultiples(multiple: number, max: number): number {
  if (multiple >= max) {
    return 0
  }

  let sum = 0
  for (let i = multiple; i <= max; i += multiple) {
    sum += i
  }

  return sum
}

/*Првично се прави проверка дали multiple е поголемо или еднакво на max. Ако multiple е поголемо или еднакво на max, 
тогаш не постои множење на multiple во опсегот до max, и функцијата враќа 0.
Ако multiple е помало од max, тогаш се извршува for циклус кој ќе ги созбере сите множители на multiple во опсегот од multiple до max.
Во for циклусот, let i = multiple го поставува почетниот број на множителите на multiple. 
Циклусот се извршува додека i е помало или еднакво на max, и секој пат се зголемува за multiple.
Внатре во циклусот, sum += i го додава тековниот множител на вкупната сума.
На крај, кога циклусот ќе заврши, функцијата ја враќа вкупната сума на множителите на multiple во опсегот до max.
*/
