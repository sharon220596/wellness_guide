import yogasanaData from '../data/yogasanas.json';

export function getAllYogasanas() {
  return yogasanaData.yogasanas;
}

export function getYogasanaById(id) {
  return yogasanaData.yogasanas.find((yogasana) => yogasana.id === id);
}
