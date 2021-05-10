import { useState } from "react";
import { useDispatch } from "react-redux";
import { useActions, useTypedSelector } from "../hooks";

const RepoSearch: React.FC = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const { searchRepos } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.repos);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //dispatch(actionCreators.searchRepos(term));
    searchRepos(term);
  };

  const repoList = data.map((name) => <div key={name}>{name}</div>);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search term..."
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && repoList}
    </div>
  );
};

export default RepoSearch;
