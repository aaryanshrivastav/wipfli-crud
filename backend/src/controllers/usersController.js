import { getAllUsers } from "../repositories/usersRepo.js";

export async function getUsers(req, res) {
  try {
    const products = await getAllUsers();

    res.status(200).json(products);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch users"
    });
  }
}