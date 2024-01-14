export function extractEmails(users: Array<{ email: string } | null | undefined>): string[] {
  const uniqueEmailsSet = new Set<string>()

  if (!Array.isArray(users)) {
    throw new Error('Input should be an array of user objects.')
  }

  users.forEach((user) => {
    if (user && typeof user.email === 'string') {
      uniqueEmailsSet.add(user.email)
    }
  })

  return Array.from(uniqueEmailsSet)
}

/*
Се создава Set (uniqueEmailsSet) кој ќе ги чува уникатните email адреси. 
Set е структура која не дозволува дупликати, што значи дека ќе ги чува само едната копија на секоја email адреса.
Се проверува дали влезот users е низа со објекти. Ако не е, функцијата ќе фрли грешка со порака 'Input should be an array of user objects.'
Се користи forEach циклус за изминување на секој објект во низата users. 
За секој објект, се проверува дали е валиден корисник (не е null или undefined) и дали постои својство email кое е од тип string. 
Ако условите се исполнети, тогаш email адресата се додава во uniqueEmailsSet.
На крајот, се користи Array.from за преобразување на uniqueEmailsSet во низа, која потоа се враќа како резултат од функцијата.
*/
