import { useEffect } from 'react';
import { CaseList } from './CaseList';
import { useCase } from './useCase';
import { useBtnDisabled } from './useBtnDisabled';

export const App = () => {
  const { cases, createCase, toggleCase, deleteCase } = useCase();

  const handleSubmit = (e) => {
    e.preventDefault();
    createCase(e.target.firstChild.value);
    localStorage.setItem('caseList', JSON.stringify(cases));
    e.target.firstChild.value = '';
  }

  useEffect(() => {
    localStorage.setItem('caseList', JSON.stringify(cases))
  }, [cases]);

  const { btnDisabled, btnAddCase } = useBtnDisabled();

  return (
    <div className="container">
      <h2>Мои дела</h2>
      <form className="input-group mb-3" onSubmit={handleSubmit}>
        <input
          onChange={btnAddCase}
          className='form-control'
          placeholder='Введите новое дело'
        />
        <div className='input-group-append'>
          <button disabled={btnDisabled} className='btn btn-primary'>Добавить дело</button>
        </div>
      </form>

      <CaseList
        cases={cases}
        onCaseToggle={toggleCase}
        onCaseDelete={deleteCase}
      />
    </div>
  )
}
