import db from './db'

export const updateTabel= async(
    id,
    {name ,role = null}
)=>{
    const query = "update users set Name = ?, role = ?";

    const [{changedRows}]= await db.execute( query,[
        name,
        role,
        id,
    ]);
    return changedRows
}


export const deleteTabel = async(id)=>{
    if (!id) return "user id is required!";
    const query = "delete from users where userId = ?";

    const [{affectedRows}]=await db.execute(query,[id])
    return affectedRows
}


export const getAllTabele= async(id)=>{
    const query = "select * from users";
  const [users] = await db.execute(query);
  return users;
}

export const createUserTabele = async ({
    Name,
    role = null,
  }) => {
    const query =
      "insert into users(Name, role) values(?, ?, ?, ?)";
    const [{ insertId }] = await db.execute(query, [
      Name,
      role
    ]);
    return insertId;
  };