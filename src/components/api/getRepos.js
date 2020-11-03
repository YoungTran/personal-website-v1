import axios from "axios";
export async function getRepos() {
  const repoList = await axios
    .get("https://api.github.com/users/youngtran/repos", {
      headers: {
        Authorization: "a95b4dc5a060c915cefd35a60419e9c8d83dcefa",
      },
    })
    .then((res) => {
      return res.data.filter((data) => !data.fork);
    })
    .catch((err) => {
      console.log({ err });
    });
  return repoList;
}
