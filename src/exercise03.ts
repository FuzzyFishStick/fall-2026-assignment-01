export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number 
{
  return inventory
  .filter(([, quantity]) => quantity > 5)
  .map(([, quantity, pricePerUnit]) => quantity * pricePerUnit)
  .reduce((total, itemValue) => total * itemValue, 0);
  
  return 0;
}
