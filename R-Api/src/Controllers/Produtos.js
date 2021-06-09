
module.exports = app => {

    const store = [];

  function logRequests(request, response, next) {
    const { method, url } = request;

    const logLabel = `[${method.toUpperCase()}] ${url}`;

    console.log(logLabel);

    return next();
  }

  function validateProductId(request, response, next) {
    const { id } = request.params;

    if (!isUuid(id)) {
      return response.status(400).json({ error: "ID do produto é inválido!" });
    }

    return next();
  }

  app.use(logRequests);

  app.get("/store", (request, response) => {
    const { nome } = request.query;

    const results = nome
      ? store.filter((product) => product.nome.includes(nome))
      : store;

    return response.json(results);
  });

  app.post("/store", (request, response) => {
    const { nome, marca, peso, preco, desc } = request.body;
    // console.log(body)

    const product = { id: uuidv4(), nome, marca, peso, preco, desc };
    store.push(product);
    return response.json(product);
  });

  app.put("/store/:id", validateProductId, (request, response) => {
    const { id } = request.params;
    const { nome, marca, peso, preco, desc } = request.body;

    const productIndex = store.findIndex((product) => product.id === id);
    if (productIndex < 0) {
      return response.status(400).json({ error: "Produto não encontrado!" });
    }

    const product = { id, nome, marca, peso, preco, desc };
    store[productIndex] = product;

    return response.json(product);
  });

  app.delete("/store/:id", validateProductId, (request, response) => {
    const { id } = request.params;

    const productIndex = store.findIndex((product) => product.id === id);
    if (productIndex < 0) {
      return response.status(400).json({ error: "Produto não encontrado!" });
    }

    store.splice(productIndex, 1);

    return response.status(204).send();
  });
};
