import{
    createUserTabele,
    deleteTabel,
    updateTabel,
    getAllTabele,
} from "./models"

export const getAll =async(req,res)=>{
    try {
        const users = await getAllTabele();
        res.status(200).send(users);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "internal server error!" });
     
    }
}

export const create = async (req, res) => {
    try {
      const userId = await createUserTabele(req.body);
      res.status(200).json({ userId, ...req.body });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "internal server error!" });
    }
  };

  export const  updateId = async (req, res) => {
    try {
      const response = await updateTabel(req.params.id, req.body);
      if (response) {
        return res
          .status(200)
          .json({ success: true, message: "updated user successfully" });
      }
      res.status(404).json({ success: false, message: "user not found!" });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "internal server error!" });
    }
  };

  export const deleteId = async (req, res) => {
    try {
      const response = await deleteTabel(req.params.id);
      if (response) {
        return res
          .status(200)
          .json({ success: true, message: "deleted user successfully" });
      }
      res.status(404).json({ success: false, message: "user not found!" });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: "internal server error!" });
    } 
  };