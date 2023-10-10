import { Express, Router } from "express"
import fg from "fast-glob"

export function routes(app: Express) {
  // ternary importante para definir o caminho dos arquivos após a compilação pra javascript
  const routesPath = __filename.endsWith(".js") ? "**/dist/main/routes/**-routes.js": "**/src/main/routes/**routes.ts"
  
  const router = Router()
  app.use("/api", router)
  fg.sync(routesPath).map(async(file, _) => {
    // imports que nào estejam no cabeçalho devem ser feitos com a função import
    // a importação deve ser assíncrona
    // cada arquivo importado contem um export default function, por essa razao os parenteses e o .default
    const route = (await import(`../../../${file}`)).default
    route(router)
  })
}