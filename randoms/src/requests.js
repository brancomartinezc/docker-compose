// El objetivo es reemplazar esto por microservicios que oculten la fuente de datos.
const requests = [
  {"url":`http://localhost:${process.env.EXPRESS_APP_PORT}`,"color":"pink"},
  {"url":`http://localhost:${process.env.PHP_APP_PORT}`,"color":"cyan"},
  {"url":`http://localhost:${process.env.PYTHON_APP_PORT}`,"color":"yellow"},
]

export default requests;
