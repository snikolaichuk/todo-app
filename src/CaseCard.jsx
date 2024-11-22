export const CaseCard = ({
  id,
  title,
  done,
  onToggle,
  onDelete,
}) => {

  const handleToggle = () => {
    onToggle(id, done);
  };

  const handleDelete = () => {
    if ( confirm('Вы хотете удалить дело?') ) {
      onDelete(id);
    }
  }

  return (
    <>
      {title}
      <div className="btn-group btn-group-sm">
        <button
          checked={done}
          onClick={handleToggle}
          className="btn btn-success">
            Готово
        </button>
        <button
          onClick={handleDelete}
          className="btn btn-danger">
            Удалить
        </button>
      </div>
    </>
  )
}
