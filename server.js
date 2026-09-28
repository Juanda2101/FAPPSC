import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use("/api", createProxyMiddleware({
  target: "http://10.55.117.35:3000",
  changeOrigin: true,
  pathRewrite: { "^/": "/api/" },
}));

app.use(express.static(path.join(__dirname, "dist")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
app.listen(5173, () => console.log("Frontend en producción escuchando en el puerto 5173"));

