import { Typography } from "@material-ui/core/";

type RepoListProps = { data: string[] };

const RepoList: React.FC<RepoListProps> = ({ data }: RepoListProps) => {
  const list = data.map((name) => (
    <div key={name}>
      <Typography variant="body1" gutterBottom>
        {name}
      </Typography>
    </div>
  ));

  return <div className="repo-list">{list}</div>;
};
export default RepoList;
