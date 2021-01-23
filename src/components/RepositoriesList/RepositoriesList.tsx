import { useState, ChangeEvent, FormEvent } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchRepositories } = useActions();

  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(searchTerm);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" value={searchTerm} onChange={onChangeHandler} />
        <button type="submit">Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
