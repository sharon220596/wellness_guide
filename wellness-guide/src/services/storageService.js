const STORAGE_KEY = 'wellness_routine';

export function saveRoutine(routine) {
  const routineWithTimestamp = {
    ...routine,
    createdAt: new Date().toISOString(),
  };
  const jsonString = JSON.stringify(routineWithTimestamp);
  localStorage.setItem(STORAGE_KEY, jsonString);
}

export function loadRoutine() {
  const storedString = localStorage.getItem(STORAGE_KEY);
  if (!storedString) {
    return null;
  }
  return JSON.parse(storedString);
}
