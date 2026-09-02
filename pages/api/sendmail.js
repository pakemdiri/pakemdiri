export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { csv, scores } = req.body;

  if (!csv || !scores) {
    return res.status(400).json({ error: "Missing csv or scores in request body" });
  }

  // TODO: integrate actual email sending via nodemailer
  // For now, log the received data on the server side
  res.status(200).json({ status: "success" });
}
