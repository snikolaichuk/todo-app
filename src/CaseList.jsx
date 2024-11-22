import { CaseCard } from "./CaseCard"

export const CaseList = ({
  cases,
  onCaseToggle,
  onCaseDelete,
}) => {
  const successClass = "list-group-item-success ";
  const classesCase = "list-group-item d-flex justify-content-between align-items-center";

  return (
  <ul className="list-group">
      {cases.map(({id, title, done}) => {
        return (
          <li key={id} className={done ? (successClass + classesCase) : classesCase}>
            <CaseCard
              id={id}
              title={title}
              done={done}
              onToggle={onCaseToggle}
              onDelete={onCaseDelete}
            />
          </li>
        )
      })}
  </ul>
  )
}
