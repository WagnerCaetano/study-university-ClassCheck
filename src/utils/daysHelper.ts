export const doesTodayHaveClasses = (listOfDays: any[]) => {
  const today = new Date().getDay();
  return listOfDays.find((c) => c["lista-dias-aulas"] === daysNumberToNameMap[today]);
};

const daysNumberToNameMap = {
  0: "domingo",
  1: "segunda",
  2: "terça",
  3: "quarta",
  4: "quinta",
  5: "sexta",
  6: "sábado",
};
