import axios from "axios";
export async function getRepos() {
  const repoList = await axios
    .get("https://api.github.com/users/youngtran/repos")
    .then((res) => {
      return res.data.filter((data) => !data.fork);
    })
    .catch((err) => {
      console.log({ err });
    });
  return repoList;
}
