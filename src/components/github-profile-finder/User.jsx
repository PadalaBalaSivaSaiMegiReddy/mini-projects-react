export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}className="name-container">
        <a  href={`https://github.com/${login}`}><h1 style={{color:"tomato"}}>{name || login}</h1></a>
        <p  style={{color:"lightgreen"}}>
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div  className="profile-info">
        <div style={{marginBottom:"5px",marginTop:"5px"}}>
          <p>Public Repos</p>
          <p style={{color:"teal"}}>{public_repos}</p>
        </div >
        <div style={{marginBottom:"5px"}}>
          <p>Followers</p>
          <p  style={{color:"cornflowerblue"}}>{followers}</p>
        </div>
        <div style={{marginBottom:"5px"}}>
          <p>Following</p>
          <p style={{color:"thistle"}}>{following}</p>
        </div>
      </div>
    </div>
  );
}
