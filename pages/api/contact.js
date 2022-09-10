import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input!" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    // "mongodb+srv://J0shcodes:kNX4n8pZXoEUitTm@myblog-cluster.7f4vtt4.mongodb.net/blog-site?retryWrites=true&w=majority"

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.7f4vtt4.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`

    try {
      client = await MongoClient.connect(
        connectionString
      );
    } catch (error) {
      res
        .status(500)
        .json({
          message:
            "Unable to connect to database at this time. Please try again later!",
        });
        return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (error) {
      client.close();
      res
        .status(500)
        .json({ message: "Message not sent successfully. Please try again!" });
    }

    client.close();

    res
      .status(201)
      .json({ success: "Successfully stored message!", message: newMessage });
  }
}
