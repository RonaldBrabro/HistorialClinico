function seleccionarPorId(id) {
  return document.getElementById(id);
}

function seleccionarPorClase(clase) {
  return document.querySelectorAll('.' + clase);
}

function seleccionarPorEtiqueta(etiqueta) {
  return document.getElementsByTagName(etiqueta);
}

function cambiarTexto(id, texto) {
  var elemento = seleccionarPorId(id);
  if (elemento) {
    elemento.textContent = texto;
  }
}

function cambiarEstilo(id, estilo) {
  var elemento = seleccionarPorId(id);
  if (elemento) {
    Object.assign(elemento.style, estilo);
  }
}

function alternarVisibilidad(id) {
  var elemento = seleccionarPorId(id);
  if (elemento) {
    elemento.style.display = elemento.style.display === 'none' ? 'block' : 'none';
  }
}

function agregarFilaLista(idLista, texto) {
  var lista = seleccionarPorId(idLista);
  if (!lista) {
    return;
  }
  var item = document.createElement('li');
  item.textContent = texto;
  lista.appendChild(item);
}

function eliminarUltimoItem(idLista) {
  var lista = seleccionarPorId(idLista);
  if (lista && lista.lastElementChild) {
    lista.removeChild(lista.lastElementChild);
  }
}

function inicializarFuncionesHistoriaClinica() {
  var botonTexto = seleccionarPorId('boton-texto');
  var botonEstilo = seleccionarPorId('boton-estilo');
  var botonVisibilidad = seleccionarPorId('boton-visibilidad');
  var botonAgregar = seleccionarPorId('boton-agregar');
  var botonEliminar = seleccionarPorId('boton-eliminar');
  var campoEntrada = seleccionarPorId('entrada-item');

  if (botonTexto) {
    botonTexto.addEventListener('click', function () {
      cambiarTexto('texto-dinamico', 'Texto actualizado desde JavaScript puro');
    });
  }

  if (botonEstilo) {
    botonEstilo.addEventListener('mouseover', function () {
      cambiarEstilo('texto-dinamico', { color: '#0f6b6f', fontSize: '1.1rem' });
    });
  }

  if (botonVisibilidad) {
    botonVisibilidad.addEventListener('click', function () {
      alternarVisibilidad('bloque-ocultable');
    });
  }

  if (botonAgregar && campoEntrada) {
    botonAgregar.addEventListener('click', function () {
      if (campoEntrada.value.trim()) {
        agregarFilaLista('lista-dinamica', campoEntrada.value.trim());
        campoEntrada.value = '';
      }
    });
  }

  if (botonEliminar) {
    botonEliminar.addEventListener('click', function () {
      eliminarUltimoItem('lista-dinamica');
    });
  }

  var elementosClase = seleccionarPorClase('item-demo');
  elementosClase.forEach(function (elemento) {
    elemento.style.fontWeight = '600';
  });

  var etiquetasParrafo = seleccionarPorEtiqueta('p');
  if (etiquetasParrafo.length > 0) {
    etiquetasParrafo[0].style.opacity = '0.85';
  }

  if (campoEntrada) {
    campoEntrada.addEventListener('keydown', function (evento) {
      if (evento.key === 'Enter') {
        evento.preventDefault();
        agregarFilaLista('lista-dinamica', campoEntrada.value.trim());
        campoEntrada.value = '';
      }
    });
  }
}
