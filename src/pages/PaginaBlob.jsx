import { useState } from 'react';

const PaginaBlob = () => {
  const [blob, setBlob] = useState(null);
  const [resultado, setResultado] = useState('');

  const textoOriginal = 'Este es un archivo de texto generado con Blob en React. Universidad Católica de Salta - Lenguaje IV.';

  const crearBlob = () => {
    const nuevoBlob = new Blob([textoOriginal], { type: 'text/plain' });
    setBlob(nuevoBlob);
    setResultado(`Blob creado.\nTipo: ${nuevoBlob.type}\nTamaño: ${nuevoBlob.size} bytes`);
  };

  const descargarBlob = () => {
    if (!blob) {
      setResultado('Primero tenés que crear el Blob.');
      return;
    }

    const url = URL.createObjectURL(blob);
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = 'archivo.txt';
    enlace.click();
    URL.revokeObjectURL(url);

    setResultado('Blob descargado como archivo.txt');
  };

  const usarSlice = () => {
    if (!blob) {
      setResultado('Primero tenés que crear el Blob.');
      return;
    }

    const blobParcial = blob.slice(0, 20, 'text/plain');

    const lector = new FileReader();
    lector.onload = () => {
      setResultado(`Blob original (${blob.size} bytes) recortado con slice(0, 20).\nContenido del fragmento:\n"${lector.result}"`);
    };
    lector.readAsText(blobParcial);
  };

  return (
    <div>
      <h1>Ejemplo de uso de Blobs</h1>

      <div className="botones">
        <button onClick={crearBlob}>Crear Blob de texto</button>
        <button onClick={descargarBlob}>Descargar Blob</button>
        <button onClick={usarSlice}>Usar slice()</button>
      </div>

      <div className="resultado">{resultado}</div>
    </div>
  );
};

export default PaginaBlob;
