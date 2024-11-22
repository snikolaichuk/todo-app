import { useState } from "react";

export function useCase() {
  const caseValue = localStorage.getItem('caseList');
  const casesArr = caseValue ? JSON.parse(caseValue) : [];

  const [cases, setCases] = useState(casesArr);

  //Создаем новый элемент
  const createCase = (title) => {
    setCases((cases) => [
    ...cases,
    {id: window.crypto.randomUUID(), title: title, done: false},
  ]);
  }

  //Переключить выполненность дела
  const toggleCase = (id, done) => { setCases((cases) =>
    cases.map((doneCase) => {
      if (doneCase.id === id) {
        done = !doneCase.done;
        return {...doneCase, done};
      } else {
        return doneCase;
      }
    })
  )};

  //Удалить дело
  const deleteCase = (id) => { setCases((cases) =>
    cases.filter((deleteCase) => {
      if (deleteCase.id === id) {
        localStorage.setItem('caseList', JSON.stringify(cases))
        return deleteCase.title = '';
      } else {
        return deleteCase;
      }}
    )
  )};

  return {
    cases,
    createCase,
    // setCaseTitle,
    toggleCase,
    deleteCase,
  };
}
