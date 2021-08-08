export const addLineBreaks = (string) => {
  const displayString = string.split('\n').map(str => <p>{str}</p>);
  return displayString;
}