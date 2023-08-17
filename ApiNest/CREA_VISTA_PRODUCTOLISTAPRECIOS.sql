CREATE VIEW Productolistafaltantes AS
SELECT productos.idproductos, productos.codigobarra, productos.nombreproducto, productos.preciocompra , productos.preciocomprausd , productos.existencia, productos.minimo, rubros.nombrerubro FROM productos
          INNER JOIN rubros ON productos.rubroid = rubros.idrubros 