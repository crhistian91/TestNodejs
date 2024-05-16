import robot from 'robotjs';

const TouchLetter = async () => {
  // Simular actividad cada 5 minutos
  setInterval(() => {
    // const keyToTap = 'a';
    // robot.keyTap(keyToTap); // Simula pulsar la tecla 'a'
    // console.log(`Simulando la pulsación de la tecla '${keyToTap}'`);
    // Obtén la posición actual del mouse
    const originalMousePos = robot.getMousePos();

    // Mueve el mouse un poco (en este caso, 5 píxeles) desde su posición actual
    const move = robot.moveMouse(originalMousePos.x + 5, originalMousePos.y);

    console.log(`se movio el mouse${move}`);
  }, 1 * 60 * 1000); // 5 minutos en milisegundos
};

export { TouchLetter };
