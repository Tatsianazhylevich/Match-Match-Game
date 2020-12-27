import ChristmasTree from '../../../assets/cards/ChristmasTree.jpg';
import LittleDeer from '../../../assets/cards/LittleDeer.jpg';
import Rabbit from '../../../assets/cards/Rabbit.jpg';
import Bool from '../../../assets/cards/Bool.jpg';
import Sheep from '../../../assets/cards/Gnome.jpg';
import Girl from '../../../assets/cards/Girl.jpg';
import Car from '../../../assets/cards/Car.jpg';
import Love from '../../../assets/cards/Love.jpg';
import Gingerbread from '../../../assets/cards/Gingerbread.jpg';
import Sock from '../../../assets/cards/Sock.jpg';
import Cap from '../../../assets/cards/Cap.jpg';
import Children from '../../../assets/cards/Children.jpg';

function shuffle(array) {
  const newArray = array.slice(0);
  for (let i = 0; i < array.length - 1; i += 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temp = newArray[i];
    newArray[i] = newArray[randomIndex];
    newArray[randomIndex] = temp;
  }
  return newArray;
}

export function initializeDeck() {
  let id = 0;
  const cards = [
    { name: 'ChristmasTree', front: ChristmasTree },
    { name: 'LittleDeer', front: LittleDeer },
    { name: 'Rabbit', front: Rabbit },
    { name: 'Bool', front: Bool },
    { name: 'Sheep', front: Sheep },
    { name: 'Girl', front: Girl },
    { name: 'Car', front: Car },
    { name: 'Love', front: Love },
    { name: 'Gingerbread', front: Gingerbread },
    { name: 'Sock', front: Sock },
    { name: 'Cap', front: Cap },
    { name: 'Children', front: Children },
  ].slice(0, 6).reduce((acc, type) => {
    acc.push({
      id: id += 1,
      type: type.front,
      key: id,
    });
    acc.push({
      id: id += 1,
      type: type.front,
      key: id,
    });
    return acc;
  }, []);

  return shuffle(cards);
}
