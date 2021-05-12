import { useState } from "react";
import {
  Button,
  Input,
  Typography,
  CircularProgress,
} from "@material-ui/core/";
import { useActions, useTypedSelector } from "../hooks";
import RepoList from "./RepoList";

const RepoSearch: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepos } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.repos);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("fock off");
    event.preventDefault();

    //dispatch(actionCreators.searchRepos(term));
    searchRepos(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search term..."
          autoFocus={true}
        />
        <Button
          className="submit-btn"
          type="submit"
          variant="contained"
          color="primary"
        >
          Search
        </Button>
      </form>
      {error && (
        <Typography variant="h4" gutterBottom>
          {error}
        </Typography>
      )}
      {loading && (
        <Typography variant="h4" gutterBottom>
          <CircularProgress className="progress" />
        </Typography>
      )}
      {!error && !loading && <RepoList data={data} />}
    </div>
  );
};

export default RepoSearch;
