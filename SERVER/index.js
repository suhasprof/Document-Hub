const mongoose = require("mongoose");
const Document = require("./Doc");
mongoose.connect("mongodb://localhost:27017/Google-docs-Clone", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true,
});
const defaultValue = "";
const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:5173",
    method: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("get-document", async (documentID) => {
    const document = await findOrCreateDocument(documentID);
    socket.join(documentID); //get  document joine dthe room.
    socket.emit("load-document", document.data);

    socket.on("send-changes", (delta) => {
      socket.broadcast.to(documentID).emit("receive-changes", delta);
    });
    socket.on("save-document", async (data) => {
      await Document.findByIdAndUpdate(documentID, { data });
    });
  });
});

async function findOrCreateDocument(id) {
  if (id == null) return;
  const document = await Document.findById(id);
  if (document) return document;
  return await Document.create({ _id: id, data: defaultValue });
}
